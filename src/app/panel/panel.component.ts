import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  @Input()
  set item(value: any) {
    if (this._item) {
      this.gain = value.buy >= this._item.buy;
    }
    value.sell = this.parsePrice(value.sell);
    value.buy = this.parsePrice(value.buy);
    this._item = value;
  }

  get item() {
    return this._item;
  }

  private _item;

  gain: boolean;

  private parsePrice(price: number) {
    return price.toString().slice(0, 7).padEnd(7, '0')
  }

}
