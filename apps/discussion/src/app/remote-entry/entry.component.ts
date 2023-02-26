import { Component } from '@angular/core';
import { DiscussionComponent } from '@/ui/features/discussion';

@Component({
  imports: [DiscussionComponent],
  selector: 'discussion-entry',
  standalone: true,
  template: `<ui-discussion></ui-discussion>`,
})
export class RemoteEntryComponent {}
