import { Component } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  student:Register=new Register();
  loginform!:FormGroup
constructor(private service:RegisterService,private form:FormBuilder){
  this.loginform=this.form.group({
    name:[',',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]],
    email:[',',[ Validators.required,Validators.email]],
   phone:[',',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
   password:[',',[Validators.required,Validators.maxLength(10),Validators.minLength(4),Validators.pattern('/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g')]],
  })
}
ngOnInt():void{}
submit():void{
  this.service.onsubmit(this.student).subscribe(
    response=>{
      console.log("successfully registered",response); 
    },
    error=>{
      console.error("registered failed",error);
    
    }
    
  )

}
}


