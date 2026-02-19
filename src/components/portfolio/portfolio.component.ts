
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { RouterLink } from '@angular/router';

interface Project {
  imageUrl: string;
  category: string;
  title: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [AnimateOnScrollDirective, RouterLink],
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  projects = signal<Project[]>([
    { imageUrl: 'https://picsum.photos/seed/project1/800/600', category: 'Web Development', title: 'Fintech Platform' },
    { imageUrl: 'https://picsum.photos/seed/project2/800/600', category: 'Mobile App', title: 'Health & Wellness App' },
    { imageUrl: 'https://picsum.photos/seed/project3/800/600', category: 'Branding', title: 'E-commerce Brand Identity' },
    { imageUrl: 'https://picsum.photos/seed/project4/800/600', category: 'Web App', title: 'SaaS Dashboard' },
  ]);
}
