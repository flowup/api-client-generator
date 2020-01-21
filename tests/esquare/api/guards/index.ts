/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

export function isany(_: any): _ is any {
  return true;
}

export function isstring(arg: any): arg is string {
  return typeof arg === 'string';
}

export function isnumber(arg: any): arg is number {
  return typeof arg === 'number';
}

export function isboolean(arg: any): arg is boolean {
  return typeof arg === 'boolean';
}

export function isObject(arg: any): arg is any {
  return typeof arg === 'object';
}

export function isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && isBlob(arg);
}

/* generated type guards */

export function isAcl(arg: any): arg is models.Acl {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // parrentId?: number
    ( typeof arg.parrentId === 'undefined' || typeof arg.parrentId === 'number' ) &&

  true
  );
  }

export function isAclItem(arg: any): arg is models.AclItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // permissions?: string[]
    ( typeof arg.permissions === 'undefined' || (Array.isArray(arg.permissions) && arg.permissions.every((item: unknown) => typeof item === 'string')) ) &&
    // role?: string
    ( typeof arg.role === 'undefined' || typeof arg.role === 'string' ) &&

  true
  );
  }

export function isAuthForm(arg: any): arg is models.AuthForm {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // email: string
    ( typeof arg.email === 'string' ) &&
    // password: string
    ( typeof arg.password === 'string' ) &&
    // rememberMe?: boolean
    ( typeof arg.rememberMe === 'undefined' || typeof arg.rememberMe === 'boolean' ) &&

  true
  );
  }

export function isColumn(arg: any): arg is models.Column {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isColumnMapping(arg: any): arg is models.ColumnMapping {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // reportColumnId?: number
    ( typeof arg.reportColumnId === 'undefined' || typeof arg.reportColumnId === 'number' ) &&
    // templateColumnId?: number
    ( typeof arg.templateColumnId === 'undefined' || typeof arg.templateColumnId === 'number' ) &&

  true
  );
  }

  import {
  Criticality,
  } from '../models';

  export function isCriticality(arg: any): arg is Criticality {
  return false
   || arg === Criticality.Low
   || arg === Criticality.Medium
   || arg === Criticality.High
  ;
  }

  import {
  Frequency,
  } from '../models';

  export function isFrequency(arg: any): arg is Frequency {
  return false
   || arg === Frequency.Daily
   || arg === Frequency.Weekly
   || arg === Frequency.Yearly
  ;
  }

export function isImportHistoryItem(arg: any): arg is models.ImportHistoryItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // datetime?: string
    ( typeof arg.datetime === 'undefined' || typeof arg.datetime === 'string' ) &&
    // details?: string
    ( typeof arg.details === 'undefined' || typeof arg.details === 'string' ) &&
    // filename?: string
    ( typeof arg.filename === 'undefined' || typeof arg.filename === 'string' ) &&
    // status?: Status
    ( typeof arg.status === 'undefined' || isStatus(arg.status) ) &&
    // type?: ImportType
    ( typeof arg.type === 'undefined' || isImportType(arg.type) ) &&
    // user?: string
    ( typeof arg.user === 'undefined' || typeof arg.user === 'string' ) &&

  true
  );
  }

export function isImportResponse(arg: any): arg is models.ImportResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // skipperRows?: number
    ( typeof arg.skipperRows === 'undefined' || typeof arg.skipperRows === 'number' ) &&
    // status?: boolean
    ( typeof arg.status === 'undefined' || typeof arg.status === 'boolean' ) &&

  true
  );
  }

export function isImportStats(arg: any): arg is models.ImportStats {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // late?: number
    ( typeof arg.late === 'undefined' || typeof arg.late === 'number' ) &&
    // onTime?: number
    ( typeof arg.onTime === 'undefined' || typeof arg.onTime === 'number' ) &&

  true
  );
  }

export function isImportStatsGroup(arg: any): arg is models.ImportStatsGroup {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // imported?: ImportStats[]
    ( typeof arg.imported === 'undefined' || (Array.isArray(arg.imported) && arg.imported.every((item: unknown) => isImportStats(item))) ) &&
    // pending?: ImportStats[]
    ( typeof arg.pending === 'undefined' || (Array.isArray(arg.pending) && arg.pending.every((item: unknown) => isImportStats(item))) ) &&

  true
  );
  }

  import {
  ImportStatus,
  } from '../models';

  export function isImportStatus(arg: any): arg is ImportStatus {
  return false
   || arg === ImportStatus.Live
   || arg === ImportStatus.PastDeadline
  ;
  }

