declare module "@salesforce/apex/EmailComponentController.getCaseById" {
  export default function getCaseById(param: {caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmailComponentController.getLastCaseEmailFieldByUser" {
  export default function getLastCaseEmailFieldByUser(param: {userId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmailComponentController.updateCaseEmailField" {
  export default function updateCaseEmailField(param: {caseId: any, ccEmail: any}): Promise<any>;
}
declare module "@salesforce/apex/EmailComponentController.removeEmailFromCase" {
  export default function removeEmailFromCase(param: {caseId: any, emailToRemove: any}): Promise<any>;
}
declare module "@salesforce/apex/EmailComponentController.getEmailLabelMap" {
  export default function getEmailLabelMap(): Promise<any>;
}
