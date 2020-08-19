declare module "@salesforce/apex/SBP_BarrelRecipeCmpCtrl.getSingleBarrelStaveCustomMetadata" {
  export default function getSingleBarrelStaveCustomMetadata(param: {brand: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_BarrelRecipeCmpCtrl.getRecentRecipes" {
  export default function getRecentRecipes(param: {caseId: any, brand: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_BarrelRecipeCmpCtrl.createBarrelRecord" {
  export default function createBarrelRecord(param: {caseId: any, brand: any, recipe: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_BarrelRecipeCmpCtrl.getCase" {
  export default function getCase(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/SBP_BarrelRecipeCmpCtrl.createBarrelRecipe" {
  export default function createBarrelRecipe(param: {jsonRecipe: any, caseId: any}): Promise<any>;
}
