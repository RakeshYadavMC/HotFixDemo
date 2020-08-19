declare module "@salesforce/apex/SBP_CalendarCmpCtrl.upsertEvents" {
  export default function upsertEvents(param: {sEventObj: any, plant: any, brand: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.getSingleBarrelCalendarCustomMetadata" {
  export default function getSingleBarrelCalendarCustomMetadata(): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.getEvents" {
  export default function getEvents(param: {brands: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.sortTimePeriodsBasedOnDay" {
  export default function sortTimePeriodsBasedOnDay(): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.getEventDataByDay" {
  export default function getEventDataByDay(): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.buildBrandLimitMap" {
  export default function buildBrandLimitMap(): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.getCurrentLimitPerDay" {
  export default function getCurrentLimitPerDay(): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.getAvailableTimeSlots" {
  export default function getAvailableTimeSlots(param: {brand: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.getSeasonalEvents" {
  export default function getSeasonalEvents(param: {brand: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.getRelatedEvent" {
  export default function getRelatedEvent(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.getOnHoldDates" {
  export default function getOnHoldDates(param: {brand: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.insertEvent" {
  export default function insertEvent(param: {sEventObj: any, brand: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.createOnHoldDates" {
  export default function createOnHoldDates(param: {brand: any, startDate: any, endDate: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_CalendarCmpCtrl.updateCase" {
  export default function updateCase(param: {eventId: any, programType: any, caseId: any}): Promise<any>;
}
