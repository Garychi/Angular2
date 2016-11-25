/**
 * Created by Mos on 2016/10/12.
 */
import {Inject} from "@angular/core";



@Inject
export class DataAccessServicsse{

    getMockData(): string{

        return 'this is mock data';
    }
}