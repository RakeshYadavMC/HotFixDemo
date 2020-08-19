declare module "@salesforce/apex/CaseController.getCases" {
  export default function getCases(): Promise<any>;
}
declare module "@salesforce/apex/CaseController.getUserProf" {
  export default function getUserProf(): Promise<any>;
}
declare module "@salesforce/apex/CaseController.getClosedCases" {
  export default function getClosedCases(): Promise<any>;
}
declare module "@salesforce/apex/CaseController.getOpenCases" {
  export default function getOpenCases(): Promise<any>;
}
declare module "@salesforce/apex/CaseController.getAllClosedCases" {
  export default function getAllClosedCases(): Promise<any>;
}
declare module "@salesforce/apex/CaseController.getAllOpenCases" {
  export default function getAllOpenCases(): Promise<any>;
}
declare module "@salesforce/apex/CaseController.reopenCases" {
  export default function reopenCases(param: {caseIdList: any, reopenExplanation: any}): Promise<any>;
}
