import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TransTComponent } from './trans-t/trans-t.component';
import { TransFComponent } from './trans-f/trans-f.component';
import { TransSComponent } from './trans-s/trans-s.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Auth/auth.guard';
import { LoginAuthService } from './service/login-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideNavComponent,
    CarouselComponent,
    TransTComponent,
    TransFComponent,
    TransSComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [AuthGuard,LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
