import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StickyBarDirective } from '@/ui/core/base-ui';
import { ActivitiesComponent } from './activities/activities.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PerformancesComponent } from './performances/performances.component';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { UpdatesComponent } from './updates/updates.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ChatToolbarComponent } from './chat-toolbar/chat-toolbar.component';

@Component({
  imports: [
    ActivitiesComponent,
    AnalyticsComponent,
    PerformancesComponent,
    StickyBarDirective,
    StockInfoComponent,
    UpdatesComponent,
    UtilitiesComponent,
    ChatToolbarComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-home',
  standalone: true,
  template: `
    <div class="home-outer">
      <section class="main">
        <ui-activities></ui-activities>
        <ui-updates></ui-updates>
        <ui-analytics></ui-analytics>
        <ui-performances></ui-performances>
        <ui-stock-info></ui-stock-info>
      </section>
      <ui-utilities></ui-utilities>
    </div>
    <div uiStickyBar="bottom">
      <ui-chat-toolbar></ui-chat-toolbar>
    </div>
  `,
})
export class HomeComponent {}
