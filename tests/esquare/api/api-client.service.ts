/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, APIClientInterface } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('APIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('APIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class APIClient implements APIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `https://virtserver.swaggerhub.com/Esquare/EsquareAPI/1.0.0`;

  constructor(private readonly http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {

    if (domain != null) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  auth(
    args: {
      body: models.AuthForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/auth`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<Object>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  authRef(
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/auth/refresh`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<Object>('POST', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  passwordRestoreRequest(
    args: {
      body: models.RestoreForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/restore`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<Object>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  passwordRestoreEmailRequest(
    args: {
      body: models.RestoreRequestForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/restore/request`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<Object>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  passwordRestoreCheckRestoreGuid(
    args: {
      restoreGuid: string,  // RestoreGuid for check
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/restore/checkGuid`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    const formData = new FormData();
    formData.append('restoreGuid', args.restoreGuid);

    return this.sendRequest<Object>('POST', path, options, formData);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getAclList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.AclItem[]> {
    const path = `/acl`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.AclItem[]>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getStructureEntitiesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure[]> {
    const path = `/structure`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Structure[]>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  addStructureEntity(
    args: {
      body: models.StructureAddParameters,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure> {
    const path = `/structure`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Structure>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  updateStructureEntity(
    args: {
      structureId: number,  // structure id to update
      body: models.StructureForm,  // Structure entity object that needs to be updated
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure> {
    const path = `/structure/${args.structureId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Structure>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteStructureEntity(
    args: {
      structureId: number,  // structure id to delete
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/structure/${args.structureId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy4z8d)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getReportsList(
    args: {
      status?: models.Status,  // (optional) - 1 Pending - 2 InProgress - 3 Complete 
      pageSize: number,
      page: number,  // page number
      orderBy: 'id' | 'title' | 'subtitle' | 'criticality' | 'status' | 'issues' | 'deadline',  // id | title | subtitle | criticality | status | issues | deadline
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/report`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('status' in args) {
      options.params = options.params.set('status', String(args.status));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('orderBy' in args) {
      options.params = options.params.set('orderBy', String(args.orderBy));
    }
    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    return this.sendRequest<Object>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hywkd5)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getReportDetails(
    args: {
      id: number,  // report id to get
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ReportItem[]> {
    const path = `/report/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.ReportItem[]>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/i3z8zb)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getReportPreview(
    args: {
      templateId: number,  // [See #/definitions/ReportTemplate](#/Data_Import/getReportDetails) 
      pageSize: number,
      page: number,  // page number
      orderBy?: number,  // (optional) column id
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/report/preview/${args.templateId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('orderBy' in args) {
      options.params = options.params.set('orderBy', String(args.orderBy));
    }
    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    return this.sendRequest<Object>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/i3ym4j)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getImportHistory(
    args: {
      templateId: number,  // [See #/definitions/ReportTemplate](#/Data_Import/getReportDetails) 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ImportHistoryItem[]> {
    const path = `/report/history/${args.templateId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.ImportHistoryItem[]>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy521p)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  uploadFile(
    args: {
      templateId: number,  // [See #/definitions/ReportTemplate](#/Data_Import/getReportDetails) 
      file: File,  // file to upload
    },
    requestHttpOptions?: HttpOptions
  ): Observable<number> {
    const path = `/report/wizard/uploadfile/${args.templateId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    const formData = new FormData();
    formData.append('file', args.file);

    return this.sendRequest<number>('POST', path, options, formData);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy52hi)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  listTemplateColumns(
    args: {
      templateId: number,  // [See #/definitions/ReportTemplate](#/Data_Import/getReportDetails) 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Column[]> {
    const path = `/report/wizard/${args.templateId}/templateColumns`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Column[]>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy52zr)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  listReportColumns(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Column[]> {
    const path = `/report/wizard/${args.id}/reportColumns`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Column[]>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy53jt)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  saveColumnsMapping(
    args: {
      id: number,  // Id of current import
      body: any,  // Column mappint for current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Table> {
    const path = `/report/wizard/${args.id}/mapping`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Table>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy5fct)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getValidationTable(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ValidatedTable> {
    const path = `/report/wizard/${args.id}/validationTable`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.ValidatedTable>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy55ga)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  downloadImportedFile(
    args: {
      id: number,  // Id of current import
      all?: boolean,  // (optional) Indicator of downloading data(all or errors only)
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    const path = `/report/wizard/${args.id}/downloadImported`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
      responseType: 'blob',
    };

    if ('all' in args) {
      options.params = options.params.set('all', String(args.all));
    }
    return this.sendRequest<File>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy57nj)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  importConfirmation(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ImportResponse> {
    const path = `/report/wizard/${args.id}/import`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.ImportResponse>('POST', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy5a54)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  downloadImportOriginalFile(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    const path = `/report/wizard/${args.id}/downloadOriginal`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
      responseType: 'blob',
    };

    return this.sendRequest<File>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy5ae7)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  downloadImportSkippedFile(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    const path = `/report/wizard/${args.id}/downloadSkipped`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
      responseType: 'blob',
    };

    return this.sendRequest<File>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy5aqq)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  cancelImport(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/report/wizard/${args.id}/cancelImport`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('POST', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy5bi6)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  overrideImport(
    args: {
      id: number,  // Id of current import
      description: string,  // description of override request
      file: File,  // file to upload
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/report/wizard/${args.id}/override`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    const formData = new FormData();
    formData.append('description', args.description);
    formData.append('file', args.file);

    return this.sendRequest<void>('POST', path, options, formData);
  }

  /**
   * [Screenshot from design](http://prntscr.com/i4052r)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  geImportStats(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TotalImportStats> {
    const path = `/report/ministry/statistic`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('period' in args) {
      options.params = options.params.set('period', String(args.period));
    }
    return this.sendRequest<models.TotalImportStats>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/i40s18)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getIssuesList(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
      status?: models.IssueStatus,  // (optional) - 1 Pending - 2 Resolved 
      pageSize: number,
      page: number,  // page number
      orderBy: 'name' | 'school' | 'dueDate' | 'alert',  // name | school | dueDate | alert
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/report/ministry/issues`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('period' in args) {
      options.params = options.params.set('period', String(args.period));
    }
    if ('status' in args) {
      options.params = options.params.set('status', String(args.status));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('orderBy' in args) {
      options.params = options.params.set('orderBy', String(args.orderBy));
    }
    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    return this.sendRequest<Object>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/i4byyx)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getStatusesList(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
      status?: models.ImportStatus,  // (optional) - 1 Live - 2 PastDeadline 
      pageSize: number,
      page: number,  // page number
      orderBy: 'name' | 'issues' | 'dueDate' | 'progress',  // name | issues | dueDate | progress
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/report/ministry/statuses`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('period' in args) {
      options.params = options.params.set('period', String(args.period));
    }
    if ('status' in args) {
      options.params = options.params.set('status', String(args.status));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('orderBy' in args) {
      options.params = options.params.set('orderBy', String(args.orderBy));
    }
    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    return this.sendRequest<Object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsersList(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
      status?: models.ImportStatus,  // (optional) - 1 Live - 2 PastDeadline 
      pageSize: number,
      page: number,  // page number
      orderBy: 'name' | 'issues' | 'dueDate' | 'progress',  // name | issues | dueDate | progress
      order?: models.Order,  // (optional) - asc - desc 
      assignedToRole?: number,  // (optional) role id | [Screenshot from design](http://prntscr.com/ib9yal)
      unassignedFromRole?: number,  // (optional) role id | [Screenshot from design](http://prntscr.com/ib9z16)
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/users`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('period' in args) {
      options.params = options.params.set('period', String(args.period));
    }
    if ('status' in args) {
      options.params = options.params.set('status', String(args.status));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('orderBy' in args) {
      options.params = options.params.set('orderBy', String(args.orderBy));
    }
    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    if ('assignedToRole' in args) {
      options.params = options.params.set('assignedToRole', String(args.assignedToRole));
    }
    if ('unassignedFromRole' in args) {
      options.params = options.params.set('unassignedFromRole', String(args.unassignedFromRole));
    }
    return this.sendRequest<Object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  createUser(
    args: {
      body: models.UserDetails,  // User entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails> {
    const path = `/users`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.UserDetails>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getAclStructure(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Acl[]> {
    const path = `/users/acl`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Acl[]>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails[]> {
    const path = `/users/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.UserDetails[]>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  updateUser(
    args: {
      id: number,
      body: models.UserDetails,  // User entity object that needs to be updated
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails> {
    const path = `/users/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.UserDetails>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteUser(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/users/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/i93q0s)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getRolesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleListItem[]> {
    const path = `/users/roles`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.RoleListItem[]>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  createRole(
    args: {
      body: any,  // Role entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem> {
    const path = `/users/roles`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.RoleDetailsItem>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * [Screenshot from design](http://prntscr.com/i947a3)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PrivilegeTreeItem[]> {
    const path = `/users/privileges`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.PrivilegeTreeItem[]>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRoleDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem[]> {
    const path = `/users/roles/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.RoleDetailsItem[]>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  updateRole(
    args: {
      id: number,
      body?: models.RoleUpdateDetails,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem> {
    const path = `/users/roles/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.RoleDetailsItem>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteRole(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/users/roles/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/iba7xr)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getNewNotificationsList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationListItem[]> {
    const path = `/notifications/new`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.NotificationListItem[]>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  markViewedNotifications(
    args: {
      body?: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/notifications/markAsViewed`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * [Screenshot from design](http://prntscr.com/iba8tq)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getNotificationsList(
    args: {
      pageSize: number,
      page: number,  // page number
      orderBy: 'name' | 'description' | 'priority' | 'date',  // name | description | priority | date
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/notifications/all`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('orderBy' in args) {
      options.params = options.params.set('orderBy', String(args.orderBy));
    }
    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    return this.sendRequest<Object>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/ibac47) |
   * [Screenshot from design](http://prntscr.com/ibacgu)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getModulesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationModule[]> {
    const path = `/notifications/modules`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.NotificationModule[]>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/ibad9m)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getTriggersList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationTrigger[]> {
    const path = `/notifications/triggers`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.NotificationTrigger[]>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/iba8tq)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getModuleNotificationsList(
    args: {
      moduleId: number,
      pageSize: number,
      page: number,  // page number
      orderBy: 'name' | 'description' | 'priority' | 'date',  // name | description | priority | date
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    const path = `/notifications/modules/${args.moduleId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('orderBy' in args) {
      options.params = options.params.set('orderBy', String(args.orderBy));
    }
    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    return this.sendRequest<Object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  enableNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/notifications/enable/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('PUT', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  disableNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/notifications/disable/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('PUT', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationEditableListItem> {
    const path = `/notifications/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.NotificationEditableListItem>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  updateNotification(
    args: {
      id: number,
      body?: models.NotificationEditable,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/notifications/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  createNotification(
    args: {
      body?: models.NotificationEditable,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<number> {
    const path = `/notifications`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<number>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * [Screenshot from design](http://prntscr.com/ijzt2b)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getPassVerificationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies> {
    const path = `/security-policy/password-verification`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.PasswordVerificationPolicies>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/ijzt2b)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  udatePassVerificationPolicies(
    args: {
      body?: models.PasswordVerificationPolicies,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies> {
    const path = `/security-policy/password-verification`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.PasswordVerificationPolicies>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * [Screenshot from design](http://prntscr.com/ijzuv3)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getPassCreationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordCreationPolicies> {
    const path = `/security-policy/password-creation`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.PasswordCreationPolicies>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/ijzuv3)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  udatePassCreationPolicies(
    args: {
      body?: models.PasswordCreationPolicies,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordCreationPolicies> {
    const path = `/security-policy/password-creation`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.PasswordCreationPolicies>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * [Screenshot from design](http://prntscr.com/ijzvo3)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getOtherSecuritySettings(
    requestHttpOptions?: HttpOptions
  ): Observable<models.OtherSecuritySettings> {
    const path = `/security-policy/other-settings`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.OtherSecuritySettings>('GET', path, options);
  }

  /**
   * [Screenshot from design](http://prntscr.com/ijzvo3)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  udateOtherSecuritySettings(
    args: {
      body?: models.OtherSecuritySettings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.OtherSecuritySettings> {
    const path = `/security-policy/other-settings`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.OtherSecuritySettings>('PUT', path, options, JSON.stringify(args.body));
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    switch (method) {
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'HEAD':
        return this.http.head<T>(`${this.domain}${path}`, options);
      case 'OPTIONS':
        return this.http.options<T>(`${this.domain}${path}`, options);
      case 'PATCH':
        return this.http.patch<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
