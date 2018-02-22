import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TermComponent } from './term/term.component';
import { SimulateComponent } from './simulate/simulate.component';
import { OrderComponent } from './order/order.component';
import { InfoComponent } from './info/info.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';
import { ShareComponent } from './share/share.component';
import { ReferalComponent } from './referal/referal.component';
import { LandingComponent } from './landing/landing.component';
import { AuthguardService }  from './service/authguard.service';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent, canActivate: [AuthguardService],
      children: [
        { path: 'term', component: TermComponent},
        { path: 'info', component: InfoComponent},
        { path: 'simulate', component: SimulateComponent},
        { path: 'order', component: OrderComponent},
        { path: 'setting', component: SettingComponent},
        { path: 'about', component: AboutComponent},
        { path: 'share', component: ShareComponent},
        { path: 'referal', component: ReferalComponent},
        { path: 'landing', component: LandingComponent}
      ]},
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}