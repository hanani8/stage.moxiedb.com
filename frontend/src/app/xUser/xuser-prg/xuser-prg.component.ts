import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'
import { request } from 'src/app/model/request';
import { XrequestsService } from 'src/app/services/xrequests.service';
import { Interaction } from 'src/app/model/interaction';
import { InteractionsService } from 'src/app/services/interactions.service';
import { HttpClient, HttpResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { UploadDocService } from 'src/app/services/upload-doc.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-xuser-prg',
	templateUrl: './xuser-prg.component.html',
	styleUrls:['./xuser-prg.component.css']
})

export class XuserPrgComponent implements OnInit {
  myFormDocument: FormGroup;
  myFormComment: FormGroup;
  request: request;
  interactions: Interaction;
  step = 0;
  disabled = false;
  status = 0;
  requestStatus;
  requestID:any = '';
  private baseURL = `/api/xrequest/${this.requestID}`;
  private baseStatusURL = `/api/xrequest/requestStatus/${this.requestID}`;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  downloadURL;

  constructor(private fb: FormBuilder, private xrequestsService: XrequestsService, private interactionsService: InteractionsService, private http: HttpClient, private uploadDocService: UploadDocService, private router:Router) { }

  token = window.localStorage.getItem('tokenID')
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };


  ngOnInit() {
  this.requestID = (this.router.url).substring(11);
  console.log(this.baseURL);
    this.xrequestsService.getRequests(this.requestID).subscribe(data => {
      this.request = data;
      this.requestStatus = data.requestStatus;
      console.log(this.request);
      return this.request
    },(error) => {
    console.error(error)
    });

    this.xrequestsService.getComments(this.requestID).subscribe(data => {
      this.interactions = data;
      console.log(this.interactions);
      return this.interactions
    },(error) => {
    console.error(error)
    });


    this.myFormComment = this.fb.group({
      Comment: [null, Validators.required]
    });
    this.myFormDocument = this.fb.group({
      file: [null, Validators.required]
    })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.item(0));
    this.currentFileUpload = this.selectedFiles.item(0);
  }

  get Comment() {
    return this.myFormComment.get('Comment');
  }

  addComment() {
    console.log(this.myFormComment.value);
    this.disabled = true;
    this.nextStep();
    this.requestStatus = "Pending";
    this.http.post(this.baseURL, this.myFormComment.value, this.header).subscribe();
    this.childAddComment();
  }

  childAddComment() {
    this.requestStatus = "Pending";
    this.http.post(this.baseStatusURL, { requestStatus: this.requestStatus }, this.header).subscribe()
  }

  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++
  }

  prevStep() {
    this.step--
  }

  closeRequest() {
    this.disabled = true;
    this.nextStep();
    // this.interactions.push({Comment: "Request is closed"});
    this.http.post(this.baseURL, { Comment: "Request is Closed" }, this.header).subscribe();
    this.requestStatus = "Closed";
    this.childCloseRequest();
  }

  childCloseRequest() {
    this.requestStatus = "Closed";
    this.http.post(this.baseStatusURL, { requestStatus: this.requestStatus }, this.header).subscribe();
  }

  reOpenRequest() {
    this.http.post(this.baseURL, { Comment: "Request is Re-Opened" }, this.header).subscribe();
    this.childReOpenRequest();
  }

  childReOpenRequest() {
    this.requestStatus = "Pending";
    this.http.post(this.baseStatusURL, { requestStatus: this.requestStatus }, this.header).subscribe();
  }


  setColor() {
    if (this.requestStatus == "Closed") {
      return {
        btn: true,
        setStatus: true,
        'btn-success': true
      }
    }
    else if (this.requestStatus == "Pending") {
      return {
        btn: true,
        setStatus: true,
        'btn-warning': true
      }
    }
    else {
      return {
        btn: true,
        setStatus: true,
        'btn-danger': true
      }
    }
  }

  uploadDoc() {
    const file = this.selectedFiles.item(0);
    this.uploadDocService.uploadFile(file);
    this.http.post(this.baseURL, { Comment: `Document ${file.name} is Uploaded` }, this.header).subscribe();
    this.http.post(this.baseURL + '/upload', {File:`${file.name}`}, this.header).subscribe(data => {console.log(data)})
  }

  downloadDoc(id) {
    this.uploadDocService.downloadFile(id).subscribe(data => {
      this.downloadURL = data;
      console.log(data);
      console.log(id);
    })
  }
}

