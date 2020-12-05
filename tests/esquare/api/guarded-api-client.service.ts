/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './types';
import { USE_DOMAIN, USE_HTTP_OPTIONS, APIClient } from './api-client.service';

import * as models from './models';
import * as guards from './guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedAPIClient extends APIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  auth(
    args: {
      body: models.AuthForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.auth(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  authRef(
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.authRef(requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  passwordRestoreRequest(
    args: {
      body: models.RestoreForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.passwordRestoreRequest(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  passwordRestoreEmailRequest(
    args: {
      body: models.RestoreRequestForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.passwordRestoreEmailRequest(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  passwordRestoreCheckRestoreGuid(
    args: {
      restoreGuid: string,  // RestoreGuid for check
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.passwordRestoreCheckRestoreGuid(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getAclList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.AclItem[]> {
    return super.getAclList(requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isAclItem(item)) ) || console.error(`TypeGuard for response 'models.AclItem[]' caught inconsistency.`, res)));
  }

  getStructureEntitiesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure[]> {
    return super.getStructureEntitiesList(requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isStructure(item)) ) || console.error(`TypeGuard for response 'models.Structure[]' caught inconsistency.`, res)));
  }

  addStructureEntity(
    args: {
      body: models.StructureAddParameters,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure> {
    return super.addStructureEntity(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isStructure(res) || console.error(`TypeGuard for response 'models.Structure' caught inconsistency.`, res)));
  }

  updateStructureEntity(
    args: {
      structureId: number,  // structure id to update
      body: models.StructureForm,  // Structure entity object that needs to be updated
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure> {
    return super.updateStructureEntity(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isStructure(res) || console.error(`TypeGuard for response 'models.Structure' caught inconsistency.`, res)));
  }

  getReportsList(
    args: {
      status?: models.Status,  // (optional) - 1 Pending - 2 InProgress - 3 Complete 
      pageSize: number,
      page: number,  // page number
      orderBy: ('id' | 'title' | 'subtitle' | 'criticality' | 'status' | 'issues' | 'deadline'),  // id | title | subtitle | criticality | status | issues | deadline
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getReportsList(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getReportDetails(
    args: {
      id: number,  // report id to get
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ReportItem[]> {
    return super.getReportDetails(args, requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isReportItem(item)) ) || console.error(`TypeGuard for response 'models.ReportItem[]' caught inconsistency.`, res)));
  }

  getReportPreview(
    args: {
      templateId: number,  // [See #/definitions/ReportTemplate](#/Data_Import/getReportDetails) 
      pageSize: number,
      page: number,  // page number
      orderBy?: number,  // (optional) column id
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getReportPreview(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getImportHistory(
    args: {
      templateId: number,  // [See #/definitions/ReportTemplate](#/Data_Import/getReportDetails) 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ImportHistoryItem[]> {
    return super.getImportHistory(args, requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isImportHistoryItem(item)) ) || console.error(`TypeGuard for response 'models.ImportHistoryItem[]' caught inconsistency.`, res)));
  }

  uploadFile(
    args: {
      templateId: number,  // [See #/definitions/ReportTemplate](#/Data_Import/getReportDetails) 
      file: File,  // file to upload
    },
    requestHttpOptions?: HttpOptions
  ): Observable<number> {
    return super.uploadFile(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'number' || console.error(`TypeGuard for response 'number' caught inconsistency.`, res)));
  }

  listTemplateColumns(
    args: {
      templateId: number,  // [See #/definitions/ReportTemplate](#/Data_Import/getReportDetails) 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Column[]> {
    return super.listTemplateColumns(args, requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isColumn(item)) ) || console.error(`TypeGuard for response 'models.Column[]' caught inconsistency.`, res)));
  }

  listReportColumns(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Column[]> {
    return super.listReportColumns(args, requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isColumn(item)) ) || console.error(`TypeGuard for response 'models.Column[]' caught inconsistency.`, res)));
  }

  saveColumnsMapping(
    args: {
      id: number,  // Id of current import
      body: models.ColumnMapping[],  // Column mappint for current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Table> {
    return super.saveColumnsMapping(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isTable(res) || console.error(`TypeGuard for response 'models.Table' caught inconsistency.`, res)));
  }

  getValidationTable(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ValidatedTable> {
    return super.getValidationTable(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isValidatedTable(res) || console.error(`TypeGuard for response 'models.ValidatedTable' caught inconsistency.`, res)));
  }

  downloadImportedFile(
    args: {
      id: number,  // Id of current import
      all?: boolean,  // (optional) Indicator of downloading data(all or errors only)
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    return super.downloadImportedFile(args, requestHttpOptions)
      .pipe(tap((res: any) => res instanceof File || console.error(`TypeGuard for response 'File' caught inconsistency.`, res)));
  }

  importConfirmation(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ImportResponse> {
    return super.importConfirmation(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isImportResponse(res) || console.error(`TypeGuard for response 'models.ImportResponse' caught inconsistency.`, res)));
  }

  downloadImportOriginalFile(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    return super.downloadImportOriginalFile(args, requestHttpOptions)
      .pipe(tap((res: any) => res instanceof File || console.error(`TypeGuard for response 'File' caught inconsistency.`, res)));
  }

  downloadImportSkippedFile(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    return super.downloadImportSkippedFile(args, requestHttpOptions)
      .pipe(tap((res: any) => res instanceof File || console.error(`TypeGuard for response 'File' caught inconsistency.`, res)));
  }

  geImportStats(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TotalImportStats> {
    return super.geImportStats(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isTotalImportStats(res) || console.error(`TypeGuard for response 'models.TotalImportStats' caught inconsistency.`, res)));
  }

  getIssuesList(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
      status?: models.IssueStatus,  // (optional) - 1 Pending - 2 Resolved 
      pageSize: number,
      page: number,  // page number
      orderBy: ('name' | 'school' | 'dueDate' | 'alert'),  // name | school | dueDate | alert
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getIssuesList(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getStatusesList(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
      status?: models.ImportStatus,  // (optional) - 1 Live - 2 PastDeadline 
      pageSize: number,
      page: number,  // page number
      orderBy: ('name' | 'issues' | 'dueDate' | 'progress'),  // name | issues | dueDate | progress
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getStatusesList(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getUsersList(
    args: {
      period?: models.Period,  // (optional) - 1 Year - 2 Month - 3 Week 
      status?: models.ImportStatus,  // (optional) - 1 Live - 2 PastDeadline 
      pageSize: number,
      page: number,  // page number
      orderBy: ('name' | 'issues' | 'dueDate' | 'progress'),  // name | issues | dueDate | progress
      order?: models.Order,  // (optional) - asc - desc 
      assignedToRole?: number,  // (optional) role id | [Screenshot from design](http://prntscr.com/ib9yal)
      unassignedFromRole?: number,  // (optional) role id | [Screenshot from design](http://prntscr.com/ib9z16)
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getUsersList(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  createUser(
    args: {
      body: models.UserDetails,  // User entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails> {
    return super.createUser(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUserDetails(res) || console.error(`TypeGuard for response 'models.UserDetails' caught inconsistency.`, res)));
  }

  getAclStructure(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Acl[]> {
    return super.getAclStructure(requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isAcl(item)) ) || console.error(`TypeGuard for response 'models.Acl[]' caught inconsistency.`, res)));
  }

  getUserDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails[]> {
    return super.getUserDetails(args, requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isUserDetails(item)) ) || console.error(`TypeGuard for response 'models.UserDetails[]' caught inconsistency.`, res)));
  }

  updateUser(
    args: {
      id: number,
      body: models.UserDetails,  // User entity object that needs to be updated
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails> {
    return super.updateUser(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUserDetails(res) || console.error(`TypeGuard for response 'models.UserDetails' caught inconsistency.`, res)));
  }

  getRolesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleListItem[]> {
    return super.getRolesList(requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isRoleListItem(item)) ) || console.error(`TypeGuard for response 'models.RoleListItem[]' caught inconsistency.`, res)));
  }

  createRole(
    args: {
      body: object,  // Role entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem> {
    return super.createRole(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isRoleDetailsItem(res) || console.error(`TypeGuard for response 'models.RoleDetailsItem' caught inconsistency.`, res)));
  }

  getList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PrivilegeTreeItem[]> {
    return super.getList(requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isPrivilegeTreeItem(item)) ) || console.error(`TypeGuard for response 'models.PrivilegeTreeItem[]' caught inconsistency.`, res)));
  }

  getRoleDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem[]> {
    return super.getRoleDetails(args, requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isRoleDetailsItem(item)) ) || console.error(`TypeGuard for response 'models.RoleDetailsItem[]' caught inconsistency.`, res)));
  }

  updateRole(
    args: {
      id: number,
      body?: models.RoleUpdateDetails,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem> {
    return super.updateRole(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isRoleDetailsItem(res) || console.error(`TypeGuard for response 'models.RoleDetailsItem' caught inconsistency.`, res)));
  }

  getNewNotificationsList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationListItem[]> {
    return super.getNewNotificationsList(requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isNotificationListItem(item)) ) || console.error(`TypeGuard for response 'models.NotificationListItem[]' caught inconsistency.`, res)));
  }

  getNotificationsList(
    args: {
      pageSize: number,
      page: number,  // page number
      orderBy: ('name' | 'description' | 'priority' | 'date'),  // name | description | priority | date
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getNotificationsList(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getModulesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationModule[]> {
    return super.getModulesList(requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isNotificationModule(item)) ) || console.error(`TypeGuard for response 'models.NotificationModule[]' caught inconsistency.`, res)));
  }

  getTriggersList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationTrigger[]> {
    return super.getTriggersList(requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isNotificationTrigger(item)) ) || console.error(`TypeGuard for response 'models.NotificationTrigger[]' caught inconsistency.`, res)));
  }

  getModuleNotificationsList(
    args: {
      moduleId: number,
      pageSize: number,
      page: number,  // page number
      orderBy: ('name' | 'description' | 'priority' | 'date'),  // name | description | priority | date
      order?: models.Order,  // (optional) - asc - desc 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getModuleNotificationsList(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationEditableListItem> {
    return super.getNotification(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isNotificationEditableListItem(res) || console.error(`TypeGuard for response 'models.NotificationEditableListItem' caught inconsistency.`, res)));
  }

  createNotification(
    args: {
      body?: models.NotificationEditable,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<number> {
    return super.createNotification(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'number' || console.error(`TypeGuard for response 'number' caught inconsistency.`, res)));
  }

  getPassVerificationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies> {
    return super.getPassVerificationPolicies(requestHttpOptions)
      .pipe(tap((res: any) => guards.isPasswordVerificationPolicies(res) || console.error(`TypeGuard for response 'models.PasswordVerificationPolicies' caught inconsistency.`, res)));
  }

  udatePassVerificationPolicies(
    args: {
      body?: models.PasswordVerificationPolicies,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies> {
    return super.udatePassVerificationPolicies(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isPasswordVerificationPolicies(res) || console.error(`TypeGuard for response 'models.PasswordVerificationPolicies' caught inconsistency.`, res)));
  }

  getPassCreationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordCreationPolicies> {
    return super.getPassCreationPolicies(requestHttpOptions)
      .pipe(tap((res: any) => guards.isPasswordCreationPolicies(res) || console.error(`TypeGuard for response 'models.PasswordCreationPolicies' caught inconsistency.`, res)));
  }

  udatePassCreationPolicies(
    args: {
      body?: models.PasswordCreationPolicies,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordCreationPolicies> {
    return super.udatePassCreationPolicies(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isPasswordCreationPolicies(res) || console.error(`TypeGuard for response 'models.PasswordCreationPolicies' caught inconsistency.`, res)));
  }

  getOtherSecuritySettings(
    requestHttpOptions?: HttpOptions
  ): Observable<models.OtherSecuritySettings> {
    return super.getOtherSecuritySettings(requestHttpOptions)
      .pipe(tap((res: any) => guards.isOtherSecuritySettings(res) || console.error(`TypeGuard for response 'models.OtherSecuritySettings' caught inconsistency.`, res)));
  }

  udateOtherSecuritySettings(
    args: {
      body?: models.OtherSecuritySettings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.OtherSecuritySettings> {
    return super.udateOtherSecuritySettings(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isOtherSecuritySettings(res) || console.error(`TypeGuard for response 'models.OtherSecuritySettings' caught inconsistency.`, res)));
  }

}
