import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LogoComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fix: Replaced @HostListener with the host property for better practice.
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class HeaderComponent {
  isScrolled = signal(false);

  constructor() {
    this.onWindowScroll(); // Initial check
  }

  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 10);
  }
}
