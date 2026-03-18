import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
  price: string;
  level: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="p-8 max-w-7xl mx-auto">
      <header class="mb-12">
        <h1 class="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Cursos de Tecnologia
        </h1>
        <p class="text-slate-400 text-lg max-w-2xl">
          Especialize-se com trilhas de aprendizado pensadas do zero para a experiência visual e em Língua de Sinais.
        </p>
      </header>

      <!-- Category Filter -->
      <div class="flex flex-wrap gap-3 mb-12">
        @for (cat of categories(); track cat) {
          <button 
            (click)="selectedCategory.set(cat)"
            [class]="selectedCategory() === cat ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'"
            class="px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg"
          >
            {{ cat }}
          </button>
        }
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (course of filteredCourses(); track course.id) {
          <div class="course-card group bg-slate-900/50 rounded-2xl overflow-hidden shadow-xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
            <div class="h-48 bg-slate-800 flex items-center justify-center text-slate-500 relative group-hover:bg-slate-800/80 transition-colors">
              <span class="text-6xl group-hover:scale-110 transition-transform duration-500">{{ course.icon }}</span>
              <div class="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-400 border border-blue-500/30">
                {{ course.level }}
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-indigo-400 text-xs font-bold uppercase tracking-widest text-blue-400">{{ course.category }}</span>
                <span class="text-green-400 font-mono font-bold">{{ course.price }}</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                {{ course.title }}
              </h3>
              <p class="text-slate-400 text-sm line-clamp-2 mb-6">
                {{ course.description }}
              </p>
              
              <div class="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div class="flex -space-x-2">
                   <div class="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px]">🤘</div>
                   <div class="w-8 h-8 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px]">AD</div>
                </div>
                <a 
                  [routerLink]="['/painel-curso', course.id]"
                  class="bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-all no-underline inline-block"
                >
                  Iniciar Aula
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class CoursesComponent {
  categories = signal(['Todos', 'Desenvolvimento', 'Banco de Dados', 'Sistemas', 'Design']);
  selectedCategory = signal('Todos');

  courses = signal<Course[]>([
    {
      id: 1,
      title: 'Lógica de Programação com Libras',
      category: 'Desenvolvimento',
      description: 'Aprenda os conceitos básicos de algoritmos, variáveis e estruturas de repetição de forma totalmente visual.',
      icon: '🧠',
      price: 'Grátis',
      level: 'Iniciante'
    },
    {
      id: 2,
      title: 'Dominando JavaScript Moderno',
      category: 'Desenvolvimento',
      description: 'Do ES6 ao Async/Await. Entenda como funciona a linguagem mais popular da web.',
      icon: '🟨',
      price: 'Premium',
      level: 'Intermediário'
    },
    {
      id: 3,
      title: 'SQL e Modelagem de Dados',
      category: 'Banco de Dados',
      description: 'Aprenda a estruturar informações e realizar consultas complexas de maneira eficiente.',
      icon: '📊',
      price: 'Grátis',
      level: 'Iniciante'
    },
    {
      id: 4,
      title: 'Desenvolvimento Mobile com Flutter',
      category: 'Sistemas',
      description: 'Crie aplicativos nativos para iOS e Android com um único código fonte.',
      icon: '📱',
      price: 'Premium',
      level: 'Avançado'
    },
    {
      id: 5,
      title: 'UX/UI Design Acessível',
      category: 'Design',
      description: 'Como projetar interfaces que consideram a surdez e outras necessidades específicas.',
      icon: '🎨',
      price: 'Grátis',
      level: 'Intermediário'
    },
    {
      id: 6,
      title: 'Segurança da Informação',
      category: 'Sistemas',
      description: 'Proteja seus dados e entenda as principais ameaças no mundo digital atual.',
      icon: '🛡️',
      price: 'Premium',
      level: 'Iniciante'
    }
  ]);

  filteredCourses() {
    const selected = this.selectedCategory();
    if (selected === 'Todos') return this.courses();
    return this.courses().filter(c => c.category === selected);
  }
}
