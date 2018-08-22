import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { PetAPIClient, PetAPIClientModule } from '../api-all-tags/pet';
import { DUMMY_DOMAIN } from './tests-constants';

describe('PetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PetAPIClientModule.forRoot({
          domain: DUMMY_DOMAIN,
        })
      ],
    });
  });

  it('should be initialized', inject([PetAPIClient], async (api: PetAPIClient) => {
    await expect(api).toBeTruthy();
    await expect(api.domain).toBe(DUMMY_DOMAIN);
  }));

  it('should set id to path', inject(
    [PetAPIClient, HttpTestingController],
    async (api, backend) => {
      api.getPetById({petId: 42}).subscribe(async (data) => {
        await expect(data).toBeNull();
      });

      backend
        .expectOne({
          method: 'GET',
          url: '/pet/42'
        })
        .flush(null);
    }
  ));

  it('should set name and status to query', inject(
    [PetAPIClient, HttpTestingController],
    async (api, backend) => {
      api.updatePetWithQuery({
        petId: 42,
        name: 'wololo',
        status: 'OK'
      }).subscribe(() => {});

      const req = backend
        .expectOne(req => req.method === 'POST' && req.url === '/pet/42');

      await expect(req.request.params.getAll('name')).toEqual(['wololo']);
      await expect(req.request.params.getAll('status')).toEqual(['OK']);
    }
  ));

  it('should delete pet with ID and set api key header', inject(
    [PetAPIClient, HttpTestingController],
    async (api, backend) => {
      api.deletePet({
        apiKey: 'DUMMY_API_KEY',
        petId: 42,
      }).subscribe(() => {});

      const req = backend
        .expectOne({
          method: 'DELETE',
          url: '/pet/42',
        });

      await expect(req.request.headers.get('api_key')).toEqual('DUMMY_API_KEY')
    }
  ));
});
