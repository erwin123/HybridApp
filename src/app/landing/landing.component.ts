import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BannercarouselComponent } from '../bannercarousel/bannercarousel.component'
import {MediaMatcher} from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  landingMobileQuery: MediaQueryList;
  private _landingMobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    public router: Router, public messageService:MessageService) {

      this.landingMobileQuery = media.matchMedia('(max-width: 600px)');
      this._landingMobileQueryListener = () => changeDetectorRef.detectChanges();
      this.landingMobileQuery.addListener(this._landingMobileQueryListener);

   }

  ngOnInit() {
  }

  goReferal(){
    this.sendMessage("Form Referal");
    this.router.navigate(['/referal']);
  }

  sendMessage(msg:string): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(msg);
  }
}
