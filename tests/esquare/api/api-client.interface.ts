/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface {

  auth(
    args: {
      body: models.AuthForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  authRef(
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  passwordRestoreRequest(
    args: {
      body: models.RestoreForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  passwordRestoreEmailRequest(
    args: {
      body: models.RestoreRequestForm,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  passwordRestoreCheckRestoreGuid(
    args: {
      restoreGuid: string,  // RestoreGuid for check
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getAclList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.AclItem[]>;

  getStructureEntitiesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure[]>;

  addStructureEntity(
    args: {
      body: models.StructureAddParameters,  // Structure entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure>;

  updateStructureEntity(
    args: {
      structureId: number,  // structure id to update
      body: models.StructureForm,  // Structure entity object that needs to be updated
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Structure>;

  deleteStructureEntity(
    args: {
      structureId: number,  // structure id to delete
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

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
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/hywkd5)
   * 
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
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/i3ym4j)
   * 
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
   */
  uploadFile(
    args: {
      templateId: number,  // [See #/definitions/ReportTemplate](#/Data_Import/getReportDetails) 
      file: File,  // file to upload
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/hy52hi)
   * 
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
   */
  downloadImportedFile(
    args: {
      id: number,  // Id of current import
      all?: boolean,  // (optional) Indicator of downloading data(all or errors only)
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/hy57nj)
   * 
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
   */
  downloadImportOriginalFile(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/hy5ae7)
   * 
   */
  downloadImportSkippedFile(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/hy5aqq)
   * 
   */
  cancelImport(
    args: {
      id: number,  // Id of current import
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

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
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/i4052r)
   * 
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
  ): Observable<any>;

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
  ): Observable<any>;

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
  ): Observable<any>;

  createUser(
    args: {
      body: models.UserDetails,  // User entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails>;

  getAclStructure(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Acl[]>;

  getUserDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails[]>;

  updateUser(
    args: {
      id: number,
      body: models.UserDetails,  // User entity object that needs to be updated
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserDetails>;

  deleteUser(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/i93q0s)
   * 
   */
  getRolesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleListItem[]>;

  createRole(
    args: {
      body: any,  // Role entity object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem>;

  /**
   * [Screenshot from design](http://prntscr.com/i947a3)
   * 
   */
  getList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PrivilegeTreeItem[]>;

  getRoleDetails(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem[]>;

  updateRole(
    args: {
      id: number,
      body?: models.RoleUpdateDetails,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RoleDetailsItem>;

  deleteRole(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/iba7xr)
   * 
   */
  getNewNotificationsList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationListItem[]>;

  markViewedNotifications(
    args: {
      body?: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

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
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/ibac47) |
   * [Screenshot from design](http://prntscr.com/ibacgu)
   * 
   */
  getModulesList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationModule[]>;

  /**
   * [Screenshot from design](http://prntscr.com/ibad9m)
   * 
   */
  getTriggersList(
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationTrigger[]>;

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
  ): Observable<any>;

  enableNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  disableNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getNotification(
    args: {
      id: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.NotificationEditableListItem>;

  updateNotification(
    args: {
      id: number,
      body?: models.NotificationEditable,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  createNotification(
    args: {
      body?: models.NotificationEditable,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * [Screenshot from design](http://prntscr.com/ijzt2b)
   * 
   */
  getPassVerificationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordVerificationPolicies>;

  /**
   * [Screenshot from design](http://prntscr.com/ijzt2b)
   * 
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
   */
  getPassCreationPolicies(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PasswordCreationPolicies>;

  /**
   * [Screenshot from design](http://prntscr.com/ijzuv3)
   * 
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
   */
  getOtherSecuritySettings(
    requestHttpOptions?: HttpOptions
  ): Observable<models.OtherSecuritySettings>;

  /**
   * [Screenshot from design](http://prntscr.com/ijzvo3)
   * 
   */
  udateOtherSecuritySettings(
    args: {
      body?: models.OtherSecuritySettings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.OtherSecuritySettings>;

}
