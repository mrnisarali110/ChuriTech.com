
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [AnimateOnScrollDirective, RouterLink],
  templateUrl: './cta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent {}
