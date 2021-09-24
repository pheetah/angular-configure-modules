import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Aconfig{
  public config:string = "no config";
}


@Injectable({
  providedIn: 'root'
})
export class AservService {

  public config:Aconfig;

  constructor(
    private confClass: Aconfig
  ){
    this.config = this.confClass;
  }


}