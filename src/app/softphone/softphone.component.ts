import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-softphone',
  templateUrl: './softphone.component.html',
  styleUrls: ['./softphone.component.css']
})
export class SoftphoneComponent implements OnInit {

  numeroTelefonico = 'hola';

  constructor() { }

  ngOnInit() {
  }

}
