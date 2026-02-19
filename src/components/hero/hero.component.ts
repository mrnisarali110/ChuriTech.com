
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  themeService = inject(ThemeService);
}
