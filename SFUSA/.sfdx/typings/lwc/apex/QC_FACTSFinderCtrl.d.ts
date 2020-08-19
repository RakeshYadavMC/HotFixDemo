declare module "@salesforce/apex/QC_FACTSFinderCtrl.loadInitialData" {
  export default function loadInitialData(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/QC_FACTSFinderCtrl.getCaseRecord" {
  export default function getCaseRecord(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/QC_FACTSFinderCtrl.getMatchingCases" {
  export default function getMatchingCases(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/QC_FACTSFinderCtrl.getCurrentIncidents" {
  export default function getCurrentIncidents(): Promise<any>;
}
declare module "@salesforce/apex/QC_FACTSFinderCtrl.addToIncident" {
  export default function addToIncident(param: {currentCaseId: any, factsIncidentId: any}): Promise<any>;
}
declare module "@salesforce/apex/QC_FACTSFinderCtrl.executeQuery" {
  export default function executeQuery(param: {queryString: any}): Promise<any>;
}
