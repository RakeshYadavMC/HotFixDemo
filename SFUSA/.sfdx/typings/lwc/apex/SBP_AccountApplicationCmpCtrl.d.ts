declare module "@salesforce/apex/SBP_AccountApplicationCmpCtrl.getAccountStatus" {
  export default function getAccountStatus(param: {accountId: any, brand: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_AccountApplicationCmpCtrl.insertAccountApplication" {
  export default function insertAccountApplication(param: {questionMap: any, jsonApplications: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_AccountApplicationCmpCtrl.sendRequestWithPreviousAnswers" {
  export default function sendRequestWithPreviousAnswers(param: {accountId: any, brand: any, distributorAccountId: any, distributorContactId: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_AccountApplicationCmpCtrl.getAccountApplicationData" {
  export default function getAccountApplicationData(param: {brand: any, isInternational: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_AccountApplicationCmpCtrl.isProgramAvailable" {
  export default function isProgramAvailable(param: {brand: any}): Promise<any>;
}
