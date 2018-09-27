import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  inputValue: string = '';
  key: string = '';
  urlstr: string = '';

  constructor() {
  }

  ngOnInit() {

    this.urlstr = localStorage.getItem('urls')?localStorage.getItem('urls'):'';
  }

  setURL() {
    // inputValue
    localStorage.setItem(this.key, this.inputValue);

    if(! (this.urlstr === '')){
      this.urlstr += ',';
    }
    this.urlstr += this.key;
    localStorage.setItem('urls', this.urlstr);
  }


}
