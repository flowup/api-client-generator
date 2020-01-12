import { HttpParams } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { APIClient, APIClientModule } from '../api-no-tags';

describe('APIClientModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        APIClientModule.forRoot({
          httpOptions: {
            headers: {
              testHeader: '42',
            },
          },
        }),
      ],
    });
  });

  it('should provide APIClient', inject(
    [APIClient],
    async (apiClient: APIClient) => {
      await expect(apiClient).toBeTruthy();
    },
  ));

  it('should have domain set to current hostname and port', inject(
    [APIClient],
    (apiClient: APIClient) => {
      expect(apiClient.domain).toBe(
        `//${window.location.hostname}${
          window.location.port ? ':' + window.location.port : ''
        }`,
      );
    },
  ));

  it('should have header set', inject([APIClient], (apiClient: APIClient) => {
    expect(apiClient.options.headers.getAll('testHeader')).toEqual(['42']);
  }));

  it('should not have params set', inject(
    [APIClient],
    async (apiClient: APIClient) => {
      // if params are not set they equal to new empty http params
      await expect(apiClient.options.params).toEqual(new HttpParams());
    },
  ));
});
