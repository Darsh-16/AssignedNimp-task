import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Options } from '@angular-slider/ngx-slider';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { UserModel } from './user.model';
import { ApiService } from '../Shared/api.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomepageComponent implements OnInit {

  formValue !:FormGroup;
  userModelObj:UserModel=new UserModel();
  
  fileToUpload: any;
  imageUrl: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private formbuilder:FormBuilder , private api:ApiService) { 
    config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit() {

    this.formValue=this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      pnumber:[''],
      age:[''],
      state:[''],
      country:[''],
      address:[''],
      tags:[''],
      newsletter:[''],
      image:[]

    })

  }

  open(content:any) {
		this.modalService.open(content);
	}

  value: number = 20;
  options: Options = {
    floor: 20,
    ceil: 60
  };



  postuserdetails(){
    this.userModelObj.firstName=this.formValue.value.firstName;
    this.userModelObj.lastName=this.formValue.value.lastName;
    this.userModelObj.email=this.formValue.value.email;
    this.userModelObj.pnumber=this.formValue.value.pnumber;
    this.userModelObj.age=this.formValue.value.age;
    this.userModelObj.state=this.formValue.value.state;
    this.userModelObj.country=this.formValue.value.country;
    this.userModelObj.address=this.formValue.value.address;
    this.userModelObj.tags=this.formValue.value.tags;
    this.userModelObj.newsletter=this.formValue.value.newsletter;
    this.userModelObj.image=this.formValue.value.image;

    this.api.postuser(this.userModelObj)
    .subscribe((res)=> {
        console.log(res);
        alert("User Added SuccessFully.. ");
    },
    ()=>{
      alert("Something went Wrong");
    })
}



  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }




}


