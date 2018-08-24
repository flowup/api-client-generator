import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { User } from '../api-all-tags/models';
import { UserAPIClient, UserAPIClientModule, } from '../api-all-tags/services/user';
import { DUMMY_DOMAIN } from './tests-constants';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        UserAPIClientModule.forRoot({
          domain: DUMMY_DOMAIN,
        })
      ],
    });
  });

  it('should be initialized', inject([UserAPIClient], async (userApi: UserAPIClient) => {
    await expect(userApi).toBeTruthy();
    await expect(userApi.domain).toBe(DUMMY_DOMAIN);
  }));

  it('should register user', inject(
    [UserAPIClient, HttpTestingController],
    (userApi: UserAPIClient, backend: HttpTestingController) => {
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

      userApi.createUser({body: user}).subscribe(async data => {
        console.info('data', data);
        await expect(data).toBe('register was successful');
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
