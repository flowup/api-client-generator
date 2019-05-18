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

    return this.sendRequest<Object>('POST', path, options, JSON.stringify(args.restoreGuid));
  }

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
   */
  getReportsList(
    args: {
      status?: models.Status,  // (optional) - 1 Pending - 2 InProgress - 3 Complete 
      pageSize: number,
      page: number,  // page number
      orderBy: string,  // id | title | subtitle | criticality | status | issues | deadline
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

    return this.sendRequest<number>('POST', path, options, JSON.stringify(args.file));
  }

  /**
   * [Screenshot from design](http://prntscr.com/hy52hi)
   * 
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

    return this.sendRequest<void>('POST', path, options, JSON.stringify(args.description), JSON.stringify(args.file));
  }

  /**
   * [Screenshot from design](http://prntscr.com/i4052r)
   * 
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
   */
  getIssuesList(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
      status?: models.IssueStatus,  // (optional) - 1 Pending - 2 Resolved 
      pageSize: number,
      page: number,  // page number
      orderBy: string,  // name | school | dueDate | alert
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
   */
  getStatusesList(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
      status?: models.ImportStatus,  // (optional) - 1 Live - 2 PastDeadline 
      pageSize: number,
      page: number,  // page number
      orderBy: string,  // name | issues | dueDate | progress
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

  getUsersList(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
      status?: models.ImportStatus,  // (optional) - 1 Live - 2 PastDeadline 
      pageSize: number,
      page: number,  // page number
      orderBy: string,  // name | issues | dueDate | progress
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
   */
  getNotificationsList(
    args: {
      pageSize: number,
      page: number,  // page number
      orderBy: string,  // name | description | priority | date
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
   */
  getModuleNotificationsList(
    args: {
      moduleId: number,
      pageSize: number,
      page: number,  // page number
      orderBy: string,  // name | description | priority | date
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
