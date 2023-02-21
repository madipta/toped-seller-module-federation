import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject, takeUntil } from 'rxjs';
import { DashboardService } from '@/ui/core/dashboard';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'app-info-bar',
  standalone: true,
  styleUrls: ['info-bar.component.scss'],
  template: `
    <nav>
      <ul class="left">
        <li class="mobile-app">
          <fa-icon icon="mobile-screen"></fa-icon>
          <a class="download-link">Download Tokopedia App</a>
        </li>
        <li class="theme-selector">
          <span class="title">Themes:</span>
          <fa-icon
            icon="moon"
            *ngIf="isDark"
            (click)="toggleTheme('light')"
          ></fa-icon>
          <fa-icon
            icon="sun"
            *ngIf="!isDark"
            (click)="toggleTheme('dark')"
          ></fa-icon>
        </li>
      </ul>
      <ul class="right">
        <li>
          <a class="text-link">Hak Kekayaan Intelektual</a>
        </li>
        <li>
          <a class="text-link">Mitra</a>
        </li>
        <li>
          <span class="title">Media Sosial</span>
          <a><fa-icon icon="tv"></fa-icon></a>
          <a><fa-icon icon="camera"></fa-icon></a>
          <a><fa-icon icon="user"></fa-icon></a>
        </li>
      </ul>
    </nav>
  `,
})
export class InfoBarComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  theme = 'light';
  isDark = false;

  constructor(
    private renderer: Renderer2,
    private dashboardService: DashboardService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.dashboardService.theme$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.changeTheme(res);
      });
  }

  changeTheme(theme: string) {
    const oldThemeClass = this.theme + '-theme';
    this.renderer.removeClass(document.body, oldThemeClass);
    this.theme = theme;
    const newThemeClass = theme + '-theme';
    this.isDark = this.theme === 'dark';
    this.renderer.addClass(document.body, newThemeClass);
  }

  toggleTheme(theme: string) {
    this.dashboardService.toggleTheme(theme);
  }
}
