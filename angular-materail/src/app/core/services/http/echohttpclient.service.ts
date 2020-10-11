import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable()
export class EchoHttpClient{
 constructor(private httpClient:HttpClient){}
 get<T>(url:string,params:any):Observable<T>{
     return this.httpClient.get<T>(url,{params});
 }

 post<T>(url:string,body?:any){
     console.log(url+"inside echohttpclient")
     console.log(body+"inside echohttpclient");
     return this.httpClient.post<T>(url,body);
 }

 put<T>(url:string,body:any){
     return this.httpClient.put<T>(url,body);
 }

 patch<T>(url:string,body:any){
    return this.httpClient.patch<T>(url,body);
}
 delete<T>(url:string){
     return this.httpClient.delete(url);
 }
}