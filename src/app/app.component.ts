import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <card-item [cards]="response"></card-item>
  `
})

export class AppComponent {
  response: any[] = [];
  constructor(private http: HttpClient){}


  ngOnInit(){
    // @ts-ignore
    return this.http.get('https://fakerapi.it/api/v1/credit_cards?_quantity=10').subscribe(val => val['data'].forEach((item) => this.response.push(item)));
  }
}
