
import { Component, signal, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  isLoading = signal(true);
  contentVisible = signal(false);
  isLoaderFadingOut = signal(false);

  private themeService = inject(ThemeService);

  ngOnInit() {
    // End the loading animation after 3.5 seconds
    setTimeout(() => {
      this.isLoaderFadingOut.set(true);
      // Remove loader from DOM after fade-out transition
      setTimeout(() => {
        this.isLoading.set(false);
        this.contentVisible.set(true);
      }, 500);
    }, 3500);
  }
}
