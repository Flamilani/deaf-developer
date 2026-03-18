import { Component, signal, computed, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { COURSES_DATABASE, CourseData, CourseModule, Lesson } from '../../data/courses.data';
import { QuizComponent } from '../../features/quiz/quiz.component';

type ViewMode = 'intro' | 'lesson';

@Component({
  selector: 'app-panel-course',
  imports: [RouterLink, QuizComponent],
  templateUrl: './panel-course.pages.html',
  styleUrl: './panel-course.pages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelCoursePages implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  course = signal<CourseData | null>(null);
  modules = signal<CourseModule[]>([]);
  selectedLesson = signal<Lesson | null>(null);
  viewMode = signal<ViewMode>('intro');
  introTab = signal<'sobre' | 'objetivos' | 'metodologia' | 'modulos'>('sobre');
  videoPlaying = signal(false);

  /** ID of the module whose quiz is currently open (null = no quiz open) */
  activeQuizModuleId = signal<number | null>(null);

  /** Returns the Quiz for the currently active module, or null */
  activeModuleQuiz = computed(() => {
    const id = this.activeQuizModuleId();
    if (id === null) return null;
    return this.modules().find(m => m.id === id)?.quiz ?? null;
  });

  /** Sanitized URL safe for iframe src binding */
  safeVideoUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.course()?.introVideoUrl;
    if (!url) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?autoplay=1&rel=0`);
  });

  toggleIntroVideo(): void {
    this.videoPlaying.update(v => !v);
  }

  totalCompleted = computed(() =>
    this.modules().flatMap(m => m.lessons).filter(l => l.completed).length
  );

  totalLessons = computed(() =>
    this.modules().flatMap(m => m.lessons).length
  );

  progressPercent = computed(() => {
    const total = this.totalLessons();
    return total > 0 ? Math.round((this.totalCompleted() / total) * 100) : 0;
  });

  /** First uncompleted lesson, or first lesson if all done */
  firstLesson = computed<Lesson | null>(() => {
    const all = this.modules().flatMap(m => m.lessons);
    return all.find(l => !l.completed) ?? all[0] ?? null;
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = COURSES_DATABASE.find(c => c.id === id) ?? COURSES_DATABASE[0];
    this.course.set(found);

    const mods = found.modules.map(m => ({ ...m, lessons: [...m.lessons] }));
    this.modules.set(mods);

    const slugParam = this.route.snapshot.queryParamMap.get('aula');
    if (slugParam) {
      const allLessons = mods.flatMap(m => m.lessons);
      const target = allLessons.find(l => l.slug === slugParam) ?? allLessons[0];

      // Open the module that contains this lesson
      this.modules.update(ms =>
        ms.map(m => ({
          ...m,
          isOpen: m.lessons.some(l => l.slug === target.slug) ? true : m.isOpen,
        }))
      );

      this.selectedLesson.set(target);
      this.viewMode.set('lesson');
    }
    // No slug → stay on intro view
  }

  startCourse(): void {
    const lesson = this.firstLesson();
    if (!lesson) return;
    this.selectLesson(lesson);
  }

  selectLesson(lesson: Lesson): void {
    // Close any open quiz when switching back to a lesson
    this.activeQuizModuleId.set(null);

    // Open the module that contains this lesson
    this.modules.update(ms =>
      ms.map(m => ({
        ...m,
        isOpen: m.lessons.some(l => l.id === lesson.id) ? true : m.isOpen,
      }))
    );
    this.selectedLesson.set(lesson);
    this.viewMode.set('lesson');
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { aula: lesson.slug },
      queryParamsHandling: 'merge',
      replaceUrl: false,
    });
  }

  goToIntro(): void {
    this.viewMode.set('intro');
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { aula: null },
      queryParamsHandling: 'merge',
      replaceUrl: false,
    });
  }

  toggleModule(moduleId: number): void {
    this.modules.update(mods =>
      mods.map(m => m.id === moduleId ? { ...m, isOpen: !m.isOpen } : m)
    );
  }

  markCompleted(): void {
    const current = this.selectedLesson();
    if (!current) return;
    this.modules.update(mods =>
      mods.map(m => ({
        ...m,
        lessons: m.lessons.map(l =>
          l.id === current.id ? { ...l, completed: true } : l
        ),
      }))
    );
    this.selectedLesson.update(l => l ? { ...l, completed: true } : l);
  }

  setIntroTab(tab: 'sobre' | 'objetivos' | 'metodologia' | 'modulos'): void {
    this.introTab.set(tab);
  }

  openQuiz(moduleId: number): void {
    this.activeQuizModuleId.set(moduleId);
  }

  closeQuiz(): void {
    this.activeQuizModuleId.set(null);
  }
}
