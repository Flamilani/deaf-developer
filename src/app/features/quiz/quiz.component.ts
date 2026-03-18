import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  signal,
  computed,
} from '@angular/core';
import { Quiz, QuizQuestion } from '../../data/courses.data';

type AnswerState = 'unanswered' | 'correct' | 'wrong';

interface QuestionState {
  question: QuizQuestion;
  selectedIndex: number | null;
  state: AnswerState;
}

@Component({
  selector: 'app-quiz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="quiz-wrapper" role="region" [attr.aria-label]="quiz().title">
      <!-- Header -->
      <div class="quiz-header">
        <div class="quiz-header-left">
          <span class="quiz-icon" aria-hidden="true">🧩</span>
          <div>
            <h2 class="quiz-title">{{ quiz().title }}</h2>
            <p class="quiz-subtitle">{{ quiz().questions.length }} questões de múltipla escolha</p>
          </div>
        </div>
        @if (!isFinished()) {
          <div class="quiz-progress-pill">
            {{ currentIndex() + 1 }}/{{ quiz().questions.length }}
          </div>
        }
      </div>

      <!-- Progress bar -->
      @if (!isFinished()) {
        <div class="quiz-progress-bar" role="progressbar"
             [attr.aria-valuenow]="currentIndex() + 1"
             [attr.aria-valuemin]="1"
             [attr.aria-valuemax]="quiz().questions.length"
             [attr.aria-label]="'Questão ' + (currentIndex() + 1) + ' de ' + quiz().questions.length">
          <div class="quiz-progress-fill"
               [style.width.%]="((currentIndex() + 1) / quiz().questions.length) * 100">
          </div>
        </div>
      }

      <!-- Question Card -->
      @if (!isFinished()) {
        @let q = questionStates()[currentIndex()];
        <div class="quiz-question-card">
          <p class="quiz-question-text">
            <span class="quiz-q-num" aria-hidden="true">{{ currentIndex() + 1 }}.</span>
            {{ q.question.question }}
          </p>

          <div class="quiz-alternatives" role="radiogroup" [attr.aria-label]="'Alternativas para a questão ' + (currentIndex() + 1)">
            @for (alt of q.question.alternatives; track $index) {
              <button
                class="quiz-alt-btn"
                type="button"
                [class.selected]="q.selectedIndex === $index"
                [class.correct]="q.state !== 'unanswered' && $index === q.question.correctIndex"
                [class.wrong]="q.state === 'wrong' && q.selectedIndex === $index"
                [class.disabled]="q.state !== 'unanswered'"
                [disabled]="q.state !== 'unanswered'"
                [attr.aria-pressed]="q.selectedIndex === $index"
                [attr.aria-label]="'Alternativa ' + altLabel($index) + ': ' + alt"
                (click)="selectAnswer($index)">
                <span class="alt-letter" aria-hidden="true">{{ altLabel($index) }}</span>
                <span class="alt-text">{{ alt }}</span>
                @if (q.state !== 'unanswered') {
                  @if ($index === q.question.correctIndex) {
                    <span class="alt-icon" aria-hidden="true">✓</span>
                  } @else if (q.selectedIndex === $index) {
                    <span class="alt-icon wrong-icon" aria-hidden="true">✗</span>
                  }
                }
              </button>
            }
          </div>

          <!-- Explanation -->
          @if (q.state !== 'unanswered') {
            <div class="quiz-explanation" [class.correct-exp]="q.state === 'correct'" [class.wrong-exp]="q.state === 'wrong'"
                 role="alert">
              <span class="exp-icon" aria-hidden="true">{{ q.state === 'correct' ? '🎉' : '💡' }}</span>
              <div>
                <p class="exp-label">{{ q.state === 'correct' ? 'Correto!' : 'Resposta incorreta' }}</p>
                <p class="exp-text">{{ q.question.explanation }}</p>
              </div>
            </div>

            <!-- Next / Finish -->
            <div class="quiz-actions">
              @if (currentIndex() < quiz().questions.length - 1) {
                <button class="quiz-next-btn" type="button" (click)="nextQuestion()">
                  Próxima questão →
                </button>
              } @else {
                <button class="quiz-next-btn quiz-finish-btn" type="button" (click)="finishQuiz()">
                  Ver resultado 🏆
                </button>
              }
            </div>
          }
        </div>
      }

      <!-- Result Screen -->
      @if (isFinished()) {
        <div class="quiz-result" role="status" aria-live="polite">
          <div class="result-emoji" aria-hidden="true">{{ resultEmoji() }}</div>
          <h3 class="result-score">{{ score() }}/{{ quiz().questions.length }}</h3>
          <p class="result-label">{{ resultLabel() }}</p>
          <div class="result-bar-wrap">
            <div class="result-bar"
                 role="progressbar"
                 [attr.aria-valuenow]="scorePercent()"
                 aria-valuemin="0"
                 aria-valuemax="100">
              <div class="result-bar-fill" [style.width.%]="scorePercent()" [class.green]="scorePercent() >= 75" [class.yellow]="scorePercent() >= 50 && scorePercent() < 75" [class.red]="scorePercent() < 50"></div>
            </div>
            <span class="result-pct">{{ scorePercent() }}%</span>
          </div>

          <div class="result-actions">
            <button class="quiz-retry-btn" type="button" (click)="retryQuiz()" aria-label="Tentar novamente o quiz">
              🔄 Tentar novamente
            </button>
            <button class="quiz-close-btn" type="button" (click)="closed.emit()" aria-label="Fechar quiz">
              ✕ Fechar
            </button>
          </div>
        </div>
      }
    </div>
  `,
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  quiz = input.required<Quiz>();
  closed = output<void>();

  currentIndex = signal(0);
  isFinished = signal(false);

  questionStates = signal<QuestionState[]>([]);

  score = computed(() =>
    this.questionStates().filter(q => q.state === 'correct').length
  );

  scorePercent = computed(() =>
    Math.round((this.score() / this.quiz().questions.length) * 100)
  );

  resultEmoji = computed(() => {
    const pct = this.scorePercent();
    if (pct === 100) return '🏆';
    if (pct >= 75) return '🎉';
    if (pct >= 50) return '👍';
    return '📚';
  });

  resultLabel = computed(() => {
    const pct = this.scorePercent();
    if (pct === 100) return 'Perfeito! Você dominou o conteúdo!';
    if (pct >= 75) return 'Ótimo! Continue assim!';
    if (pct >= 50) return 'Bom trabalho, mas há espaço para melhorar.';
    return 'Revise o conteúdo e tente novamente!';
  });

  constructor() {
    // Initialize lazily – quiz input is available in ngOnInit-equivalent via effect
    // but with signals we need to initialise after first render. We override in getter.
  }

  ngOnInit(): void {
    this.initStates();
  }

  private initStates(): void {
    this.questionStates.set(
      this.quiz().questions.map(q => ({
        question: q,
        selectedIndex: null,
        state: 'unanswered' as AnswerState,
      }))
    );
    this.currentIndex.set(0);
    this.isFinished.set(false);
  }

  altLabel(index: number): string {
    return String.fromCharCode(65 + index); // A, B, C, D
  }

  selectAnswer(altIndex: number): void {
    const states = this.questionStates();
    const current = states[this.currentIndex()];
    if (current.state !== 'unanswered') return;

    const isCorrect = altIndex === current.question.correctIndex;
    this.questionStates.update(qs =>
      qs.map((q, i) =>
        i === this.currentIndex()
          ? { ...q, selectedIndex: altIndex, state: isCorrect ? 'correct' : 'wrong' }
          : q
      )
    );
  }

  nextQuestion(): void {
    if (this.currentIndex() < this.quiz().questions.length - 1) {
      this.currentIndex.update(i => i + 1);
    }
  }

  finishQuiz(): void {
    this.isFinished.set(true);
  }

  retryQuiz(): void {
    this.initStates();
  }
}
