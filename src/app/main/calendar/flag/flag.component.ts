import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {

  flag='../../../../assets/images/flags/portugal.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