export function isImportStatusDetailsItem(arg: any): arg is models.ImportStatusDetailsItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
    // progress?: number
    ( typeof arg.progress === 'undefined' || typeof arg.progress === 'number' ) &&
    // status?: Status
    ( typeof arg.status === 'undefined' || isStatus(arg.status) ) &&
    // subtitle?: string
    ( typeof arg.subtitle === 'undefined' || typeof arg.subtitle === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isImportStatusItem(arg: any): arg is models.ImportStatusItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // criticality?: Criticality
    ( typeof arg.criticality === 'undefined' || isCriticality(arg.criticality) ) &&
    // details?: ImportStatusDetailsItem[]
    ( typeof arg.details === 'undefined' || (Array.isArray(arg.details) && arg.details.every((item: unknown) => isImportStatusDetailsItem(item))) ) &&
    // dueDate?: string
    ( typeof arg.dueDate === 'undefined' || typeof arg.dueDate === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
    // progress?: number
    ( typeof arg.progress === 'undefined' || typeof arg.progress === 'number' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

  import {
  ImportType,
  } from '../models';

  export function isImportType(arg: any): arg is ImportType {
  return false
   || arg === ImportType.ThirdParty
   || arg === ImportType.File
  ;
  }

export function isIssue(arg: any): arg is models.Issue {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // alert?: IssueAlertType
    ( typeof arg.alert === 'undefined' || isIssueAlertType(arg.alert) ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // dueDate?: string
    ( typeof arg.dueDate === 'undefined' || typeof arg.dueDate === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // reportName?: string
    ( typeof arg.reportName === 'undefined' || typeof arg.reportName === 'string' ) &&
    // rootCause?: string
    ( typeof arg.rootCause === 'undefined' || typeof arg.rootCause === 'string' ) &&
    // school?: string
    ( typeof arg.school === 'undefined' || typeof arg.school === 'string' ) &&

  true
  );
  }

  import {
  IssueAlertType,
  } from '../models';

  export function isIssueAlertType(arg: any): arg is IssueAlertType {
  return false
   || arg === IssueAlertType.Validation
   || arg === IssueAlertType.Data
  ;
  }

  import {
  IssueStatus,
  } from '../models';

  export function isIssueStatus(arg: any): arg is IssueStatus {
  return false
   || arg === IssueStatus.Pending
   || arg === IssueStatus.Resolved
  ;
  }

export function isNotificationEditable(arg: any): arg is models.NotificationEditable {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // frequency?: Frequency
    ( typeof arg.frequency === 'undefined' || isFrequency(arg.frequency) ) &&
    // moduleId?: number
    ( typeof arg.moduleId === 'undefined' || typeof arg.moduleId === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // priority?: Criticality
    ( typeof arg.priority === 'undefined' || isCriticality(arg.priority) ) &&
    // triggerId?: number
    ( typeof arg.triggerId === 'undefined' || typeof arg.triggerId === 'number' ) &&

  true
  );
  }

export function isNotificationEditableListItem(arg: any): arg is models.NotificationEditableListItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // enabled?: boolean
    ( typeof arg.enabled === 'undefined' || typeof arg.enabled === 'boolean' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // extends NotificationEditable
    isNotificationEditable(arg) &&

  true
  );
  }

export function isNotificationListItem(arg: any): arg is models.NotificationListItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // date?: string
    ( typeof arg.date === 'undefined' || typeof arg.date === 'string' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // priority?: Criticality
    ( typeof arg.priority === 'undefined' || isCriticality(arg.priority) ) &&

  true
  );
  }

export function isNotificationModule(arg: any): arg is models.NotificationModule {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // notificationsCount?: number
    ( typeof arg.notificationsCount === 'undefined' || typeof arg.notificationsCount === 'number' ) &&

  true
  );
  }

export function isNotificationTrigger(arg: any): arg is models.NotificationTrigger {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

  true
  );
  }

  import {
  Order,
  } from '../models';

  export function isOrder(arg: any): arg is Order {
  return false
   || arg === Order.asc
   || arg === Order.desc
  ;
  }

