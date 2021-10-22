import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css']
})
export class FindJobComponent implements OnInit {
  public projectList!:any[];
  constructor(private authService:AuthService,private router:Router,private projectService:ProjectService) { }

  ngOnInit(): void {
    this.getAllProject();
  }
  cardClick(id:string){
    this.router.navigate(["/findjobsProjects/",id,"Details"]);
    
  }
  getAllProject(){
    this.authService.loggedUser().subscribe(
      (res:any)=>{
        if(res.status=='ok' && res.data.Role=='buyer'){
          this.router.navigateByUrl('/')
        }
        if(res.status=='ok'){
          if(res.data.Category=='none'){
            this.projectService.getAllProject().subscribe(
              (res:any)=>{
                if(res.status=='ok'){
                  this.projectList=res.data;
                }
              }
            )
          }
          else{
            let obj:any={
              category:res.data.Category
            }
            this.projectService.getProjectsOfCategory(obj).subscribe(
              (res:any)=>{
                if(res.status=='ok'){
                  this.projectList=res.data;
                }
              }
            )
          }
        }
      }
    )
  }
}
