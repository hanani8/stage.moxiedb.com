import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts (){
    return [
      {
        id: 1,
        productType: 'Intermediate',
        productName: 'Cyclopropane, Dicarboxylic Acid',
        CASNumber: '546-230-2',
        therapeuticCategory: 'Functional Dyspepsia',
        dosageForm: 'qwerty',
        ndc: 'string'
      },
      {
        id: 2,
        productType: 'Advance',
        productName: '4-Bromophenyl Methyl Sulfone',
        CASNumber: '546-230-2',
        therapeuticCategory: 'Antiretroviral',
        dosageForm: 'string',
        ndc: 'string'
      },
      {
        id: 3,
        productType: 'API',
        productName: '4-Chlorobutyryl Chloride (4-CBC)',
        CASNumber: '546-230-2',
        therapeuticCategory: 'Cancer',
        dosageForm: 'string',
        ndc: 'string'
      },
    ]
  }
}