export function isOrderableTable(arg: any): arg is models.OrderableTable {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // order?: Order
    ( typeof arg.order === 'undefined' || isOrder(arg.order) ) &&
    // orderBy?: number
    ( typeof arg.orderBy === 'undefined' || typeof arg.orderBy === 'number' ) &&
    // extends Table
    isTable(arg) &&

  true
  );
  }

export function isOtherSecuritySettings(arg: any): arg is models.OtherSecuritySettings {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // inactivityTimeout?: number
    ( typeof arg.inactivityTimeout === 'undefined' || typeof arg.inactivityTimeout === 'number' ) &&

  true
  );
  }

export function isPagedTable(arg: any): arg is models.PagedTable {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // totalRows?: number
    ( typeof arg.totalRows === 'undefined' || typeof arg.totalRows === 'number' ) &&
    // extends Table
    isTable(arg) &&

  true
  );
  }

export function isPasswordCreationPolicies(arg: any): arg is models.PasswordCreationPolicies {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // passwordMinChars?: number
    ( typeof arg.passwordMinChars === 'undefined' || typeof arg.passwordMinChars === 'number' ) &&
    // passwordMinDigits?: number
    ( typeof arg.passwordMinDigits === 'undefined' || typeof arg.passwordMinDigits === 'number' ) &&
    // passwordMinLength?: number
    ( typeof arg.passwordMinLength === 'undefined' || typeof arg.passwordMinLength === 'number' ) &&
    // passwordMinSpecialChars?: number
    ( typeof arg.passwordMinSpecialChars === 'undefined' || typeof arg.passwordMinSpecialChars === 'number' ) &&
    // passwordMinUpperChars?: number
    ( typeof arg.passwordMinUpperChars === 'undefined' || typeof arg.passwordMinUpperChars === 'number' ) &&
    // passwordNotMatchPrevious?: number
    ( typeof arg.passwordNotMatchPrevious === 'undefined' || typeof arg.passwordNotMatchPrevious === 'number' ) &&
    // passwordResetLinkExpiration?: number
    ( typeof arg.passwordResetLinkExpiration === 'undefined' || typeof arg.passwordResetLinkExpiration === 'number' ) &&
    // preventOldPasswordReuse?: boolean
    ( typeof arg.preventOldPasswordReuse === 'undefined' || typeof arg.preventOldPasswordReuse === 'boolean' ) &&

  true
  );
  }

export function isPasswordVerificationPolicies(arg: any): arg is models.PasswordVerificationPolicies {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // changePasswordInterval?: number
    ( typeof arg.changePasswordInterval === 'undefined' || typeof arg.changePasswordInterval === 'number' ) &&
    // lockAfterAttempts?: number
    ( typeof arg.lockAfterAttempts === 'undefined' || typeof arg.lockAfterAttempts === 'number' ) &&
    // passwordExpiryNotification?: number
    ( typeof arg.passwordExpiryNotification === 'undefined' || typeof arg.passwordExpiryNotification === 'number' ) &&
    // reenableTimeout?: number
    ( typeof arg.reenableTimeout === 'undefined' || typeof arg.reenableTimeout === 'number' ) &&

  true
  );
  }

  import {
  Period,
  } from '../models';

  export function isPeriod(arg: any): arg is Period {
  return false
   || arg === Period.Year
   || arg === Period.Month
   || arg === Period.Week
  ;
  }

export function isPrivilegeTreeItem(arg: any): arg is models.PrivilegeTreeItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // parentId?: number
    ( typeof arg.parentId === 'undefined' || typeof arg.parentId === 'number' ) &&

  true
  );
  }

export function isReportItem(arg: any): arg is models.ReportItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // groups?: ReportTemplateGroup[]
    ( typeof arg.groups === 'undefined' || (Array.isArray(arg.groups) && arg.groups.every((item: unknown) => isReportTemplateGroup(item))) ) &&
    // progress?: number
    ( typeof arg.progress === 'undefined' || typeof arg.progress === 'number' ) &&
    // extends ReportListItem
    isReportListItem(arg) &&

  true
  );
  }

