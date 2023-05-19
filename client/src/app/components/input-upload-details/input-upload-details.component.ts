import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { BundleId } from 'src/app/models/bundleId';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-input-upload-details',
  templateUrl: './input-upload-details.component.html',
  styleUrls: ['./input-upload-details.component.css']
})
export class InputUploadDetailsComponent implements OnInit {


  form!:FormGroup;
  selectedFile!: File;
  filePreview!: string;
  name=""
  title=""
  comments=""
  resultProm$!: Promise<BundleId>
  bundleId =''


  constructor(private fb:FormBuilder, private httpClient: HttpClient, private router : Router, private uploadSvc : UploadService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    console.log("selectedFile: ", this.selectedFile);
  }

  ngOnInit(): void {
      this.form = this.createForm();
  }

  private createForm():FormGroup{
    return this.form = this.fb.group({
      name : this.fb.control<string>('', Validators.required),
      title: this.fb.control<string>('', Validators.required),
      comments : this.fb.control<string>(''),
      file: this.fb.control('')
    })
  }

  async upload(){
    console.log(this.form.value);
    console.log("file: ",this.form.value.file);
    this.name=this.form.value.name;
    this.title=this.form.value.title;
    this.comments=this.form.value.comments;
    console.log("name: ",this.name);
    // this.resultProm$ = lastValueFrom( this.uploadSvc.upload(this.name,this.title,this.comments,this.selectedFile));

    const bundleId = await this.uploadSvc.upload(this.name,this.title,this.comments,this.selectedFile);

    // this.bundleId = this.resultProm$['bundleId'];
    // console.log("resultProm: ",this.resultProm$);
    // this.resultProm$.then((v: BundleId) => {
    //   (data:any) => {
    //     this.bundleId = data['bundleId'];
    //   }
    // });

    console.log("bundleId: ",bundleId);
    this.router.navigate(['/bundle', bundleId['bundleId']]);
    this.form.reset();

  }
  

  goBack(){
    this.form.reset();
    this.router.navigate(['/']);
  }
}
