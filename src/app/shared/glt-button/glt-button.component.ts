import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'glt-button',
  templateUrl: './glt-button.component.html',
  styleUrls: ['./glt-button.component.scss']
})
export class GltButtonComponent implements OnInit {

  constructor() { }

  @Input('btn-text') text: string = "";

  ngOnInit(): void {
  }

}
