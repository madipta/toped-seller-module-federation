import { Component } from '@angular/core';
import { ChatComponent } from '@/ui/features/chat';

@Component({
  imports: [ChatComponent],
  selector: 'chat-entry',
  standalone: true,
  template: `<ui-chat></ui-chat>`,
})
export class RemoteEntryComponent {}
