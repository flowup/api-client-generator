import { HttpHeaders, HttpRequest } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { Pet } from '../api-all-tags/models';
import { PetAPIClient, PetAPIClientModule } from '../api-all-tags/services/pet';
import { DUMMY_DOMAIN } from './tests-constants';

describe('PetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PetAPIClientModule.forRoot({
          domain: DUMMY_DOMAIN,
        }),
      ],
    });
  });

  it('should be initialized', inject(
    [PetAPIClient],
    async (api: PetAPIClient) => {
      await expect(api).toBeTruthy();
      await expect(api.domain).toBe(DUMMY_DOMAIN);
    },
  ));

  it('should set id to path', inject(
    [PetAPIClient, HttpTestingController],
    async (api: PetAPIClient, backend: HttpTestingController) => {
      api.getPetById({ petId: 42 }).subscribe(async data => {
        await expect(data).toBeNull();
      });

      backend
        .expectOne({
          method: 'GET',
          url: '/pet/42',
        })
        .flush(null);
    },
  ));

  it('should set Pet name and status with query', inject(
    [PetAPIClient, HttpTestingController],
    async (api: PetAPIClient, backend: HttpTestingController) => {
      api
        .updatePetWithQuery({
          petId: 42,
          name: 'wololo',
          status: 'pending',
        })
        .subscribe(() => {});

      const { params } = backend.expectOne(
        ({ method, url }) => method === 'PATCH' && url.startsWith('/pet/42'),
      ).request;

      await expect(params.getAll('name')).toEqual(['wololo']);
      await expect(params.getAll('status')).toEqual(['pending']);
    },
  ));

  it('should add new pet', inject(
    [PetAPIClient, HttpTestingController],
    async (api: PetAPIClient, backend: HttpTestingController) => {
      const newPet: Pet = {
        id: 1337,
        name: 'Very interesting pet',
        photoUrls: ['random.url'],
        status: 'available',
        category: { id: 42, name: 'interesting animals' },
      };

      api
        .addPet(
          {
            body: newPet,
          },
          { headers: new HttpHeaders({ auth: 'custom auth header' }) },
        )
        .subscribe(() => {});

      const { headers, body } = backend.expectOne({
        method: 'POST',
        url: '/pet',
      }).request;

      await expect(body).toEqual(JSON.stringify(newPet));
      await expect(headers.get('auth')).toEqual('custom auth header');
    },
  ));

  it('should update pet with form data', inject(
    [PetAPIClient, HttpTestingController],
    async (api: PetAPIClient, backend: HttpTestingController) => {
      api
        .updatePetWithForm(
          {
            petId: 1,
            status: 'sold',
            name: 'some name',
          },
          { headers: new HttpHeaders({ auth: 'custom auth header' }) },
        )
        .subscribe(() => {});

      const {
        headers,
        params,
        body,
      }: HttpRequest<FormData> = backend.expectOne({
        method: 'POST',
        url: '/pet/1',
      }).request;

      await expect(headers.get('auth')).toEqual('custom auth header');

      await expect(params.getAll('name')).toBeFalsy();
      await expect(body?.getAll('status')).toEqual(['sold']);
      await expect(body?.get('name')).toEqual('some name');
    },
  ));

  it('should delete pet with ID and set api key header', inject(
    [PetAPIClient, HttpTestingController],
    async (api: PetAPIClient, backend: HttpTestingController) => {
      api
        .deletePet({
          apiKey: 'DUMMY_API_KEY',
          petId: 42,
        })
        .subscribe(() => {});

      const req = backend.expectOne({
        method: 'DELETE',
        url: '/pet/42',
      });

      await expect(req.request.headers.get('api_key')).toEqual('DUMMY_API_KEY');
    },
  ));
});
