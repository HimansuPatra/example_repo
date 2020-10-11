import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import {HttpHelperService} from '../services/http/httphelper.service'
import {ConfigService} from '../services/utilities/config.service'
@Injectable()
export class TokenInterceptorservice implements HttpInterceptor{
    constructor(private httpHelperService:HttpHelperService,
                private config:ConfigService
        ){}

    intercept(
        req:HttpRequest<any>,
        next:HttpHandler):Observable<HttpEvent<any>>{
            console.log(req.url+"inside interceptor");
            this.config.load();
             const tokenHeader:HttpHeaders=this.httpHelperService.getTokenHeader(req.url);
             const requestURL:string=this.httpHelperService.getUrl(req.url);
             if(requestURL){
                 req=req.clone({
                     headers:tokenHeader,
                     url:requestURL
                 });
             }
             console.log(req.url);
             return next.handle(req);
            }
}