
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [AnimateOnScrollDirective],
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services = signal<Service[]>([
    { icon: 'code', title: 'Web Development', description: 'Crafting high-performance websites with cutting-edge technology.' },
    { icon: 'mobile', title: 'Mobile App Development', description: 'Building intuitive and engaging mobile applications for iOS & Android.' },
    { icon: 'share', title: 'Social Media Marketing', description: 'Amplifying your brand voice across digital social platforms.' },
    { icon: 'chart', title: 'SEO Optimization', description: 'Driving organic traffic and improving your search engine ranking.' },
    { icon: 'lightbulb', title: 'Branding & Strategy', description: 'Creating powerful brand identities that resonate with your audience.' },
    { icon: 'cog', title: 'Automation Solutions', description: 'Streamlining your business processes with custom automations.' },
  ]);
}
