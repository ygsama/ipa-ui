import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-json',
  template:`{{json}}`,
  styleUrls: []
})
export class JsonComponent implements OnInit {

  json:string='';
  constructor(private acRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.acRouter.snapshot.params['id'];
    console.log(id);
    let urls = localStorage.getItem('urls');
    urls.split(',').forEach(url=>{
      console.log(url)
      if(url===id){
        this.json = localStorage.getItem(url);
      }
    })
  }




}
