import { Component } from '@angular/core';
import { PetAPIClient } from '../api-all-tags/services/pet';
import { UserAPIClient } from '../api-all-tags/services/user';

@Component({
  selector: 'test-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <h2>Services domains:</h2>
    <span *ngFor="let domain of domains">{{ domain }}</span>
  `,
})
export class AppComponent {
  title = 'test-angular-project';
  domains = [this.pet.domain, this.user.domain];

  constructor(
    private readonly pet: PetAPIClient,
    private readonly user: UserAPIClient,
  ) {}
}
