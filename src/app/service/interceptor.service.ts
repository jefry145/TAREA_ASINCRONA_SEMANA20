import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    // console.log('Peticion interceptada');
    const Req=req.clone({
      setHeaders:{autorizacion:'12345678'}
    })
    return next.handle(Req)
  }
  constructor() { }
}