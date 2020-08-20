declare module "@salesforce/apex/CNT_SB2_Lookup.getFieldLabel" {
  export default function getFieldLabel(param: {sObjectName: any, lookupField: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_Lookup.getRecords" {
  export default function getRecords(param: {sObjectName: any, lookupField: any, referenceField: any, referenceSubField: any, searchString: any, filters: any, fieldNamesToSearch: any, searchFromMultipleFields: any}): Promise<any>;
}
declare module "@salesforce/apex/CNT_SB2_Lookup.getRecordById" {
  export default function getRecordById(param: {sObjectName: any, lookupField: any, referenceField: any, referenceSubField: any, fieldNamesToSearch: any, recordId: any}): Promise<any>;
}
