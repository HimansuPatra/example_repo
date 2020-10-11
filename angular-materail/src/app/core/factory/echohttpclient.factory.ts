import { EchoHttpClient } from '../services/http/echohttpclient.service'
import { HttpClient } from '@angular/common/http'
export function echoHttpClientCreation(http:HttpClient){
 return new EchoHttpClient(http);
}