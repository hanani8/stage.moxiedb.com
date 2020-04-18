import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadDocService {

  constructor(private http: HttpClient) { }

uploadFile(file) {




    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIA4SAVCJANYHGMDTPZ',
              secretAccessKey: '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',
              region: 'us-east-2'
          }
      );
      const params = {
          Bucket: 'document-upload-tryout',
          Key: file.name,
          Body: file,
          ACL: 'private',
          ContentType: 'binary/octet-stream',
          ContentDisposition: 'attachment'
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
};



downloadFile(id) :Observable<any>{

return this.http.get<any>(`/api/docURL/${id}`);
 }
}