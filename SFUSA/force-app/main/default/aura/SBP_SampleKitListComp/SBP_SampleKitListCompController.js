({
    doInitialization : function (component, event, helper) {
        var parentId=component.get("v.recordId");
        //alert(parentId);
        var action=component.get('c.getAllSampleKits');
        var existingSamplekitList=[];
        var title="Sample Kits";
        action.setParams({
            CaseRecId : parentId
        });
        action.setCallback(this,function(response){     
            var state=response.getState();
            var responseLength=response.getReturnValue().length;
            if(state==="SUCCESS")
            {
                if(responseLength <= 3)
                {
                    component.set("v.sampleKitNumber",title + ' ' + '(' + response.getReturnValue().length + ')');
                    component.set("v.existingSamplekitList",response.getReturnValue());
                }
                else
                {
                    component.set("v.sampleKitNumber",title + ' ' + '(' + '3+' + ')');
                    
                    for(var i=0; i<3;i++)
                    {
                        existingSamplekitList.push(response.getReturnValue()[i]);
                    }
                    component.set("v.existingSamplekitList",existingSamplekitList);
                }
                
            }
            
        });
        $A.enqueueAction(action);
        var action2=component.get('c.getCaseDetails');
        action2.setParams({
            CaseRecId : parentId
        });
        action2.setCallback(this,function(res){     
            var state=res.getState();
            if(state==="SUCCESS"){
                component.set("v.CaseRec",res.getReturnValue())
                
            }
        });
        $A.enqueueAction(action2);
        $A.get('e.force:refreshView').fire();
        
    },
    addSampleKit: function(component, evt, helper) {
        // alert(JSON.stringify(component.get("v.CaseRec")));
        //alert(component.get("v.CaseRec").Barrel_Order_Group__c);
        var barrelorderid = component.get("v.CaseRec").Barrel_Order_Group__c;
        //alert("Before creating Modal");
        var modalBody;
        $A.createComponent("c:SBP_SampleKitNewForm", {
            CaseId:component.get("v.recordId"),
            BarrelOrderGrpId : barrelorderid,
        },
                           function(instanceOfContactForm, status) {
                               if (status === "SUCCESS") {
                                   modalBody = instanceOfContactForm;
                                   component.find('overlayLib').showCustomModal({
                                       header: "New Sample Kit",
                                       body: modalBody, 
                                       showCloseButton: true,
                                       closeCallback: function(ovl) {
                                           console.log('Overlay is closing');
                                       }
                                   }).then(function(overlay){
                                       console.log("Overlay is made");
                                   });
                                   
                               }                             
                           });
        $A.get('e.force:refreshView').fire();
    },
    navigateToRelatedList: function(component,event,helper){
        var rlEvent = $A.get("e.force:navigateToRelatedList");
        rlEvent.setParams({
            "relatedListId": "Sample_Kits__r",
            "parentRecordId": component.get("v.recordId")
        });
        rlEvent.fire();
    },
    navigatetoRecord: function(component, event, helper){
        var objId = component.get("conid").value();
        //alert(objId);
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": objId,
            "slideDevName": "related"
        });
        navEvt.fire();
        
    },
    handleSelect: function(component, event, helper){
        var selectedMenu = event.detail.menuItem.get("v.label");
        //alert(selectedMenu);
        console.log('selectedMenu-' + selectedMenu);
        switch(selectedMenu) {
            case "Edit":
                //do create
                var samplekitrecord = event.detail.menuItem.get("v.value");
                //alert(samplekitid);
                var barrelorderid = component.get("v.CaseRec").Barrel_Order_Group__c;
                var modalBody;
                $A.createComponent("c:SBP_SampleKitNewForm", {
                    CaseId:component.get("v.recordId"),
                    BarrelOrderGrpId : barrelorderid,
                    sampleKitId :samplekitrecord,
                },
                                   function(instanceOfContactForm, status) {
                                       if (status === "SUCCESS") {
                                           modalBody = instanceOfContactForm;
                                           component.find('overlayLib').showCustomModal({
                                               header: "New Sample Kit",
                                               body: modalBody, 
                                               showCloseButton: true,
                                               closeCallback: function(ovl) {
                                                   console.log('Overlay is closing');
                                               }
                                           }).then(function(overlay){
                                               console.log("Overlay is made");
                                           });
                                           
                                       }                             
                                   });
                
                $A.get('e.force:refreshView').fire();
                break;
            case "Delete":
                //do delete
                var action3=component.get('c.DeleteSampleKitRecord');
                var sampleDelId = event.detail.menuItem.get("v.value");
                
                action3.setParams({
                    samplekitdelId : sampleDelId
                });
                action3.setCallback(this,function(res){     
                    var state=res.getState();
                    //alert(state);
                    if(state==="SUCCESS"){
                        var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                            "title": "Success!",
                            "type":"Success",
                            "message": "Sample Kit record has been deleted successfully."
                        });
                        toastEvent.fire();
                        
                    }
                });
                $A.enqueueAction(action3);
                $A.get('e.force:refreshView').fire();
                break; 
                
        }
        $A.get('e.force:refreshView').fire();
    }
    
})