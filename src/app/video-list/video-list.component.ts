import { Component, OnInit, OnDestroy } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Http} from '@angular/http';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit , OnDestroy {

  title = "video List";
  someItem = "Hi there!";

  videoList : [any];
  // videoList = [
  //   {
  //     name: "Item 1",
  //     slug: "item-1",
  //     embed:`1Jw1mdF2NWk`,
  //   },
  //   {
  //     name: "Item 2",
  //     slug: "item-2",
  //     embed:`D9gJ5CWhTtU`,
  //   },
  //   {
  //     name: "Item 3",
  //     slug: "item-3",
  //     embed: null
  //     //embed: `_6VS2cQeTBk`,
  //   }
  // ];

  private req : any; //request
  constructor(private _http:Http) { }

  ngOnInit() {
    this.req= this._http.get('assets/json/videos.json').subscribe(data =>{
      console.log(data.json())
      this.videoList = data.json()
    })
  }

  getEmbedUrl(item){
    //console.log(item.embed);
    return 'https://www.youtube.com/embed/'+item.embed ;
  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

}
