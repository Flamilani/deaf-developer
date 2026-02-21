import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="hero p-8 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg m-4 shadow-xl">
      <h1 class="text-5xl font-bold mb-4">Bem-vindo à Plataforma Deaf Developer</h1>
      <p class="text-xl mb-6">Educação tecnológica acessível em Língua de Sinais (Libras).</p>
      <div class="libras-welcome p-4 bg-white/20 rounded-full inline-block">
        <!-- Espaço reservado para vídeo em Libras -->
        <span class="text-lg">👋 Boas-vindas em Libras</span>
      </div>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <div class="card p-6 bg-slate-800 text-white rounded-lg shadow-md border-b-4 border-blue-500 hover:scale-105 transition-transform">
        <h2 class="text-2xl font-bold mb-2">Cursos Online</h2>
        <p class="mb-4">Aprenda as tecnologias mais atuais do mercado.</p>
        <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Explorar</button>
      </div>
      <div class="card p-6 bg-slate-800 text-white rounded-lg shadow-md border-b-4 border-purple-500 hover:scale-105 transition-transform">
        <h2 class="text-2xl font-bold mb-2">Conferências</h2>
        <p class="mb-4">Acompanhe palestras técnicas com especialistas.</p>
        <button class="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded">Ver Agenda</button>
      </div>
      <div class="card p-6 bg-slate-800 text-white rounded-lg shadow-md border-b-4 border-pink-500 hover:scale-105 transition-transform">
        <h2 class="text-2xl font-bold mb-2">Kids</h2>
        <p class="mb-4">Programação divertida para pequenos desenvolvedores.</p>
        <button class="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">Começar</button>
      </div>
    </div>
  `
})
export class HomeComponent {}
