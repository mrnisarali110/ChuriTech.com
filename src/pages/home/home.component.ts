
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent } from '../../components/about/about.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    WhyChooseUsComponent,
    PortfolioComponent,
    CtaComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
