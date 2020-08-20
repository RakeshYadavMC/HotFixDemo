declare module "@salesforce/apex/CNT_ContactUs.getPickListValues" {
  export default function getPickListValues(param: {brand: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_ContactUs.createCase" {
  export default function createCase(param: {caseObj: any, caseId: any, isComplaint: any, reCaptchaResponse: any, accountObj: any, accountId: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_ContactUs.updateCase" {
  export default function updateCase(param: {caseObj: any, caseId: any, accountObj: any, accountId: any, address2: any}): Promise<any>;
}