export function isReportListItem(arg: any): arg is models.ReportListItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // criticality?: Criticality
    ( typeof arg.criticality === 'undefined' || isCriticality(arg.criticality) ) &&
    // deadline?: string
    ( typeof arg.deadline === 'undefined' || typeof arg.deadline === 'string' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
    // status?: Status
    ( typeof arg.status === 'undefined' || isStatus(arg.status) ) &&
    // subtitle?: string
    ( typeof arg.subtitle === 'undefined' || typeof arg.subtitle === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isReportTemplate(arg: any): arg is models.ReportTemplate {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
    // sampleFileUrl?: string
    ( typeof arg.sampleFileUrl === 'undefined' || typeof arg.sampleFileUrl === 'string' ) &&
    // status?: Status
    ( typeof arg.status === 'undefined' || isStatus(arg.status) ) &&
    // subtitle?: string
    ( typeof arg.subtitle === 'undefined' || typeof arg.subtitle === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isReportTemplateGroup(arg: any): arg is models.ReportTemplateGroup {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // imports?: ReportTemplate[]
    ( typeof arg.imports === 'undefined' || (Array.isArray(arg.imports) && arg.imports.every((item: unknown) => isReportTemplate(item))) ) &&
    // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isRestoreForm(arg: any): arg is models.RestoreForm {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // 'passwordСonfirm': string
    ( typeof arg['passwordСonfirm'] === 'string' ) &&
    // guid?: string
    ( typeof arg.guid === 'undefined' || typeof arg.guid === 'string' ) &&
    // password: string
    ( typeof arg.password === 'string' ) &&

  true
  );
  }

export function isRestoreRequestForm(arg: any): arg is models.RestoreRequestForm {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // email: string
    ( typeof arg.email === 'string' ) &&

  true
  );
  }

export function isRoleDetailsItem(arg: any): arg is models.RoleDetailsItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // privileges?: number[]
    ( typeof arg.privileges === 'undefined' || (Array.isArray(arg.privileges) && arg.privileges.every((item: unknown) => typeof item === 'number')) ) &&
    // status?: RoleStatus
    ( typeof arg.status === 'undefined' || isRoleStatus(arg.status) ) &&
    // users?: number[]
    ( typeof arg.users === 'undefined' || (Array.isArray(arg.users) && arg.users.every((item: unknown) => typeof item === 'number')) ) &&

  true
  );
  }

export function isRoleListItem(arg: any): arg is models.RoleListItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // privileges?: string
    ( typeof arg.privileges === 'undefined' || typeof arg.privileges === 'string' ) &&
    // status?: RoleStatus
    ( typeof arg.status === 'undefined' || isRoleStatus(arg.status) ) &&

  true
  );
  }

export function isRoleStatus(arg: any): arg is models.RoleStatus {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // extends UserStatus
    isUserStatus(arg) &&

  true
  );
  }

export function isRoleUpdateDetails(arg: any): arg is models.RoleUpdateDetails {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // privilegesToAssing?: number[]
    ( typeof arg.privilegesToAssing === 'undefined' || (Array.isArray(arg.privilegesToAssing) && arg.privilegesToAssing.every((item: unknown) => typeof item === 'number')) ) &&
    // privilegesToUnassing?: number[]
    ( typeof arg.privilegesToUnassing === 'undefined' || (Array.isArray(arg.privilegesToUnassing) && arg.privilegesToUnassing.every((item: unknown) => typeof item === 'number')) ) &&
    // status?: RoleStatus
    ( typeof arg.status === 'undefined' || isRoleStatus(arg.status) ) &&
    // usersToAssing?: number[]
    ( typeof arg.usersToAssing === 'undefined' || (Array.isArray(arg.usersToAssing) && arg.usersToAssing.every((item: unknown) => typeof item === 'number')) ) &&
    // usersToUnassing?: number[]
    ( typeof arg.usersToUnassing === 'undefined' || (Array.isArray(arg.usersToUnassing) && arg.usersToUnassing.every((item: unknown) => typeof item === 'number')) ) &&

  true
  );
  }

export function isSchoolImportStats(arg: any): arg is models.SchoolImportStats {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // stats?: ImportStatsGroup
    ( typeof arg.stats === 'undefined' || isImportStatsGroup(arg.stats) ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

  import {
  Status,
  } from '../models';

  export function isStatus(arg: any): arg is Status {
  return false
   || arg === Status.Pending
   || arg === Status.InProgress
   || arg === Status.Complete
  ;
  }

export function isStructure(arg: any): arg is models.Structure {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // parentId?: number
    ( typeof arg.parentId === 'undefined' || typeof arg.parentId === 'number' ) &&
    // extends StructureForm
    isStructureForm(arg) &&

  true
  );
  }

export function isStructureAddParameters(arg: any): arg is models.StructureAddParameters {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // parentId?: number
    ( typeof arg.parentId === 'undefined' || typeof arg.parentId === 'number' ) &&
    // extends StructureForm
    isStructureForm(arg) &&

  true
  );
  }

