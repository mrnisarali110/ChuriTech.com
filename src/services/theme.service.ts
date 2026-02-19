
import { Injectable, signal, effect, inject, RendererFactory2, Renderer2 } from '@angular/core';

export interface Theme {
  name: string;
  properties: { [key: string]: string };
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private rendererFactory = inject(RendererFactory2);
  
  themes: Theme[] = [
    {
      name: 'purple',
      properties: {
        '--color-primary-600': '#9333ea', '--color-primary-500': '#a855f7', '--color-primary-400': '#c084fc',
        '--color-primary-glow': 'rgba(168, 85, 247, 0.5)', '--color-primary-glow-faded': 'rgba(168, 85, 247, 0.3)',
        '--color-primary-border-faded': 'rgba(168, 85, 247, 0.2)', '--color-primary-bg-faded': 'rgba(168, 85, 247, 0.2)',
        '--color-accent-500': '#0891b2', '--color-accent-400': '#22d3ee', '--color-accent-glow': 'rgba(34, 211, 238, 0.7)',
        '--color-accent-border-faded': 'rgba(34, 211, 238, 0.3)', '--color-accent-bg-faded': 'rgba(34, 211, 238, 0.1)',
      },
    },
    {
      name: 'emerald',
      properties: {
        '--color-primary-600': '#059669', '--color-primary-500': '#10b981', '--color-primary-400': '#34d399',
        '--color-primary-glow': 'rgba(16, 185, 129, 0.5)', '--color-primary-glow-faded': 'rgba(16, 185, 129, 0.3)',
        '--color-primary-border-faded': 'rgba(16, 185, 129, 0.2)', '--color-primary-bg-faded': 'rgba(16, 185, 129, 0.2)',
        '--color-accent-500': '#d97706', '--color-accent-400': '#f59e0b', '--color-accent-glow': 'rgba(245, 158, 11, 0.7)',
        '--color-accent-border-faded': 'rgba(245, 158, 11, 0.3)', '--color-accent-bg-faded': 'rgba(245, 158, 11, 0.1)',
      },
    },
    {
      name: 'rose',
      properties: {
        '--color-primary-600': '#e11d48', '--color-primary-500': '#f43f5e', '--color-primary-400': '#fb7185',
        '--color-primary-glow': 'rgba(244, 63, 94, 0.5)', '--color-primary-glow-faded': 'rgba(244, 63, 94, 0.3)',
        '--color-primary-border-faded': 'rgba(244, 63, 94, 0.2)', '--color-primary-bg-faded': 'rgba(244, 63, 94, 0.2)',
        '--color-accent-500': '#0284c7', '--color-accent-400': '#38bdf8', '--color-accent-glow': 'rgba(56, 189, 248, 0.7)',
        '--color-accent-border-faded': 'rgba(56, 189, 248, 0.3)', '--color-accent-bg-faded': 'rgba(56, 189, 248, 0.1)',
      },
    },
    {
      name: 'cyberpunk',
      properties: {
        '--color-primary-600': '#facc15', '--color-primary-500': '#fde047', '--color-primary-400': '#fef08a',
        '--color-primary-glow': 'rgba(250, 204, 21, 0.6)', '--color-primary-glow-faded': 'rgba(250, 204, 21, 0.3)',
        '--color-primary-border-faded': 'rgba(250, 204, 21, 0.2)', '--color-primary-bg-faded': 'rgba(250, 204, 21, 0.15)',
        '--color-accent-500': '#c026d3', '--color-accent-400': '#d946ef', '--color-accent-glow': 'rgba(217, 70, 239, 0.7)',
        '--color-accent-border-faded': 'rgba(217, 70, 239, 0.3)', '--color-accent-bg-faded': 'rgba(217, 70, 239, 0.1)',
      },
    },
  ];

  private themeIndex = signal(0);
  public currentTheme = signal<Theme>(this.themes[0]);

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    effect(() => {
      const theme = this.currentTheme();
      for (const [key, value] of Object.entries(theme.properties)) {
        this.renderer.setStyle(document.documentElement, key, value);
      }
    });
  }

  cycleTheme() {
    const nextIndex = (this.themeIndex() + 1) % this.themes.length;
    this.themeIndex.set(nextIndex);
    this.currentTheme.set(this.themes[nextIndex]);
  }
}
