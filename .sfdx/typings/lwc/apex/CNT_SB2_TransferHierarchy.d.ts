declare module "@salesforce/apex/CNT_SB2_TransferHierarchy.getHierarchicalData" {
  export default function getHierarchicalData(): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_TransferHierarchy.getDistributors" {
  export default function getDistributors(param: {stateId: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_TransferHierarchy.transferState" {
  export default function transferState(param: {countryId: any, oldRecordId: any, oldParentId: any, newParentId: any, transferType: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_TransferHierarchy.transferDistributor" {
  export default function transferDistributor(param: {countryId: any, oldRecordId: any, oldParentId: any, newParentId: any, transferType: any}): Promise<any>;
}
