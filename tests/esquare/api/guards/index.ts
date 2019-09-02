/* tslint:disable */

export { isAcl } from './acl.model.guard';
export { isAclItem } from './acl-item.model.guard';
export { isAuthForm } from './auth-form.model.guard';
export { isColumn } from './column.model.guard';
export { isColumnMapping } from './column-mapping.model.guard';
export { isCriticality } from './criticality.enum.guard';
export { isFrequency } from './frequency.enum.guard';
export { isImportHistoryItem } from './import-history-item.model.guard';
export { isImportResponse } from './import-response.model.guard';
export { isImportStats } from './import-stats.model.guard';
export { isImportStatsGroup } from './import-stats-group.model.guard';
export { isImportStatus } from './import-status.enum.guard';
export { isImportStatusDetailsItem } from './import-status-details-item.model.guard';
export { isImportStatusItem } from './import-status-item.model.guard';
export { isImportType } from './import-type.enum.guard';
export { isIssue } from './issue.model.guard';
export { isIssueAlertType } from './issue-alert-type.enum.guard';
export { isIssueStatus } from './issue-status.enum.guard';
export { isNotificationEditable } from './notification-editable.model.guard';
export { isNotificationEditableListItem } from './notification-editable-list-item.model.guard';
export { isNotificationListItem } from './notification-list-item.model.guard';
export { isNotificationModule } from './notification-module.model.guard';
export { isNotificationTrigger } from './notification-trigger.model.guard';
export { isOrder } from './order.enum.guard';
export { isOrderableTable } from './orderable-table.model.guard';
export { isOtherSecuritySettings } from './other-security-settings.model.guard';
export { isPagedTable } from './paged-table.model.guard';
export { isPasswordCreationPolicies } from './password-creation-policies.model.guard';
export { isPasswordVerificationPolicies } from './password-verification-policies.model.guard';
export { isPeriod } from './period.enum.guard';
export { isPrivilegeTreeItem } from './privilege-tree-item.model.guard';
export { isReportItem } from './report-item.model.guard';
export { isReportListItem } from './report-list-item.model.guard';
export { isReportTemplate } from './report-template.model.guard';
export { isReportTemplateGroup } from './report-template-group.model.guard';
export { isRestoreForm } from './restore-form.model.guard';
export { isRestoreRequestForm } from './restore-request-form.model.guard';
export { isRoleDetailsItem } from './role-details-item.model.guard';
export { isRoleListItem } from './role-list-item.model.guard';
export { isRoleStatus } from './role-status.model.guard';
export { isRoleUpdateDetails } from './role-update-details.model.guard';
export { isSchoolImportStats } from './school-import-stats.model.guard';
export { isStatus } from './status.enum.guard';
export { isStructure } from './structure.model.guard';
export { isStructureAddParameters } from './structure-add-parameters.model.guard';
export { isStructureForm } from './structure-form.model.guard';
export { isTable } from './table.model.guard';
export { isTableCell } from './table-cell.model.guard';
export { isTotalImportStats } from './total-import-stats.model.guard';
export { isUserDetails } from './user-details.model.guard';
export { isUserListItem } from './user-list-item.model.guard';
export { isUserStatus } from './user-status.enum.guard';
export { isValidatedTable } from './validated-table.model.guard';
export { isValidatedTableCell } from './validated-table-cell.model.guard';


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

export function isDate(arg: any): arg is Date {
  return arg != null && typeof arg.toISOString === 'function';
}
