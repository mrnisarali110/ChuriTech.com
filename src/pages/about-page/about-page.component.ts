
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

@Component({
  selector: 'app-about-page',
  imports: [AnimateOnScrollDirective],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  team = signal<TeamMember[]>([
    { name: 'Alex Johnson', role: 'Founder & CEO', imageUrl: 'https://picsum.photos/seed/person1/400/400' },
    { name: 'Maria Garcia', role: 'Lead Developer', imageUrl: 'https://picsum.photos/seed/person2/400/400' },
    { name: 'Sam Chen', role: 'UX/UI Director', imageUrl: 'https://picsum.photos/seed/person3/400/400' },
    { name: 'Emily White', role: 'Project Manager', imageUrl: 'https://picsum.photos/seed/person4/400/400' },
  ]);
}
