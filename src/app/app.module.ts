import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterceptorService } from './service/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginacionPipe } from './pipes/paginacion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaginacionPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    
  ],
  providers: [ {provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService, 
    multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
