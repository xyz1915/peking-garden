import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})


export class VideoDetailComponent implements OnInit {

  private routeSub:any;
  private req : any;
  video:any;
  slug:string;
  constructor( private route: ActivatedRoute, private _http: Http) { 
    //this.slug = route.snapshot.params['slug']
  }

  ngOnInit() {
    this.slug = this.route.snapshot.params['slug']
    // this.routeSub = this.route.params.subscribe(params => {
    //   console.log(params);
    //   this.slug = params['slug'];
    // })
  }

  //   this._http.get('assets/json/videos.json').subscribe(data => {
  //     data.json().filter(item=>{
  //       if (item.slug == this.slug){
  //           this.video = item
  //       }
  //     })

  //   })
    
  // }

//   ngDestroy(){
//     this.routeSub.unsubscribe();
//   }

 }
