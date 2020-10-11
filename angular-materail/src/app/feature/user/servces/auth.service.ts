import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {EchoHttpClient } from '../../../core/services/http/echohttpclient.service'
import { IRegister } from '../models/user.model';
import {userApi } from '../constants/message'
@Injectable({
    providedIn:'root'
})
export class AuthServce{
    constructor(
        private http:EchoHttpClient       
    ){}

    register(register:IRegister):Observable<boolean>{
        return this.http.post(userApi.registerApi,register);
    }
}