import { Component } from '@angular/core';

@Component({
  selector: 'test-root',
  template: `<h1>Welcome to {{title}}!</h1>`,
})
export class AppComponent {
  title = 'test-angular-project';
}
