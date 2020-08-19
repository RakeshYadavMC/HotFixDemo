declare module "@salesforce/apex/SBP_AttendeeCmpCtrl.createAttendeeRecords" {
  export default function createAttendeeRecords(param: {jsonAttendees: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_AttendeeCmpCtrl.getBrand" {
  export default function getBrand(param: {case_Id: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_AttendeeCmpCtrl.getAttendeeList" {
  export default function getAttendeeList(param: {case_Id: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_AttendeeCmpCtrl.createFlightInfo" {
  export default function createFlightInfo(param: {Incoming_Airline: any, Incoming_Flight_Number: any, Incoming_Departure_City: any, Incoming_Arrival_Time: any, Outgoing_Flight_Number: any, Outgoing_Final_Destination: any, Outgoing_Departure_Time: any, Additional_Notes: any, Outgoing_Airline: any, AttendeeId: any}): Promise<any>;
}
