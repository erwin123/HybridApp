import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthdataService } from '../service/authdata.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { AppModule } from '../app.module';
import { Account } from '../models/account';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthdataService]
})

 
export class LoginComponent implements OnInit {
    account : Account = new Account();
    loading = false;
    message = "";
    returnUrl: string;
    constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private authenticationservice:AuthdataService,    
      public router: Router
    )
    {
    }
    ngOnInit() {
      if (localStorage.getItem('currentUser') ) {
          this.router.navigate(['/']);
      }
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      
    }

    login(){
      this.loading = true;
      this.authenticationservice.login(this.account.username, this.account.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
            this.message="Ops,invalid username or password";
            this.loading = false;
            setTimeout(()=>{
              this.message = "";
            },5000);
        });
    }
}

