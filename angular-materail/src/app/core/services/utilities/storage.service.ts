import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class StorageService{
 private _storage:Storage;
 constructor(){
   this._storage=sessionStorage;
    }
   setItem(key:string,value:any):void{
       this._storage.setItem(key,JSON.stringify(value));
   }
   getItem(key:string):any{
       const item=this._storage.getItem(key);
       if(item && item !=='undefined'){
           return JSON.parse(item);
       }
       return;
   }
   removeItem(key:string):void{
       this._storage.removeItem(key);
   }
}

