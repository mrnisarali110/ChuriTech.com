
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  imports: [AnimateOnScrollDirective],
  templateUrl: './why-choose-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyChooseUsComponent {
  features = signal<Feature[]>([
    {
      icon: 'rocket',
      title: 'Innovation Driven',
      description: 'We constantly explore new technologies to deliver future-proof solutions.'
    },
    {
      icon: 'zap',
      title: 'Performance Focused',
      description: 'Our solutions are optimized for speed, scalability, and seamless user experience.'
    },
    {
      icon: 'search',
      title: 'Data-Backed Strategy',
      description: 'Every decision is informed by data analysis to maximize your ROI.'
    },
    {
      icon: 'users',
      title: 'Long-Term Partnership',
      description: 'We are committed to your success, offering ongoing support and collaboration.'
    }
  ]);
}
