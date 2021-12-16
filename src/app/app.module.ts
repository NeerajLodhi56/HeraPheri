import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactorModule } from './charactor/charactor.module';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';
import { NewChildComponent } from './new-child/new-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChildComponent,
    NewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CharactorModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
