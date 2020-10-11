import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { devlopment } from '../../../../environments/devlopment';
import { production } from '../../../../environments/production';
@Injectable()
export class ConfigService{
    private config:{};
    private env:any;
    constructor(
        private http:HttpClient
        ){}
    /**
     * loads the enviornment config file ,Reads the enviornment variable
     */
    load(){
        console.log("inside load")
        if(environment.server=='devlopment')
        this.config=devlopment;
        if(environment.server=='production')
        this.config=production;
        console.log(JSON.stringify(this.config)+"inside load");
    }

    getEnv(key:any){
        return this.env[key];
    }
    get(key:any){
        return this.config[key];
    }
    getConfig(){
        return this.config;
    }
}