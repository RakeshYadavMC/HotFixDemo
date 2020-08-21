declare module "@salesforce/apex/OrderClaimComponentController.getRelatedCases" {
  export default function getRelatedCases(param: {caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderClaimComponentController.getParentCase" {
  export default function getParentCase(param: {caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderClaimComponentController.upsertClaimSubCase" {
  export default function upsertClaimSubCase(param: {caseRec: any, acctId: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderClaimComponentController.updateParentCase" {
  export default function updateParentCase(param: {parentCaseId: any, poNumber: any, beamOrderNumber: any, isBailment: any, isGTR: any, country: any, carrier: any, state: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderClaimComponentController.removeClaimSubCase" {
  export default function removeClaimSubCase(param: {caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/OrderClaimComponentController.getClaimsIdLabelMap" {
  export default function getClaimsIdLabelMap(): Promise<any>;
}
declare module "@salesforce/apex/OrderClaimComponentController.getPicklistValues" {
  export default function getPicklistValues(): Promise<any>;
}
declare module "@salesforce/apex/OrderClaimComponentController.getRadioPicklistValues" {
  export default function getRadioPicklistValues(): Promise<any>;
}
