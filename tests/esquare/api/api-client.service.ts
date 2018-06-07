/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class APIClient {

  private readonly options: APIHttpOptions;

  private readonly domain: string = `https://virtserver.swaggerhub.com/Esquare/EsquareAPI/1.0.0`;

  constructor(private readonly http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options: DefaultHttpOptions) {

    if (domain) {
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
      body: models.AuthForm,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/auth`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  authRef(
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/auth/refresh`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('POST', path, options);
  }

  passwordRestoreRequest(
    args: {
      body: models.RestoreForm,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/restore`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  passwordRestoreEmailRequest(
    args: {
      body: models.RestoreRequestForm,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/restore/request`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  passwordRestoreCheckRestoreGuid(
    args: {
      restoreGuid: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/restore/checkGuid`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.restoreGuid));
  }

  getAclList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.AclItem[]> {
    const path = `/acl`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.AclItem[]>('GET', path, options);
  }

  getStructureEntitiesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure[]> {
    const path = `/structure`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.Structure[]>('GET', path, options);
  }

  addStructureEntity(
    args: {
      body: models.StructureAddParameters,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure> {
    const path = `/structure`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.Structure>('POST', path, options, JSON.stringify(args.body));
  }

  updateStructureEntity(
    args: {
      structureId: number,
      body: models.StructureForm,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure> {
    const path = `/structure/${args.structureId}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.Structure>('PUT', path, options, JSON.stringify(args.body));
  }

  deleteStructureEntity(
    args: {
      structureId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/structure/${args.structureId}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('DELETE', path, options);
  }

  getReportsList(
    args: {
      status?: models.Status,
      pageSize: number,
      page: number,
      orderBy: string,
      order?: models.Order,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getReportDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ReportItem[]> {
    const path = `/report/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.ReportItem[]>('GET', path, options);
  }

  getReportPreview(
    args: {
      templateId: number,
      pageSize: number,
      page: number,
      orderBy?: number,
      order?: models.Order,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report/preview/${args.templateId}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getImportHistory(
    args: {
      templateId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ImportHistoryItem[]> {
    const path = `/report/history/${args.templateId}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.ImportHistoryItem[]>('GET', path, options);
  }

  uploadFile(
    args: {
      templateId: number,
      file: File,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/uploadfile/${args.templateId}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.file));
  }

  listTemplateColumns(
    args: {
      templateId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Column[]> {
    const path = `/report/wizard/${args.templateId}/templateColumns`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.Column[]>('GET', path, options);
  }

  listReportColumns(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Column[]> {
    const path = `/report/wizard/${args.id}/reportColumns`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.Column[]>('GET', path, options);
  }

  saveColumnsMapping(
    args: {
      id: number,
      body: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Table> {
    const path = `/report/wizard/${args.id}/mapping`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.Table>('POST', path, options, JSON.stringify(args.body));
  }

  getValidationTable(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ValidatedTable> {
    const path = `/report/wizard/${args.id}/validationTable`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.ValidatedTable>('GET', path, options);
  }

  downloadImportedFile(
    args: {
      id: number,
      all?: boolean,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/downloadImported`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('all' in args) {
      options.params = options.params.set('all', String(args.all));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  importConfirmation(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ImportResponse> {
    const path = `/report/wizard/${args.id}/import`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.ImportResponse>('POST', path, options);
  }

  downloadImportOriginalFile(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/downloadOriginal`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('GET', path, options);
  }

  downloadImportSkippedFile(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/downloadSkipped`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('GET', path, options);
  }

  cancelImport(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/cancelImport`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('POST', path, options);
  }

  overrideImport(
    args: {
      id: number,
      description: string,
      file: File,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/override`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.description), JSON.stringify(args.file));
  }

  geImportStats(
    args: {
      period?: models.Period,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TotalImportStats> {
    const path = `/report/ministry/statistic`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('period' in args) {
      options.params = options.params.set('period', String(args.period));
    }
    return this.sendRequest<models.TotalImportStats>('GET', path, options);
  }

  getIssuesList(
    args: {
      period?: models.Period,
      status?: models.IssueStatus,
      pageSize: number,
      page: number,
      orderBy: string,
      order?: models.Order,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report/ministry/issues`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getStatusesList(
    args: {
      period?: models.Period,
      status?: models.ImportStatus,
      pageSize: number,
      page: number,
      orderBy: string,
      order?: models.Order,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/report/ministry/statuses`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getUsersList(
    args: {
      period?: models.Period,
      status?: models.ImportStatus,
      pageSize: number,
      page: number,
      orderBy: string,
      order?: models.Order,
      assignedToRole?: number,
      unassignedFromRole?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  createUser(
    args: {
      body: models.UserDetails,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails> {
    const path = `/users`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.UserDetails>('POST', path, options, JSON.stringify(args.body));
  }

  getAclStructure(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Acl[]> {
    const path = `/users/acl`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.Acl[]>('GET', path, options);
  }

  getUserDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails[]> {
    const path = `/users/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.UserDetails[]>('GET', path, options);
  }

  updateUser(
    args: {
      id: number,
      body: models.UserDetails,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails> {
    const path = `/users/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.UserDetails>('PUT', path, options, JSON.stringify(args.body));
  }

  deleteUser(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('DELETE', path, options);
  }

  getRolesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleListItem[]> {
    const path = `/users/roles`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.RoleListItem[]>('GET', path, options);
  }

  createRole(
    args: {
      body: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem> {
    const path = `/users/roles`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.RoleDetailsItem>('POST', path, options, JSON.stringify(args.body));
  }

  getList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PrivilegeTreeItem[]> {
    const path = `/users/privileges`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.PrivilegeTreeItem[]>('GET', path, options);
  }

  getRoleDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem[]> {
    const path = `/users/roles/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

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
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.RoleDetailsItem>('PUT', path, options, JSON.stringify(args.body));
  }

  deleteRole(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users/roles/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('DELETE', path, options);
  }

  getNewNotificationsList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationListItem[]> {
    const path = `/notifications/new`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.NotificationListItem[]>('GET', path, options);
  }

  markViewedNotifications(
    args: {
      body?: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/markAsViewed`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('PUT', path, options, JSON.stringify(args.body));
  }

  getNotificationsList(
    args: {
      pageSize: number,
      page: number,
      orderBy: string,
      order?: models.Order,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/all`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getModulesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationModule[]> {
    const path = `/notifications/modules`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.NotificationModule[]>('GET', path, options);
  }

  getTriggersList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationTrigger[]> {
    const path = `/notifications/triggers`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.NotificationTrigger[]>('GET', path, options);
  }

  getModuleNotificationsList(
    args: {
      moduleId: number,
      pageSize: number,
      page: number,
      orderBy: string,
      order?: models.Order,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/modules/${args.moduleId}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  enableNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/enable/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('PUT', path, options);
  }

  disableNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/disable/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('PUT', path, options);
  }

  getNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationEditableListItem> {
    const path = `/notifications/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.NotificationEditableListItem>('GET', path, options);
  }

  updateNotification(
    args: {
      id: number,
      body?: models.NotificationEditable,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('PUT', path, options, JSON.stringify(args.body));
  }

  createNotification(
    args: {
      body?: models.NotificationEditable,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getPassVerificationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies> {
    const path = `/security-policy/password-verification`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.PasswordVerificationPolicies>('GET', path, options);
  }

  udatePassVerificationPolicies(
    args: {
      body?: models.PasswordVerificationPolicies,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies> {
    const path = `/security-policy/password-verification`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.PasswordVerificationPolicies>('PUT', path, options, JSON.stringify(args.body));
  }

  getPassCreationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordCreationPolicies> {
    const path = `/security-policy/password-creation`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.PasswordCreationPolicies>('GET', path, options);
  }

  udatePassCreationPolicies(
    args: {
      body?: models.PasswordCreationPolicies,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordCreationPolicies> {
    const path = `/security-policy/password-creation`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.PasswordCreationPolicies>('PUT', path, options, JSON.stringify(args.body));
  }

  getOtherSecuritySettings(
    requestHttpOptions?: HttpOptions
  ): Observable<models.OtherSecuritySettings> {
    const path = `/security-policy/other-settings`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.OtherSecuritySettings>('GET', path, options);
  }

  udateOtherSecuritySettings(
    args: {
      body?: models.OtherSecuritySettings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.OtherSecuritySettings> {
    const path = `/security-policy/other-settings`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

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
