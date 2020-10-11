import { ConfigService } from '../services/utilities/config.service'
export function ConfigServiceFactory(config:ConfigService){
return ()=>config.load();
}