import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  constructor() { }
  getInteractions() {
    return [
    {Comment: "This is quite good"}
    ]
  }
}
