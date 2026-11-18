import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { SeoService } from '../../services/seo.service';

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
export class HomePageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Dentio — Softver za stomatološke ordinacije | Desktop & Web',
      description: 'Dentio — kompletno softversko rješenje za stomatološke ordinacije u BiH. Desktop aplikacija i web platforma za upravljanje pacijentima, terminima i tretmanima.',
      keywords: 'dentio, stomatološki softver, dental software, softver za zubare, softver za stomatološke ordinacije BiH, dental practice management, zakazivanje termina online, evidencija pacijenata, stomatološki program, Sarajevo',
      url: 'https://www.dentio.ba/',
    });
  }
}
