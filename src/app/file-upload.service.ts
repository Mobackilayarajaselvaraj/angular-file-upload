import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  // API url
  baseApiUrl = 'https://54.208.4.29:8000/user/update-user-picture/';

  
  constructor(private http: HttpClient) {}

  // Returns an observable
  upload(file): Observable<any> {

    const headers = new HttpHeaders()
  .set('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwiZXhwIjoxNjU5MzU2NzU3LCJpYXQiOjE2NTkzNTMxNTcsInBhaWQiOnRydWV9.h9Wi87wH2gzUSfX8Dn9_Vq3JC4hMldJDK-6wDjd9fSs')
  
    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData,{ headers: headers });
  }
}
