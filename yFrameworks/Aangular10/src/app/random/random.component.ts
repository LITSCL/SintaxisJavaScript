import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  public fecha: Date;

  constructor() { }

  ngOnInit(): void {
    this.fecha = new Date();
  }

}
