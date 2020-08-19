declare module "@salesforce/apex/CustomLookupController.fetchLookUpValues" {
  export default function fetchLookUpValues(param: {searchKeyWord: any, objectName: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.getEnvironmentUrl" {
  export default function getEnvironmentUrl(): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.getDistributorRecordType" {
  export default function getDistributorRecordType(param: {searchKeyWord: any, objectName: any, queryLimit: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.getPremiseRecordType" {
  export default function getPremiseRecordType(param: {searchKeyWord: any, objectName: any, queryLimit: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.getDistributorContactForAccount" {
  export default function getDistributorContactForAccount(param: {searchKeyWord: any, objectName: any, parentId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.getMyAccounts" {
  export default function getMyAccounts(param: {searchKeyWord: any, objectName: any, parentId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.getSAPCompanyForVendorAccount" {
  export default function getSAPCompanyForVendorAccount(param: {parentId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.getAccountAndSAPCompanyCodeDetails" {
  export default function getAccountAndSAPCompanyCodeDetails(param: {PRHederId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.updatePRHeader" {
  export default function updatePRHeader(param: {jsonPRHeaders: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.getPRPicklistvalues" {
  export default function getPRPicklistvalues(param: {objectName: any, field_apiname: any, nullRequired: any}): Promise<any>;
}
