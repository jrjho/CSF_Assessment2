import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit, OnDestroy{

  param$!:Subscription
  bundleId =""
  results = ""
  promise$!: Promise<any>;

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private uploadSvc : UploadService ) { }

  ngOnDestroy(): void {this.param$.unsubscribe();}

  ngOnInit(): void {
    this.param$ = this.activatedRoute.params.subscribe(
      async (params) => {
        this.bundleId = params['bundleId'];
        console.log("this.bundleId: ",this.bundleId);


        this.results = await this.uploadSvc.getBundle(this.bundleId);
        console.log("results: ",this.results);
      });
  }
}
