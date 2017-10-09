import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

homeImageList = [
  {image: "assets/images/nature/ccm.jpg", title: "Cantonese Chow Mein"},
  {image: "assets/images/nature/gtc.jpg", title: "General Tso's Chicken"},
  {image: "assets/images/nature/shn.jpg", title: "Shang Hai Noodle aa"},
  {image: "assets/images/nature/cb.jpg", title: "Sweet & Sour Chicken Ball"},
   {image: "assets/images/nature/lc.jpg", title: "Lemon Chicken"},
    {image: "assets/images/nature/bbqr.jpg", title: "BBQ Spare Ribs"},
]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  preventNormal(event:MouseEvent, image:any){
    if (!image.aaa){
        event.preventDefault()
      //  console.log(image.prevented)
       // image.setAttribute("href","/videos")
      // image.link = "/videos"
      //  image.aaa = true
       // console.log(image.prevented)
       this.router.navigate(['./videos'])
       
    }


    //alert("Working")
  }
}
