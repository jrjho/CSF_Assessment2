import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription, catchError, lastValueFrom, map } from 'rxjs';
import { BundleId } from '../models/bundleId';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  RAILWAY_URL_UPLOAD = "https://kingly-achiever-production.up.railway.app/upload"
  RAILWAY_URL_GETBUNDLE = "https://kingly-achiever-production.up.railway.app/bundle/"
  LOCAL_URL_UPLOAD = "http://localhost:8080/upload"
  LOCAL_URL_GETBUNDLE = "http://localhost:8080/bundle/"
  private headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8");


  fileData = ""

  sub$!:Subscription

  constructor(private httpClient: HttpClient) { }

  getBundle(bundleId:string):Promise<any>{
    return lastValueFrom(this.httpClient.get(this.LOCAL_URL_GETBUNDLE + bundleId , {headers: this.headers}));


    // return lastValueFrom(this.httpClient.get(this.LOCAL_URL_GETBUNDLE + bundleId , {headers: this.headers}));
  }

  upload(name:string, title:string, comments:string, file: File):Promise<any>{
    const formData = new FormData();
    formData.set("name", name);
    formData.set("title", title);
    formData.set("comments", comments);
    formData.set("file", file);
    console.log("formData: ", formData.getAll("name"));
    return lastValueFrom(this.httpClient.post(this.LOCAL_URL_UPLOAD, formData));





    // this.sub$ = this.httpClient.post(this.LOCAL_URL, formData).subscribe({
    //   next: data => {console.log("data is: ",data)},
    //   error: error => {alert('Error: ' + error.message)},
    //   complete: () => {this.sub$,unsubscribe()}
    // }
    // );




    // return this.httpClient.post(this.LOCAL_URL, formData).pipe(
    //   catchError(this.handleError)
    // ).toPromise();




    // return this.httpClient.post(this.LOCAL_URL, formData);


    // return this.httpClient.post(this.LOCAL_URL, formData).pipe(
    //   map((v: any) => {
    //     // return {bundleId: v['bundleId']} as BundleId;
    //     return {bundleId: v['bundleId']} as BundleId;

    //   }
    // )
    // );



    
  }



}
