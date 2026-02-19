
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="flex items-center gap-2 cursor-pointer" title="ChuriTech Home">
      <svg class="h-8 w-auto" viewBox="0 0 48 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 38C32.2843 38 39 31.2843 39 23C39 14.7157 32.2843 8 24 8C15.7157 8 9 14.7157 9 23C9 31.2843 15.7157 38 24 38Z" class="stroke-[var(--color-primary-400)]" stroke-width="3"/>
        <path d="M24 16C23.0996 16.0003 22.2177 16.3263 21.5173 16.9161C20.8169 17.5059 20.3444 18.3184 20.19 19.2" class="stroke-[var(--color-accent-400)]" stroke-width="3" stroke-linecap="round"/>
        <path d="M19 49C19 47.1333 19.6667 46 21.5 45.4V45.4C22.5 45.0667 23.1667 44 24 44C24.8333 44 25.5 45.0667 26.5 45.4V45.4C28.3333 46 29 47.1333 29 49V50H19V49Z" class="stroke-[var(--color-primary-400)]" stroke-width="3"/>
      </svg>
      <span class="text-2xl font-bold text-white text-glow-primary">ChuriTech</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
