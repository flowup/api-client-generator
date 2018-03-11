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

  auth(body: models.AuthForm, options?: HttpOptions): Observable<any> {
    const path = `/auth`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(body));
  }

  authRef(options?: HttpOptions): Observable<any> {
    const path = `/auth/refresh`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options);
  }

  passwordRestoreRequest(body: models.RestoreForm, options?: HttpOptions): Observable<any> {
    const path = `/restore`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(body));
  }

  passwordRestoreEmailRequest(body: models.RestoreRequestForm, options?: HttpOptions): Observable<any> {
    const path = `/restore/request`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(body));
  }

  passwordRestoreCheckRestoreGuid(restoreGuid: string, options?: HttpOptions): Observable<any> {
    const path = `/restore/checkGuid`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options);
  }

  getAclList(options?: HttpOptions): Observable<models.AclItem[]> {
    const path = `/acl`;
    options = {...this.options, ...options};

    return this.sendRequest<models.AclItem[]>('GET', path, options);
  }

  getStructureEntitiesList(options?: HttpOptions): Observable<models.Structure[]> {
    const path = `/structure`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Structure[]>('GET', path, options);
  }

  addStructureEntity(body: models.StructureAddParameters, options?: HttpOptions): Observable<models.Structure> {
    const path = `/structure`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Structure>('POST', path, options, JSON.stringify(body));
  }

  updateStructureEntity(structureId: number, body: models.StructureForm, options?: HttpOptions): Observable<models.Structure> {
    const path = `/structure/${structureId}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Structure>('PUT', path, options, JSON.stringify(body));
  }

  deleteStructureEntity(structureId: number, options?: HttpOptions): Observable<any> {
    const path = `/structure/${structureId}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('DELETE', path, options);
  }

  getReportsList(status: models.Status, pageSize: number, page: number, orderBy: string, order: models.Order, options?: HttpOptions): Observable<any> {
    const path = `/report`;
    options = {...this.options, ...options};

    if (status) {
      options.params = options.params.set('status', String(status));
    }
    if (pageSize) {
      options.params = options.params.set('pageSize', String(pageSize));
    }
    if (page) {
      options.params = options.params.set('page', String(page));
    }
    if (orderBy) {
      options.params = options.params.set('orderBy', String(orderBy));
    }
    if (order) {
      options.params = options.params.set('order', String(order));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  getReportDetails(id: number, options?: HttpOptions): Observable<models.ReportItem[]> {
    const path = `/report/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ReportItem[]>('GET', path, options);
  }

  getReportPreview(templateId: number, pageSize: number, page: number, orderBy: number, order: models.Order, options?: HttpOptions): Observable<any> {
    const path = `/report/preview/${templateId}`;
    options = {...this.options, ...options};

    if (pageSize) {
      options.params = options.params.set('pageSize', String(pageSize));
    }
    if (page) {
      options.params = options.params.set('page', String(page));
    }
    if (orderBy) {
      options.params = options.params.set('orderBy', String(orderBy));
    }
    if (order) {
      options.params = options.params.set('order', String(order));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  getImportHistory(templateId: number, options?: HttpOptions): Observable<models.ImportHistoryItem[]> {
    const path = `/report/history/${templateId}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ImportHistoryItem[]>('GET', path, options);
  }

  uploadFile(templateId: number, file: models.File, options?: HttpOptions): Observable<any> {
    const path = `/report/wizard/uploadfile/${templateId}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options);
  }

  listTemplateColumns(templateId: number, options?: HttpOptions): Observable<models.Column[]> {
    const path = `/report/wizard/${templateId}/templateColumns`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Column[]>('GET', path, options);
  }

  listReportColumns(id: number, options?: HttpOptions): Observable<models.Column[]> {
    const path = `/report/wizard/${id}/reportColumns`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Column[]>('GET', path, options);
  }

  saveColumnsMapping(id: number, body: any, options?: HttpOptions): Observable<models.Table> {
    const path = `/report/wizard/${id}/mapping`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Table>('POST', path, options, JSON.stringify(body));
  }

  getValidationTable(id: number, options?: HttpOptions): Observable<models.ValidatedTable> {
    const path = `/report/wizard/${id}/validationTable`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ValidatedTable>('GET', path, options);
  }

  downloadImportedFile(id: number, all: boolean, options?: HttpOptions): Observable<any> {
    const path = `/report/wizard/${id}/downloadImported`;
    options = {...this.options, ...options};

    if (all) {
      options.params = options.params.set('all', String(all));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  importConfirmation(id: number, options?: HttpOptions): Observable<models.ImportResponse> {
    const path = `/report/wizard/${id}/import`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ImportResponse>('POST', path, options);
  }

  downloadImportOriginalFile(id: number, options?: HttpOptions): Observable<any> {
    const path = `/report/wizard/${id}/downloadOriginal`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('GET', path, options);
  }

  downloadImportSkippedFile(id: number, options?: HttpOptions): Observable<any> {
    const path = `/report/wizard/${id}/downloadSkipped`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('GET', path, options);
  }

  cancelImport(id: number, options?: HttpOptions): Observable<any> {
    const path = `/report/wizard/${id}/cancelImport`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options);
  }

  overrideImport(id: number, description: string, file: models.File, options?: HttpOptions): Observable<any> {
    const path = `/report/wizard/${id}/override`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options);
  }

  geImportStats(period: models.Period, options?: HttpOptions): Observable<models.TotalImportStats> {
    const path = `/report/ministry/statistic`;
    options = {...this.options, ...options};

    if (period) {
      options.params = options.params.set('period', String(period));
    }
    return this.sendRequest<models.TotalImportStats>('GET', path, options);
  }

  getIssuesList(period: models.Period, status: models.IssueStatus, pageSize: number, page: number, orderBy: string, order: models.Order, options?: HttpOptions): Observable<any> {
    const path = `/report/ministry/issues`;
    options = {...this.options, ...options};

    if (period) {
      options.params = options.params.set('period', String(period));
    }
    if (status) {
      options.params = options.params.set('status', String(status));
    }
    if (pageSize) {
      options.params = options.params.set('pageSize', String(pageSize));
    }
    if (page) {
      options.params = options.params.set('page', String(page));
    }
    if (orderBy) {
      options.params = options.params.set('orderBy', String(orderBy));
    }
    if (order) {
      options.params = options.params.set('order', String(order));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  getStatusesList(period: models.Period, status: models.ImportStatus, pageSize: number, page: number, orderBy: string, order: models.Order, options?: HttpOptions): Observable<any> {
    const path = `/report/ministry/statuses`;
    options = {...this.options, ...options};

    if (period) {
      options.params = options.params.set('period', String(period));
    }
    if (status) {
      options.params = options.params.set('status', String(status));
    }
    if (pageSize) {
      options.params = options.params.set('pageSize', String(pageSize));
    }
    if (page) {
      options.params = options.params.set('page', String(page));
    }
    if (orderBy) {
      options.params = options.params.set('orderBy', String(orderBy));
    }
    if (order) {
      options.params = options.params.set('order', String(order));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  getUsersList(period: models.Period, status: models.ImportStatus, pageSize: number, page: number, orderBy: string, order: models.Order, assignedToRole: number, unassignedFromRole: number, options?: HttpOptions): Observable<any> {
    const path = `/users`;
    options = {...this.options, ...options};

    if (period) {
      options.params = options.params.set('period', String(period));
    }
    if (status) {
      options.params = options.params.set('status', String(status));
    }
    if (pageSize) {
      options.params = options.params.set('pageSize', String(pageSize));
    }
    if (page) {
      options.params = options.params.set('page', String(page));
    }
    if (orderBy) {
      options.params = options.params.set('orderBy', String(orderBy));
    }
    if (order) {
      options.params = options.params.set('order', String(order));
    }
    if (assignedToRole) {
      options.params = options.params.set('assignedToRole', String(assignedToRole));
    }
    if (unassignedFromRole) {
      options.params = options.params.set('unassignedFromRole', String(unassignedFromRole));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  createUser(body: models.UserDetails, options?: HttpOptions): Observable<models.UserDetails> {
    const path = `/users`;
    options = {...this.options, ...options};

    return this.sendRequest<models.UserDetails>('POST', path, options, JSON.stringify(body));
  }

  getAclStructure(options?: HttpOptions): Observable<models.Acl[]> {
    const path = `/users/acl`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Acl[]>('GET', path, options);
  }

  getUserDetails(id: number, options?: HttpOptions): Observable<models.UserDetails[]> {
    const path = `/users/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.UserDetails[]>('GET', path, options);
  }

  updateUser(id: number, body: models.UserDetails, options?: HttpOptions): Observable<models.UserDetails> {
    const path = `/users/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.UserDetails>('PUT', path, options, JSON.stringify(body));
  }

  deleteUser(id: number, options?: HttpOptions): Observable<any> {
    const path = `/users/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('DELETE', path, options);
  }

  getRolesList(options?: HttpOptions): Observable<models.RoleListItem[]> {
    const path = `/users/roles`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RoleListItem[]>('GET', path, options);
  }

  createRole(body: any, options?: HttpOptions): Observable<models.RoleDetailsItem> {
    const path = `/users/roles`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RoleDetailsItem>('POST', path, options, JSON.stringify(body));
  }

  getList(options?: HttpOptions): Observable<models.PrivilegeTreeItem[]> {
    const path = `/users/privileges`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PrivilegeTreeItem[]>('GET', path, options);
  }

  getRoleDetails(id: number, options?: HttpOptions): Observable<models.RoleDetailsItem[]> {
    const path = `/users/roles/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RoleDetailsItem[]>('GET', path, options);
  }

  updateRole(id: number, body: models.RoleUpdateDetails, options?: HttpOptions): Observable<models.RoleDetailsItem> {
    const path = `/users/roles/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RoleDetailsItem>('PUT', path, options, JSON.stringify(body));
  }

  deleteRole(id: number, options?: HttpOptions): Observable<any> {
    const path = `/users/roles/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('DELETE', path, options);
  }

  getNewNotificationsList(options?: HttpOptions): Observable<models.NotificationListItem[]> {
    const path = `/notifications/new`;
    options = {...this.options, ...options};

    return this.sendRequest<models.NotificationListItem[]>('GET', path, options);
  }

  markViewedNotifications(body: any, options?: HttpOptions): Observable<any> {
    const path = `/notifications/markAsViewed`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('PUT', path, options, JSON.stringify(body));
  }

  getNotificationsList(pageSize: number, page: number, orderBy: string, order: models.Order, options?: HttpOptions): Observable<any> {
    const path = `/notifications/all`;
    options = {...this.options, ...options};

    if (pageSize) {
      options.params = options.params.set('pageSize', String(pageSize));
    }
    if (page) {
      options.params = options.params.set('page', String(page));
    }
    if (orderBy) {
      options.params = options.params.set('orderBy', String(orderBy));
    }
    if (order) {
      options.params = options.params.set('order', String(order));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  getModulesList(options?: HttpOptions): Observable<models.NotificationModule[]> {
    const path = `/notifications/modules`;
    options = {...this.options, ...options};

    return this.sendRequest<models.NotificationModule[]>('GET', path, options);
  }

  getTriggersList(options?: HttpOptions): Observable<models.NotificationTrigger[]> {
    const path = `/notifications/triggers`;
    options = {...this.options, ...options};

    return this.sendRequest<models.NotificationTrigger[]>('GET', path, options);
  }

  getModuleNotificationsList(moduleId: number, pageSize: number, page: number, orderBy: string, order: models.Order, options?: HttpOptions): Observable<any> {
    const path = `/notifications/modules/${moduleId}`;
    options = {...this.options, ...options};

    if (pageSize) {
      options.params = options.params.set('pageSize', String(pageSize));
    }
    if (page) {
      options.params = options.params.set('page', String(page));
    }
    if (orderBy) {
      options.params = options.params.set('orderBy', String(orderBy));
    }
    if (order) {
      options.params = options.params.set('order', String(order));
    }
    return this.sendRequest<any>('GET', path, options);
  }

  enableNotification(id: number, options?: HttpOptions): Observable<any> {
    const path = `/notifications/enable/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('PUT', path, options);
  }

  disableNotification(id: number, options?: HttpOptions): Observable<any> {
    const path = `/notifications/disable/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('PUT', path, options);
  }

  getNotification(id: number, options?: HttpOptions): Observable<models.NotificationEditableListItem> {
    const path = `/notifications/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<models.NotificationEditableListItem>('GET', path, options);
  }

  updateNotification(id: number, body: models.NotificationEditable, options?: HttpOptions): Observable<any> {
    const path = `/notifications/${id}`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('PUT', path, options, JSON.stringify(body));
  }

  createNotification(body: models.NotificationEditable, options?: HttpOptions): Observable<any> {
    const path = `/notifications`;
    options = {...this.options, ...options};

    return this.sendRequest<any>('POST', path, options, JSON.stringify(body));
  }

  getPassVerificationPolicies(options?: HttpOptions): Observable<models.PasswordVerificationPolicies> {
    const path = `/security-policy/password-verification`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PasswordVerificationPolicies>('GET', path, options);
  }

  udatePassVerificationPolicies(body: models.PasswordVerificationPolicies, options?: HttpOptions): Observable<models.PasswordVerificationPolicies> {
    const path = `/security-policy/password-verification`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PasswordVerificationPolicies>('PUT', path, options, JSON.stringify(body));
  }

  getPassCreationPolicies(options?: HttpOptions): Observable<models.PasswordCreationPolicies> {
    const path = `/security-policy/password-creation`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PasswordCreationPolicies>('GET', path, options);
  }

  udatePassCreationPolicies(body: models.PasswordCreationPolicies, options?: HttpOptions): Observable<models.PasswordCreationPolicies> {
    const path = `/security-policy/password-creation`;
    options = {...this.options, ...options};

    return this.sendRequest<models.PasswordCreationPolicies>('PUT', path, options, JSON.stringify(body));
  }

  getOtherSecuritySettings(options?: HttpOptions): Observable<models.OtherSecuritySettings> {
    const path = `/security-policy/other-settings`;
    options = {...this.options, ...options};

    return this.sendRequest<models.OtherSecuritySettings>('GET', path, options);
  }

  udateOtherSecuritySettings(body: models.OtherSecuritySettings, options?: HttpOptions): Observable<models.OtherSecuritySettings> {
    const path = `/security-policy/other-settings`;
    options = {...this.options, ...options};

    return this.sendRequest<models.OtherSecuritySettings>('PUT', path, options, JSON.stringify(body));
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    switch (method) {
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return Observable.throw(`Unsupported request: ${method}`);
    }
  }
}
