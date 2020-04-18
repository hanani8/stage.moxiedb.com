import { Injectable } from '@angular/core';
// import { Supplier } from '../model/Supplier'

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor() { }

  getSuppliers() {
    return [
      {
        id: 1,
        roleName: "Admin",
        organizationName: "Pfizer",
        activeStatus: "Always Active"
      },
      {
        id: 2,
        roleName: "Internal User",
        organizationName: "Bayer",
        activeStatus: "Always Active"
      },
      {
        id: 3,
        roleName: "External User",
        organizationName: "Kotne",
        activeStatus: "Always Active"
      },
      {
        id: 4,
        roleName: "Admin",
        organizationName: "Roche",
        activeStatus: "Always Active"
      },
      {
        id: 5,
        roleName: "External User",
        organizationName: "Novartis",
        activeStatus: "Always Active"
      },
    ]
  }
}
