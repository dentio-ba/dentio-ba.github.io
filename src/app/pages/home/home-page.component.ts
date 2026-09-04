import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { StatsComponent } from '../../components/stats/stats.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, StatsComponent],
  template: `
    <app-hero />
    <app-features />
    <app-stats />
  `,
})
export class HomePageComponent {}
