import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
}

interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
  isOpen: boolean;
}

@Component({
  selector: 'app-panel-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-course.pages.html',
  styleUrl: './panel-course.pages.css',
})
export class PanelCoursePages {
  courseTitle = signal('Lógica de Programação com Libras');
  
  modules = signal<Module[]>([
    {
      id: 1,
      title: 'Módulo 1: Introdução',
      isOpen: true,
      lessons: [
        { id: 1, title: 'O que é Lógica?', duration: '05:20', completed: true },
        { id: 2, title: 'Ambiente de Desenvolvimento', duration: '10:15', completed: false },
      ]
    },
    {
      id: 2,
      title: 'Módulo 2: Variáveis e Dados',
      isOpen: false,
      lessons: [
        { id: 3, title: 'Entendendo Variáveis', duration: '08:45', completed: false },
        { id: 4, title: 'Tipos de Dados Visuais', duration: '12:30', completed: false },
      ]
    }
  ]);

  selectedLesson = signal<Lesson>(this.modules()[0].lessons[0]);

  selectLesson(lesson: Lesson) {
    this.selectedLesson.set(lesson);
  }

  toggleModule(module: Module) {
    module.isOpen = !module.isOpen;
  }
}
