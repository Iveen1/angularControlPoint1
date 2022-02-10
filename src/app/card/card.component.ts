import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-item',
  template: `
    <table>
      <tr>
        <th>Card Type</th>
        <th>Card Number</th>
        <th>Card Expiration</th>
        <th>Card Owner</th>
      </tr>
      <tr *ngFor="let item of cards">
        <td>{{item['type']}}</td>
        <td>{{item['number']}}</td>
        <td>{{item['expiration']}}</td>
        <td>{{item['owner']}}</td>
        <button (click)="removeItemFromCards(item)">Delete Item</button>
      </tr>
    </table>
  `,
  styleUrls: ["card.component.css"]
})

export class Card {
  @Input() cards: any[] = [];
  removeItemFromCards(obj: object){
    this.cards.splice(this.cards.indexOf(obj), 1);
  }
}
