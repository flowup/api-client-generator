import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { APIClient, APIClientModule, User } from '../api';
import { DUMMY_DOMAIN } from './tests-constants';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        APIClientModule.forRoot({
          domain: DUMMY_DOMAIN,
        })
      ],
    });
  });

  it('should be initialized', inject([APIClient], (apiClient: APIClient) => {
    expect(apiClient).toBeTruthy();
    expect(apiClient.domain).toBe(DUMMY_DOMAIN);
  }));

  it('should register user', inject(
    [APIClient, HttpTestingController],
    (api: APIClient, backend: HttpTestingController) => {
      const user: User = {
        email: 'user@email.com',
        firstName: 'Userface',
        id: 42,
        lastName: 'McUser',
        password: 'pass',
        phone: '123456789',
        username: 'user',
        userStatus: 1,
      };

      api.createUser({body: user}).subscribe(data => {
        console.info('data', data);
        expect(data).toBe('register was successful');
      });

      backend
        .expectOne({
          method: 'POST',
          url: '/user'
        })
        .flush('register was successful');
    }
  ));
});
