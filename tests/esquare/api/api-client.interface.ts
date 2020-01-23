/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  auth(
    args: {
      body: models.AuthForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  authRef(
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  passwordRestoreRequest(
    args: {
      body: models.RestoreForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  passwordRestoreEmailRequest(
    args: {
      body: models.RestoreRequestForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  passwordRestoreCheckRestoreGuid(
    args: {
      restoreGuid: string,  // RestoreGuid for check
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getAclList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.AclItem[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getStructureEntitiesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  addStructureEntity(
    args: {
      body: models.StructureAddParameters,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  updateStructureEntity(
    args: {
      structureId: number,  // structure id to update
      body: models.StructureForm,  // Structure entity object that needs to be updated
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteStructureEntity(
    args: {
      structureId: number,  // structure id to delete
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

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
  ): Observable<object>;

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
  ): Observable<models.ReportItem[]>;

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
  ): Observable<object>;

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
  ): Observable<models.ImportHistoryItem[]>;

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
  ): Observable<number>;

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
  ): Observable<models.Column[]>;

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
  ): Observable<models.Column[]>;

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
  ): Observable<models.Table>;

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
  ): Observable<models.ValidatedTable>;

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
  ): Observable<File>;

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
  ): Observable<models.ImportResponse>;

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
  ): Observable<File>;

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
  ): Observable<File>;

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
  ): Observable<void>;

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
  ): Observable<void>;

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
  ): Observable<models.TotalImportStats>;

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
  ): Observable<object>;

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
  ): Observable<object>;

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
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  createUser(
    args: {
      body: models.UserDetails,  // User entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getAclStructure(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Acl[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  updateUser(
    args: {
      id: number,
      body: models.UserDetails,  // User entity object that needs to be updated
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteUser(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * [Screenshot from design](http://prntscr.com/i93q0s)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getRolesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleListItem[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  createRole(
    args: {
      body: any,  // Role entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem>;

  /**
   * [Screenshot from design](http://prntscr.com/i947a3)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PrivilegeTreeItem[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRoleDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  updateRole(
    args: {
      id: number,
      body?: models.RoleUpdateDetails,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteRole(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * [Screenshot from design](http://prntscr.com/iba7xr)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getNewNotificationsList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationListItem[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  markViewedNotifications(
    args: {
      body?: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

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
  ): Observable<object>;

  /**
   * [Screenshot from design](http://prntscr.com/ibac47) |
   * [Screenshot from design](http://prntscr.com/ibacgu)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getModulesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationModule[]>;

  /**
   * [Screenshot from design](http://prntscr.com/ibad9m)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getTriggersList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationTrigger[]>;

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
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  enableNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  disableNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationEditableListItem>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  updateNotification(
    args: {
      id: number,
      body?: models.NotificationEditable,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  createNotification(
    args: {
      body?: models.NotificationEditable,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<number>;

  /**
   * [Screenshot from design](http://prntscr.com/ijzt2b)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getPassVerificationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies>;

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
  ): Observable<models.PasswordVerificationPolicies>;

  /**
   * [Screenshot from design](http://prntscr.com/ijzuv3)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getPassCreationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordCreationPolicies>;

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
  ): Observable<models.PasswordCreationPolicies>;

  /**
   * [Screenshot from design](http://prntscr.com/ijzvo3)
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getOtherSecuritySettings(
    requestHttpOptions?: HttpOptions
  ): Observable<models.OtherSecuritySettings>;

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
  ): Observable<models.OtherSecuritySettings>;

}
