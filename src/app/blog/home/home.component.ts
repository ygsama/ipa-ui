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

  data = [
    {'title':'Racing car sprays burning fuel into crowd.','time':'2018-01-01 18:36:20','id':'123'},
    {'title':'Japanese princess to wed commoner.','time':'2018-01-01 18:36:20','id':'1234'},
    {'title':'Australian walks 100km after outback crash.','time':'2018-01-01 18:36:20','id':'1243'},
    {'title':'Man charged over missing wedding girl.','time':'2018-01-01 18:36:20','id':'1423'},
    {'title':'Los Angeles battles huge wildfires.','time':'2018-01-01 18:36:20','id':'1235'},
    {'title':'Racing car sprays burning fuel into crowd.','time':'2018-01-01 18:36:20','id':'4123'}
  ];
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


  index = 0;
  tabs = [ 'Tab 1', 'Tab 2' ];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.index = this.tabs.length - 1;
  }


}
