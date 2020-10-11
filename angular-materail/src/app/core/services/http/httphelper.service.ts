
import { Injectable } from '@angular/core';
import { StorageService } from '../utilities/storage.service';
import { ConfigService } from '../utilities/config.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class HttpHelperService{
    private configPath:string;
    constructor(
        private storage:StorageService,
        private configService:ConfigService,
        private router:Router
    ){}
    getToken():string{
       return this.storage.getItem('');
    }
    setToken(token:string,userAuth: any){
        this.storage.setItem('','');
        this.storage.setItem('','');
    }
    removeToken(){
        //this.storage.removeItem(AuthenticationConstants.Session_Storage_Auth_Token);
        this.router.navigate(['/']);
    }
    getTokenHeader(url:string):HttpHeaders{
        console.log(url+"inside gettoken");
        console.log(url.indexOf('')+"inside gettoken");
       console.log(url.indexOf('register')+ "inside gettoken2");
       console.log(url.indexOf('product')+ "inside gettoken3");
        if(url.indexOf('')>=0){
            console.log(url+"inside gettoken1");
            return new HttpHeaders({
                'Content-Type':'application/json',
                Accept:'application/json',
                'Cache-Control':'no-cache',
                pragrm:'no-cache',
                'Access-Control-Allow-Credentials':'true',
                'Access-Control-Allow-Origin':'*'
            });
        }
        return new HttpHeaders({
            Authorization:'Bearer '+this.getToken(),
            'Content-Type':'application/json',
            Accept:'application/json',
            'Cache-Control':'no-cache',
            pragrm:'no-cache',
            'Access-Control-Allow-Credentials':'true',
            'Access-Control-Allow-Origin':'*'
        });
    }
    getUrl(url:string){  
        console.log(url+"inside geturl");     
        if(url.indexOf('http://')>0 ||url.indexOf('https://')>0){
            return url;
        }
        else{            
              return (
                         this.configService.get('baseURL')+url
                     )
        }
    }

}