import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Conference {
  id: number;
  title: string;
  speaker: string;
  date: string;
  time: string;
  type: 'LIVE' | 'RECORDED';
  category: string;
}

@Component({
  selector: 'app-conferences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 max-w-7xl mx-auto">
      <header class="mb-12">
        <h1 class="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Conferências e Eventos
        </h1>
        <p class="text-slate-400 text-lg max-w-2xl">
          Conecte-se com especialistas e acompanhe as últimas tendências tecnológicas com tradução simultânea e coordenação especializada.
        </p>
      </header>

      <!-- Live Now Section -->
      @if (liveEvent(); as live) {
        <div class="relative mb-16 group">
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div class="w-full md:w-1/3 aspect-video bg-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <span class="text-5xl z-10">🔴</span>
               <div class="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-tighter">AO VIVO</div>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-purple-900/30 text-purple-400 text-[10px] font-bold px-2 py-1 rounded truncate uppercase tracking-widest">
                  Masterclass Especial
                </span>
                <span class="text-slate-500 text-sm">•</span>
                <span class="text-slate-400 text-sm">Coordenação: Prof. Ricardo Santos</span>
              </div>
              <h2 class="text-3xl font-bold text-white mb-4 leading-tight">{{ live.title }}</h2>
              <div class="flex flex-wrap gap-4 text-slate-400 text-sm mb-6">
                 <div class="flex items-center gap-2">👤 <span>{{ live.speaker }}</span></div>
                 <div class="flex items-center gap-2">📅 <span>Hoje</span></div>
                 <div class="flex items-center gap-2">🕒 <span>Inicia em 15 min</span></div>
              </div>
              <button class="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-600/20">
                Entrar na Sala Virtual
              </button>
            </div>
          </div>
        </div>
      }

      <!-- Tabs or Lists -->
      <div class="space-y-8">
        <h3 class="text-2xl font-bold text-slate-100 flex items-center gap-3">
           <span class="text-purple-500">📁</span> Arquivo de Palestras
        </h3>
        
        <div class="grid grid-cols-1 gap-4">
          @for (conf of conferences(); track conf.id) {
            <div class="group flex flex-col sm:flex-row items-center gap-6 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 transition-all cursor-pointer">
              <div class="w-full sm:w-24 h-24 bg-slate-800 rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                🎥
              </div>
              <div class="flex-1 text-center sm:text-left">
                <div class="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">{{ conf.category }}</div>
                <h4 class="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{{ conf.title }}</h4>
                <p class="text-slate-400 text-sm mt-1">Palestrante: {{ conf.speaker }}</p>
              </div>
              <div class="text-slate-500 text-right hidden lg:block">
                <div class="text-sm font-medium">{{ conf.date }}</div>
                <div class="text-xs">{{ conf.time }} de vídeo</div>
              </div>
              <button class="bg-slate-800 group-hover:bg-purple-600 text-slate-300 group-hover:text-white px-6 py-2 rounded-lg text-sm font-bold transition-all">
                Assistir
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class ConferencesComponent {
  liveEvent = signal({
    title: 'Acessibilidade em UI/UX para Desenvolvedores Surdos',
    speaker: 'Ana Paula Silva',
    coord: 'Ricardo Santos'
  });

  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'O Papel da Inteligência Artificial no Ensino de Libras',
      speaker: 'Carlos Alberto',
      date: '10 Fev 2026',
      time: '45 min',
      type: 'RECORDED',
      category: 'Tecnologia'
    },
    {
      id: 2,
      title: 'Desafios do Mercado de Trabalho em TI para Surdos',
      speaker: 'Fernanda Lima',
      date: '05 Fev 2026',
      time: '1h 20min',
      type: 'RECORDED',
      category: 'Carreira'
    },
    {
      id: 3,
      title: 'Clean Code: Escrevendo Código Elegante e Visual',
      speaker: 'Marcos Vinícius',
      date: '28 Jan 2026',
      time: '55 min',
      type: 'RECORDED',
      category: 'Desenvolvimento'
    }
  ]);
}
