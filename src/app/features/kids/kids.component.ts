import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-kids',
  standalone: true,
  template: `
    <div class="min-h-screen bg-[#A8E6CF] p-4 md:p-8">
      <div class="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border-[12px] border-white">
        
        <!-- Kids Header -->
        <header class="bg-[#FF8B94] p-12 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div class="grid grid-cols-6 gap-4 rotate-12 scale-150">
               @for (i of [1,2,3,4,5,6,7,8,9,10,11,12]; track i) {
                 <span class="text-4xl">🚀</span> <span class="text-4xl">⭐</span>
               }
             </div>
          </div>
          <h1 class="text-6xl md:text-8xl font-black text-white drop-shadow-[0_5px_0_rgba(0,0,0,0.1)] mb-4">
            DEAF KIDS!
          </h1>
          <p class="text-2xl font-bold text-white/90">Sua jornada épica na programação começa aqui! 🌟</p>
        </header>

        <div class="p-8 md:p-16">
          <!-- Character Intro -->
          <div class="flex flex-col md:flex-row items-center gap-8 mb-16 bg-[#FFD3B6]/30 p-8 rounded-3xl border-4 border-dashed border-[#FFD3B6]">
            <div class="text-8xl animate-bounce">🤖</div>
            <div class="text-center md:text-left">
              <h2 class="text-3xl font-black text-[#FF8B94] mb-2 uppercase">Olá, Pequeno Dev!</h2>
              <p class="text-xl text-slate-600 font-medium">Eu sou o Bit! Vamos aprender a falar com os computadores usando Libras e muita diversão?</p>
            </div>
          </div>

          <!-- Game Selection -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            @for (action of [
              { title: 'Aprender', icon: '📖', color: 'bg-[#FFD3B6]', hover: 'hover:bg-[#ffc299]' },
              { title: 'Jogar', icon: '🎮', color: 'bg-[#FFAAA5]', hover: 'hover:bg-[#ff948d]' },
              { title: 'Criar', icon: '🎨', color: 'bg-[#D4A5A5]', hover: 'hover:bg-[#c98e8e]' },
              { title: 'Missões', icon: '🏆', color: 'bg-[#99B898]', hover: 'hover:bg-[#88a887]' }
            ]; track action.title) {
              <div [class]="action.color + ' ' + action.hover + ' group relative p-10 rounded-[2.5rem] flex flex-col items-center justify-center transition-all cursor-pointer shadow-[0_10px_0_rgba(0,0,0,0.1)] active:translate-y-2 active:shadow-none hover:-translate-y-2'">
                <div class="text-7xl mb-6 group-hover:rotate-12 transition-transform">
                  {{ action.icon }}
                </div>
                <h3 class="text-3xl font-black text-white drop-shadow-md tracking-tighter">{{ action.title }}</h3>
              </div>
            }
          </div>

          <!-- Video Lesson Placeholder -->
          <div class="mt-20">
            <h2 class="text-4xl font-black text-slate-800 mb-8 text-center">Vídeo do Dia em Libras 🤙</h2>
            <div class="relative max-w-4xl mx-auto aspect-video bg-slate-900 rounded-[3rem] border-[15px] border-slate-100 shadow-2xl overflow-hidden group cursor-pointer" (click)="togglePlay(videoPlayer)">
              <video 
                #videoPlayer
                src="assets/videos/video.mp4" 
                autoplay 
                muted 
                loop 
                playsinline
                class="w-full h-full object-cover"
              ></video>
              
              <!-- Custom Controls Overlay -->
              <div class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                  @if (!isPlaying()) {
                    <div class="w-0 h-0 border-t-[20px] border-t-transparent border-l-[30px] border-l-[#FF8B94] border-b-[20px] border-b-transparent ml-2"></div>
                  } @else {
                    <div class="flex gap-2">
                      <div class="w-4 h-10 bg-[#FF8B94] rounded-full"></div>
                      <div class="w-4 h-10 bg-[#FF8B94] rounded-full"></div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="bg-slate-50 p-12 text-center">
          <button class="bg-[#FF8B94] hover:bg-[#ff7a85] text-white text-2xl font-black px-12 py-6 rounded-full shadow-[0_10px_0_#ff6675] transition-all hover:-translate-y-1 active:translate-y-1 active:shadow-none">
            ÁREA DOS PAIS 👨‍👩‍👧‍👦
          </button>
        </footer>
      </div>
    </div>
  `
})
export class KidsComponent {
  isPlaying = signal(true);

  togglePlay(video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
      this.isPlaying.set(true);
    } else {
      video.pause();
      this.isPlaying.set(false);
    }
  }
}
