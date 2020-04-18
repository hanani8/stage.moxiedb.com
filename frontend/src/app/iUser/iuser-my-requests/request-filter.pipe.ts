import { PipeTransform, Pipe } from '@angular/core';
import { request } from 'src/app/model/request';


@Pipe({
    name: 'requestFilter'
})

export class RequestFilterPipe implements PipeTransform {
    transform(requests: request[], searchTerm: string): request[]{
        if(!requests || !searchTerm){
            return requests;
        }

        return requests.filter(req => 
            req.vendorOrg.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    }
}
