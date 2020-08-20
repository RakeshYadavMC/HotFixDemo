declare module "@salesforce/apex/CNT_SB2_ManageBrand.validateBrandAllocation" {
  export default function validateBrandAllocation(param: {newBrandAllocation: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.getFutureBrandAllocation" {
  export default function getFutureBrandAllocation(param: {newBrandAllocation: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.deactivateBrandAllocation" {
  export default function deactivateBrandAllocation(param: {lstBrandAlloc: any, status: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.insertCurrentBrandAllocation" {
  export default function insertCurrentBrandAllocation(param: {newBrandAllocation: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.insertBrandAllocation" {
  export default function insertBrandAllocation(param: {newBrandAllocation: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.getBrandAllocation" {
  export default function getBrandAllocation(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.updateAllocation" {
  export default function updateAllocation(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.updateCarryForwardAllocation" {
  export default function updateCarryForwardAllocation(param: {recordId: any, isCarryforward: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.cloneBrandAllocation" {
  export default function cloneBrandAllocation(param: {BrandId: any, isCarryForward: any, programType: any, timePeriod: any, timeInterval: any, yearOfAllocation: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.getDependentMap" {
  export default function getDependentMap(param: {objDetail: any, contrfieldApiName: any, depfieldApiName: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_ManageBrand.getPicklistvalues" {
  export default function getPicklistvalues(param: {objectName: any, field_apiname: any, nullRequired: any}): Promise<any>;
}