export function isStructureForm(arg: any): arg is models.StructureForm {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // address?: string
    ( typeof arg.address === 'undefined' || typeof arg.address === 'string' ) &&
    // code: string
    ( typeof arg.code === 'string' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // name: string
    ( typeof arg.name === 'string' ) &&

  true
  );
  }

export function isTable(arg: any): arg is models.Table {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // tableData?: TableCell[][]
    ( typeof arg.tableData === 'undefined' || (Array.isArray(arg.tableData) && arg.tableData.every((item: unknown) => isTableCell[](item))) ) &&
    // tableHead?: Column[]
    ( typeof arg.tableHead === 'undefined' || (Array.isArray(arg.tableHead) && arg.tableHead.every((item: unknown) => isColumn(item))) ) &&

  true
  );
  }

export function isTableCell(arg: any): arg is models.TableCell {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // columnId?: number
    ( typeof arg.columnId === 'undefined' || typeof arg.columnId === 'number' ) &&
    // value?: string
    ( typeof arg.value === 'undefined' || typeof arg.value === 'string' ) &&

  true
  );
  }

export function isTotalImportStats(arg: any): arg is models.TotalImportStats {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // bySchools?: SchoolImportStats[]
    ( typeof arg.bySchools === 'undefined' || (Array.isArray(arg.bySchools) && arg.bySchools.every((item: unknown) => isSchoolImportStats(item))) ) &&
    // total?: ImportStatsGroup
    ( typeof arg.total === 'undefined' || isImportStatsGroup(arg.total) ) &&

  true
  );
  }

export function isUserDetails(arg: any): arg is models.UserDetails {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
    // entities?: number[]
    ( typeof arg.entities === 'undefined' || (Array.isArray(arg.entities) && arg.entities.every((item: unknown) => typeof item === 'number')) ) &&
    // firstName?: string
    ( typeof arg.firstName === 'undefined' || typeof arg.firstName === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // imageData?: string
    ( typeof arg.imageData === 'undefined' || typeof arg.imageData === 'string' ) &&
    // imageUrl?: string
    ( typeof arg.imageUrl === 'undefined' || typeof arg.imageUrl === 'string' ) &&
    // lastName?: string
    ( typeof arg.lastName === 'undefined' || typeof arg.lastName === 'string' ) &&
    // login?: string
    ( typeof arg.login === 'undefined' || typeof arg.login === 'string' ) &&
    // phone?: string
    ( typeof arg.phone === 'undefined' || typeof arg.phone === 'string' ) &&
    // roleId?: number
    ( typeof arg.roleId === 'undefined' || typeof arg.roleId === 'number' ) &&
    // status?: UserStatus
    ( typeof arg.status === 'undefined' || isUserStatus(arg.status) ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isUserListItem(arg: any): arg is models.UserListItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // entityIds?: number[]
    ( typeof arg.entityIds === 'undefined' || (Array.isArray(arg.entityIds) && arg.entityIds.every((item: unknown) => typeof item === 'number')) ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // roleId?: number
    ( typeof arg.roleId === 'undefined' || typeof arg.roleId === 'number' ) &&
    // status?: UserStatus
    ( typeof arg.status === 'undefined' || isUserStatus(arg.status) ) &&

  true
  );
  }

  import {
  UserStatus,
  } from '../models';

  export function isUserStatus(arg: any): arg is UserStatus {
  return false
   || arg === UserStatus.Active
   || arg === UserStatus.Blocked
  ;
  }

export function isValidatedTable(arg: any): arg is models.ValidatedTable {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // tableData?: ValidatedTableCell[][]
    ( typeof arg.tableData === 'undefined' || (Array.isArray(arg.tableData) && arg.tableData.every((item: unknown) => isValidatedTableCell[](item))) ) &&
    // tableHead?: Column[]
    ( typeof arg.tableHead === 'undefined' || (Array.isArray(arg.tableHead) && arg.tableHead.every((item: unknown) => isColumn(item))) ) &&

  true
  );
  }

export function isValidatedTableCell(arg: any): arg is models.ValidatedTableCell {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // error?: string
    ( typeof arg.error === 'undefined' || typeof arg.error === 'string' ) &&
    // extends TableCell
    isTableCell(arg) &&

  true
  );
  }


