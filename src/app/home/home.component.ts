import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AuthdataService } from '../service/authdata.service';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MessageService } from '../service/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  @ViewChild('snav') snav: MatSidenav;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  currentPage : string;
  subscription: Subscription;

  constructor(private authenticationservice:AuthdataService,public router: Router,public messageService:MessageService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      this.subscription = this.messageService.getMessage().subscribe(message => { this.currentPage = message.text; });

   }

  ngOnInit() {
    this.currentPage = "Beranda";
    this.router.navigate(['/landing']);
    if(!this.mobileQuery.matches)
    {
      this.snav.open();
    }
  }

  menuClick(title:string){
    this.currentPage = title;
    if(!this.mobileQuery.matches)
    {
      this.snav.open();
    }else
    {
      this.snav.toggle();
    }
  }

  goReferal(){
    this.currentPage = "Form Referal";
    this.router.navigate(['/referal']);
  }

  logout() {
    this.authenticationservice.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe();
  }
}