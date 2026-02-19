
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Project {
  imageUrl: string;
  category: string;
  title: string;
}

@Component({
  selector: 'app-portfolio-page',
  imports: [AnimateOnScrollDirective],
  templateUrl: './portfolio-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPageComponent {
  projects = signal<Project[]>([
    { imageUrl: 'https://picsum.photos/seed/project1/800/600', category: 'Web Development', title: 'Fintech Platform' },
    { imageUrl: 'https://picsum.photos/seed/project2/800/600', category: 'Mobile App', title: 'Health & Wellness App' },
    { imageUrl: 'https://picsum.photos/seed/project3/800/600', category: 'Branding', title: 'E-commerce Brand Identity' },
    { imageUrl: 'https://picsum.photos/seed/project4/800/600', category: 'Web App', title: 'SaaS Dashboard' },
    { imageUrl: 'https://picsum.photos/seed/project5/800/600', category: 'SEO & Marketing', title: 'Startup Growth Campaign' },
    { imageUrl: 'https://picsum.photos/seed/project6/800/600', category: 'Web Development', title: 'Real Estate Portal' },
    { imageUrl: 'https://picsum.photos/seed/project7/800/600', category: 'Mobile App', title: 'Social Networking App' },
    { imageUrl: 'https://picsum.photos/seed/project8/800/600', category: 'Branding', title: 'Tech Conference Branding' },
  ]);
}
