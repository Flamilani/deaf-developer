import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COURSES_DATABASE, CourseData } from '../../data/courses.data';

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="courses-page">
      <header class="courses-header">
        <h1 class="courses-heading">
          Cursos de Tecnologia
        </h1>
        <p class="courses-subtitle">
          Especialize-se com trilhas de aprendizado pensadas do zero para a experiência visual e em Língua de Sinais.
        </p>
      </header>

      <!-- Category Filter -->
      <div class="categories-bar" role="group" aria-label="Filtrar por categoria">
        @for (cat of categories(); track cat) {
          <button
            type="button"
            (click)="selectedCategory.set(cat)"
            [class]="'category-btn' + (selectedCategory() === cat ? ' active' : '')"
            [attr.aria-pressed]="selectedCategory() === cat"
          >
            {{ cat }}
          </button>
        }
      </div>

      <!-- Courses Grid -->
      <div class="courses-grid" role="list">
        @for (course of filteredCourses(); track course.id) {
          <article class="course-card" role="listitem">
            <div class="course-card-thumb">
              <span class="course-icon" aria-hidden="true">{{ course.icon }}</span>
              <div class="course-level-badge">{{ course.level }}</div>
            </div>
            <div class="course-card-body">
              <div class="course-card-meta">
                <span class="course-category">{{ course.category }}</span>
                <span class="course-price" [class.free]="course.price === 'Grátis'">{{ course.price }}</span>
              </div>
              <h2 class="course-card-title">{{ course.title }}</h2>
              <p class="course-card-desc">{{ course.description }}</p>

              <div class="course-card-footer">
                <div class="course-professors">
                  @for (prof of course.professors.slice(0, 2); track prof) {
                    <div class="prof-avatar" [attr.title]="prof" [attr.aria-label]="prof">
                      {{ prof.split(' ').pop()?.charAt(0) }}
                    </div>
                  }
                  @if (course.professors.length > 2) {
                    <div class="prof-avatar prof-more">+{{ course.professors.length - 2 }}</div>
                  }
                </div>
                <a
                  [routerLink]="['/painel-curso', course.id]"
                  class="course-cta-btn"
                  [attr.aria-label]="'Iniciar o curso ' + course.title"
                >
                  Iniciar Aula
                </a>
              </div>
            </div>
          </article>
        }
      </div>
    </div>
  `,
  styles: [`
    .courses-page {
      padding: 2rem 2.5rem;
      max-width: 1280px;
      margin: 0 auto;
    }

    .courses-header {
      margin-bottom: 2.5rem;
    }

    .courses-heading {
      font-size: 2.25rem;
      font-weight: 800;
      background: linear-gradient(to right, #60a5fa, #818cf8);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.75rem;
    }

    .courses-subtitle {
      color: #94a3b8;
      font-size: 1rem;
      max-width: 600px;
      line-height: 1.6;
    }

    .categories-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-bottom: 2.5rem;
    }

    .category-btn {
      background: #1e293b;
      border: 1px solid #334155;
      color: #94a3b8;
      padding: 0.45rem 1.1rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .category-btn:hover {
      background: #334155;
      color: #e2e8f0;
    }
    .category-btn.active {
      background: #3b82f6;
      border-color: #3b82f6;
      color: #fff;
    }

    .courses-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
      gap: 1.75rem;
    }

    .course-card {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(51, 65, 85, 0.6);
      border-radius: 1rem;
      overflow: hidden;
      transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
    }
    .course-card:hover {
      border-color: rgba(59, 130, 246, 0.5);
      transform: translateY(-4px);
      box-shadow: 0 16px 40px -8px rgba(59, 130, 246, 0.15);
    }

    .course-card-thumb {
      height: 10rem;
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .course-icon {
      font-size: 3.5rem;
      transition: transform 0.4s;
    }
    .course-card:hover .course-icon {
      transform: scale(1.15);
    }

    .course-level-badge {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      background: rgba(10, 15, 30, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(59, 130, 246, 0.3);
      color: #60a5fa;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 0.25rem 0.7rem;
      border-radius: 9999px;
    }

    .course-card-body {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .course-card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .course-category {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #818cf8;
    }

    .course-price {
      font-size: 0.85rem;
      font-weight: 700;
      color: #f87171;
      font-family: monospace;
    }
    .course-price.free {
      color: #4ade80;
    }

    .course-card-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: #f1f5f9;
      line-height: 1.35;
      transition: color 0.2s;
    }
    .course-card:hover .course-card-title {
      color: #60a5fa;
    }

    .course-card-desc {
      font-size: 0.85rem;
      color: #94a3b8;
      line-height: 1.55;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .course-card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid rgba(51, 65, 85, 0.5);
    }

    .course-professors {
      display: flex;
    }

    .prof-avatar {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: #3b82f6;
      border: 2px solid #0a0f1e;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 700;
      color: #fff;
      margin-left: -0.4rem;
    }
    .prof-avatar:first-child {
      margin-left: 0;
      background: #6366f1;
    }
    .prof-more {
      background: #334155;
      color: #94a3b8;
    }

    .course-cta-btn {
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.3);
      color: #60a5fa;
      font-size: 0.8rem;
      font-weight: 700;
      padding: 0.5rem 1.1rem;
      border-radius: 0.5rem;
      text-decoration: none;
      transition: all 0.2s;
      display: inline-block;
    }
    .course-cta-btn:hover {
      background: #3b82f6;
      color: #fff;
    }

    @media (max-width: 640px) {
      .courses-page {
        padding: 1.25rem 1rem;
      }
      .courses-heading {
        font-size: 1.65rem;
      }
    }
  `]
})
export class CoursesComponent {
  private allCourses = signal<CourseData[]>(COURSES_DATABASE);

  categories = computed(() => {
    const cats = new Set(this.allCourses().map(c => c.category));
    return ['Todos', ...Array.from(cats)];
  });

  selectedCategory = signal('Todos');

  filteredCourses = computed(() => {
    const selected = this.selectedCategory();
    if (selected === 'Todos') return this.allCourses();
    return this.allCourses().filter(c => c.category === selected);
  });
}
