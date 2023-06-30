import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes} from '@angular/router';

//home
//contact
//about

//que componente va a manejar en la seleccion del menu
const routes: Routes=[
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'contactos',
    component: ContactComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
