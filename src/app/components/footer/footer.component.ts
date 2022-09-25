import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() { }
  date = this.dateNow();
  ngOnInit(): void {
    this.dateNow();
  }

  dateNow() {
    return Date.now();
  }

}
