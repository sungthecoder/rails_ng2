import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared/widgets.service'

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  constructor (private widgetsService: WidgetsService) {}

  widgets = []

  ngOnInit() {
    this.widgetsService.getWidgets().
      subscribe(widgets => this.widgets = widgets)
  }

}
