import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputUploadDetailsComponent } from './components/input-upload-details/input-upload-details.component';
import { DisplayResultsComponent } from './components/display-results/display-results.component';

const routes: Routes = [
  {path:"", component: InputUploadDetailsComponent},
  {path:'bundle/:bundleId', component: DisplayResultsComponent},

  // {path: "upload", component: UploadComponent},
  // {path: "image/:postId", component: ViewImageComponent},
  { path: "**", redirectTo: "/", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
