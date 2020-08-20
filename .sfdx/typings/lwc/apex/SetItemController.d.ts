declare module "@salesforce/apex/SetItemController.getRelatedQuoteRequests" {
  export default function getRelatedQuoteRequests(param: {caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/SetItemController.getCurrentCase" {
  export default function getCurrentCase(param: {caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/SetItemController.getUnavailabilityReasonPicklistValues" {
  export default function getUnavailabilityReasonPicklistValues(): Promise<any>;
}
declare module "@salesforce/apex/SetItemController.updateRelatedQuoteRequests" {
  export default function updateRelatedQuoteRequests(param: {quoteMap: any, caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/SetItemController.updateQuoteRequests" {
  export default function updateQuoteRequests(param: {quoteList: any, caseId: any, hasUnpriced: any}): Promise<any>;
}
