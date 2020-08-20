declare module "@salesforce/apex/SBP_SampleSelectionCmpCtrl.getSamples" {
  export default function getSamples(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_SampleSelectionCmpCtrl.updateBarrelWithSelectedSample" {
  export default function updateBarrelWithSelectedSample(param: {recordId: any, sampleId: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_SampleSelectionCmpCtrl.createNewCase" {
  export default function createNewCase(param: {recordId: any, sampleId: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_SampleSelectionCmpCtrl.getRelatedSampleKit" {
  export default function getRelatedSampleKit(param: {caseId: any}): Promise<any>;
}
