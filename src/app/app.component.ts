import { DataService } from './service/data.service';
import { Component } from '@angular/core';
import { Panel } from './model/panel.model';
import { range } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: Panel[] = [];

  dataRange: number[] = range(6);

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getData().subscribe(panelData => {
      panelData.forEach((item, key) => {
        this.data[key] = panelData[key];
      })
    });
    console.log(this.data);
  }
}
