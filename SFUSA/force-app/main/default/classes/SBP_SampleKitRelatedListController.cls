public class SBP_SampleKitRelatedListController {
    @AuraEnabled
    public static list<Sample_Kit__c> getAllSampleKits(string CaseRecId)
    {
        system.debug('CaseRecId'+CaseRecId);
        List<Sample_Kit__c> kitList=new List<Sample_Kit__c>();
        //List<contact> conListToReturn=new List<contact>();
        for(Sample_Kit__c obj:[Select id,Name,Sample_Selected__c,Tracking_Number_Creation_Date__c,Barrel_Order_Group__c,Delivery_Status__c,Tracking_Number__c,Case__c from Sample_Kit__c where Case__c=:CaseRecId  ORDER BY CreatedDate DESC LIMIT 1000])
        {
            kitList.add(obj);
        }
        
        return kitList;
    }
    @AuraEnabled
    public static Case getCaseDetails(string CaseRecId ){
        Case caserec = new Case();
        caserec = [SELECT id,CaseNumber,Barrel_Order_Group__c,Brand__c from Case where id=:CaseRecId];
        
        return caserec;
    }
    @AuraEnabled
    public static Boolean DeleteSampleKitRecord(string samplekitdelId){
        Sample_kit__c samplekit = new Sample_Kit__c();
        samplekit= [SELECT ID FROM Sample_Kit__c WHERE ID=:samplekitdelId];
        if(samplekit!=null){
            delete samplekit;
            return true;
        }
        return false;
    }
    
    @AuraEnabled
    public static Boolean create3Samples(string samplekitId){
        System.debug('inside create3Samples:::'+samplekitId);
        Id SamplekitCaseId;
        List<Barrel__c> barrelList = new List<Barrel__c>();
        List<Sample_Kit__c> sampleKitList = [Select id,Name,Case__c, Case__r.Brand__c, Case__r.Product_Type__c, Case__r.Barrel__r.Barrel_Number__c from Sample_Kit__c where Id=:samplekitId LIMIT 1];
        
        
        for(Sample_Kit__c obj : sampleKitList)
        {
            if(samplekitId!=null){
                
                SamplekitCaseId = obj.Case__c;
                
                for(Integer i=0;i<=2;i++){
                    Barrel__c barrel = new Barrel__c();
                    barrel.Brand__c = obj.Case__r.Brand__c;
                    barrel.RecordTypeId = SBP_Constants.KNOB_CREEK_SAMPLE_KIT_RT_ID;    
                    barrel.Product_Type__c = obj.Case__r.Product_Type__c;
                    barrel.Tier__c = '1';
                    barrelList.add(barrel);
                }
                
                insert barrelList;
                
                for(Integer j=0;j<barrelList.size();j++){
                    Sample__c sample = new Sample__c();
                    sample.Barrel__c = barrelList[j].Id;
                    sample.Sample_Kit__c = samplekitId;
                    sample.SampleId__c = obj.Case__r.Barrel__r.Barrel_Number__c;    
                    insert sample;
                }
                
            }
        }
        
        List<Sample__c> sampleList = [select Label__c, Sample_Kit__c from Sample__c where Sample_Kit__c=:samplekitId];
        List<Barrel__c> barrelListNew = [select Id, Barrel_Number__c, Case__c from Barrel__c where Case__c=:SamplekitCaseId];
        
        if(sampleList.size()>0){
            for(Integer k=0;k<sampleList.size();k++){
                if(barrelListNew.size()>0){
                    for(Barrel__c b: barrelListNew){
                        sampleList[0].SampleId__c = b.Barrel_Number__c + 'A';
                        sampleList[0].Label__c = 'A';
                        sampleList[1].SampleId__c = b.Barrel_Number__c + 'B';
                        sampleList[1].Label__c = 'B';
                        sampleList[2].SampleId__c = b.Barrel_Number__c + 'C';
                        sampleList[2].Label__c = 'C';
                    }
                }
            }
            update sampleList;
            return true;
        }
        
        return false;
    }
}