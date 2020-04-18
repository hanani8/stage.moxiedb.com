import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-subs-manage',
  templateUrl: './subs-manage.component.html',
  styleUrls: ['./subs-manage.component.css']
})
export class SubsManageComponent implements OnInit {

  public search:any =  '';
  subscribers:any = [];
  private baseURL = "/api"


  subDetails: any = []
  data: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/superAdmin/subscriberOrgs', header).subscribe(subscriber => {
      this.subscribers = subscriber['data'];
    })
  }



  toUpdate(subscriber) {
    this.subDetails = subscriber;
  }


  // onDelete(subscriber){
  //   // console.log(subscriber.id)
  //   this.subscribers = this.subscribers.filter(s => s.name !== subscriber.name)
  // }


  deleteSub(_id) {
    this.data = _id
  }


  finalDelete() {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.delete(this.baseURL + '/superAdmin/subscriberOrgs/' + this.data, header).subscribe(subscriber => {
      console.log(this.data)
      this.ngOnInit()

    })
  }
}
