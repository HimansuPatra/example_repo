import {NgModule,ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HttpClientModule,HttpClient,HTTP_INTERCEPTORS} from '@angular/common/http'
import { EchoHttpClient } from './services/http/echohttpclient.service'
import { echoHttpClientCreation } from './factory/echohttpclient.factory'
import {StorageService } from './services/utilities/storage.service'
import {ConfigService} from './services/utilities/config.service'
import { TokenInterceptorservice } from './interceptor/tokeninterceptor.service'

@NgModule({
    imports:[CommonModule,HttpClientModule]
})
export class CoreModule{
    static forRoot():ModuleWithProviders<CoreModule>{
        return {
            ngModule:CoreModule,          
            providers:[
                ConfigService,
                StorageService,
                {
                    provide:HTTP_INTERCEPTORS,
                    useClass:TokenInterceptorservice,
                    multi:true
                },
                {
                    provide:EchoHttpClient,
                    useFactory:echoHttpClientCreation,
                    deps:[HttpClient,ConfigService]
                }
            ]
        }
    }
}