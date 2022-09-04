import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { FooterContactUsComponent } from './shared/footer-contact-us/footer-contact-us.component';
import { SearchCarComponent } from './pages/search-car/search-car.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterContactUsComponent,
    SearchCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
