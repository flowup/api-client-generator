/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpOptions } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('USE_HTTP_OPTIONS');

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class APIClient {

  readonly options: HttpOptions;
  private domain: string = `https://virtserver.swaggerhub.com/Esquare/EsquareAPI/1.0.0`;

  constructor(private http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options: HttpOptions) {

    if (domain) {
      this.domain = domain;
    }

    this.options = {
      headers: options && options.headers ? options.headers : new HttpHeaders(),
      params: options && options.params ? options.params : new HttpParams()
    };
  }

  auth(
    args: {
      body: models.AuthForm,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/auth`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  authRef(
    options?: HttpOptions
  ): Observable<any> {
    const path = `/auth/refresh`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options);
  }

  passwordRestoreRequest(
    args: {
      body: models.RestoreForm,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/restore`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  passwordRestoreEmailRequest(
    args: {
      body: models.RestoreRequestForm,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/restore/request`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  passwordRestoreCheckRestoreGuid(
    args: {
      restoreGuid: string,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/restore/checkGuid`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.restoreGuid));
  }

  getAclList(
    options?: HttpOptions
  ): Observable<models.AclItem[]> {
    const path = `/acl`;
    options = {...this.options, ...options};

    return this.sendRequest<models.AclItem[]>('GET', path, options);
  }

  getStructureEntitiesList(
    options?: HttpOptions
  ): Observable<models.Structure[]> {
    const path = `/structure`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Structure[]>('GET', path, options);
  }

  addStructureEntity(
    args: {
      body: models.StructureAddParameters,
    },
    options?: HttpOptions
  ): Observable<models.Structure> {
    const path = `/structure`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Structure>('POST', path, options, JSON.stringify(args.body));
  }

  updateStructureEntity(
    args: {
      structureId: number,
      body: models.StructureForm,
    },
    options?: HttpOptions
  ): Observable<models.Structure> {
    const path = `/structure/${args.structureId}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Structure>('PUT', path, options, JSON.stringify(args.body));
  }

  deleteStructureEntity(
    args: {
      structureId: number,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/structure/${args.structureId}`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<models.ReportItem[]> {
    const path = `/report/${args.id}`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report/preview/${args.templateId}`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<models.ImportHistoryItem[]> {
    const path = `/report/history/${args.templateId}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ImportHistoryItem[]>('GET', path, options);
  }

  uploadFile(
    args: {
      templateId: number,
      file: File,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/uploadfile/${args.templateId}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.file));
  }

  listTemplateColumns(
    args: {
      templateId: number,
    },
    options?: HttpOptions
  ): Observable<models.Column[]> {
    const path = `/report/wizard/${args.templateId}/templateColumns`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Column[]>('GET', path, options);
  }

  listReportColumns(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<models.Column[]> {
    const path = `/report/wizard/${args.id}/reportColumns`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Column[]>('GET', path, options);
  }

  saveColumnsMapping(
    args: {
      id: number,
      body: any,
    },
    options?: HttpOptions
  ): Observable<models.Table> {
    const path = `/report/wizard/${args.id}/mapping`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Table>('POST', path, options, JSON.stringify(args.body));
  }

  getValidationTable(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<models.ValidatedTable> {
    const path = `/report/wizard/${args.id}/validationTable`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ValidatedTable>('GET', path, options);
  }

  downloadImportedFile(
    args: {
      id: number,
      all?: boolean,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/downloadImported`;
    options = {...this.options, ...options};

    if ('all' in args) {
      options.params = options.params.set('all', String(args.all));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  importConfirmation(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<models.ImportResponse> {
    const path = `/report/wizard/${args.id}/import`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ImportResponse>('POST', path, options);
  }

  downloadImportOriginalFile(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/downloadOriginal`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('GET', path, options);
  }

  downloadImportSkippedFile(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/downloadSkipped`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('GET', path, options);
  }

  cancelImport(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/cancelImport`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options);
  }

  overrideImport(
    args: {
      id: number,
      description: string,
      file: File,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report/wizard/${args.id}/override`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.description), JSON.stringify(args.file));
  }

  geImportStats(
    args: {
      period?: models.Period,
    },
    options?: HttpOptions
  ): Observable<models.TotalImportStats> {
    const path = `/report/ministry/statistic`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report/ministry/issues`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<any> {
    const path = `/report/ministry/statuses`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<any> {
    const path = `/users`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<models.UserDetails> {
    const path = `/users`;
    options = {...this.options, ...options};

    return this.sendRequest<models.UserDetails>('POST', path, options, JSON.stringify(args.body));
  }

  getAclStructure(
    options?: HttpOptions
  ): Observable<models.Acl[]> {
    const path = `/users/acl`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Acl[]>('GET', path, options);
  }

  getUserDetails(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<models.UserDetails[]> {
    const path = `/users/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.UserDetails[]>('GET', path, options);
  }

  updateUser(
    args: {
      id: number,
      body: models.UserDetails,
    },
    options?: HttpOptions
  ): Observable<models.UserDetails> {
    const path = `/users/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.UserDetails>('PUT', path, options, JSON.stringify(args.body));
  }

  deleteUser(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/users/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('DELETE', path, options);
  }

  getRolesList(
    options?: HttpOptions
  ): Observable<models.RoleListItem[]> {
    const path = `/users/roles`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RoleListItem[]>('GET', path, options);
  }

  createRole(
    args: {
      body: any,
    },
    options?: HttpOptions
  ): Observable<models.RoleDetailsItem> {
    const path = `/users/roles`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RoleDetailsItem>('POST', path, options, JSON.stringify(args.body));
  }

  getList(
    options?: HttpOptions
  ): Observable<models.PrivilegeTreeItem[]> {
    const path = `/users/privileges`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PrivilegeTreeItem[]>('GET', path, options);
  }

  getRoleDetails(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<models.RoleDetailsItem[]> {
    const path = `/users/roles/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RoleDetailsItem[]>('GET', path, options);
  }

  updateRole(
    args: {
      id: number,
      body?: models.RoleUpdateDetails,
    },
    options?: HttpOptions
  ): Observable<models.RoleDetailsItem> {
    const path = `/users/roles/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RoleDetailsItem>('PUT', path, options, JSON.stringify(args.body));
  }

  deleteRole(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/users/roles/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('DELETE', path, options);
  }

  getNewNotificationsList(
    options?: HttpOptions
  ): Observable<models.NotificationListItem[]> {
    const path = `/notifications/new`;
    options = {...this.options, ...options};

    return this.sendRequest<models.NotificationListItem[]>('GET', path, options);
  }

  markViewedNotifications(
    args: {
      body?: any,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/markAsViewed`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('PUT', path, options, JSON.stringify(args.body));
  }

  getNotificationsList(
    args: {
      pageSize: number,
      page: number,
      orderBy: string,
      order?: models.Order,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/all`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<models.NotificationModule[]> {
    const path = `/notifications/modules`;
    options = {...this.options, ...options};

    return this.sendRequest<models.NotificationModule[]>('GET', path, options);
  }

  getTriggersList(
    options?: HttpOptions
  ): Observable<models.NotificationTrigger[]> {
    const path = `/notifications/triggers`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/modules/${args.moduleId}`;
    options = {...this.options, ...options};

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
    options?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/enable/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('PUT', path, options);
  }

  disableNotification(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/disable/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('PUT', path, options);
  }

  getNotification(
    args: {
      id: number,
    },
    options?: HttpOptions
  ): Observable<models.NotificationEditableListItem> {
    const path = `/notifications/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.NotificationEditableListItem>('GET', path, options);
  }

  updateNotification(
    args: {
      id: number,
      body?: models.NotificationEditable,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/${args.id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('PUT', path, options, JSON.stringify(args.body));
  }

  createNotification(
    args: {
      body?: models.NotificationEditable,
    },
    options?: HttpOptions
  ): Observable<any> {
    const path = `/notifications`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getPassVerificationPolicies(
    options?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies> {
    const path = `/security-policy/password-verification`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PasswordVerificationPolicies>('GET', path, options);
  }

  udatePassVerificationPolicies(
    args: {
      body?: models.PasswordVerificationPolicies,
    },
    options?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies> {
    const path = `/security-policy/password-verification`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PasswordVerificationPolicies>('PUT', path, options, JSON.stringify(args.body));
  }

  getPassCreationPolicies(
    options?: HttpOptions
  ): Observable<models.PasswordCreationPolicies> {
    const path = `/security-policy/password-creation`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PasswordCreationPolicies>('GET', path, options);
  }

  udatePassCreationPolicies(
    args: {
      body?: models.PasswordCreationPolicies,
    },
    options?: HttpOptions
  ): Observable<models.PasswordCreationPolicies> {
    const path = `/security-policy/password-creation`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PasswordCreationPolicies>('PUT', path, options, JSON.stringify(args.body));
  }

  getOtherSecuritySettings(
    options?: HttpOptions
  ): Observable<models.OtherSecuritySettings> {
    const path = `/security-policy/other-settings`;
    options = {...this.options, ...options};

    return this.sendRequest<models.OtherSecuritySettings>('GET', path, options);
  }

  udateOtherSecuritySettings(
    args: {
      body?: models.OtherSecuritySettings,
    },
    options?: HttpOptions
  ): Observable<models.OtherSecuritySettings> {
    const path = `/security-policy/other-settings`;
    options = {...this.options, ...options};

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
        return Observable.throw(`Unsupported request: ${method}`);
    }
  }
}
