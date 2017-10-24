import { Component, OnInit, OnDestroy } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {DomSanitizer, BrowserModule} from '@angular/platform-browser';
import {DataService} from '../data.service'
import 'rxjs/add/operator/map';

interface FoodArrayList {
  food_id: number;
  food_name: string;
  category: string;
  Details: string;
  price:number;
}



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnDestroy {

private request:any;
test="Hell0"
allergies="Please inform us of any food allergies when ordering."
change="Price subject to change without notice."
reference="This Price Checker is for reference purpose only, please call 416-284-2020 to place an order with us."

indexI =0
priceCheckerList= new Array();
total =0.00
foodItemList=new Array();

noodleList = new Array();
appetizerList=new Array();
riceList=new Array();
comboList=new Array();

 
category="Appetizers";
 //shows default appetezers when the menu page initially loaded
 


  constructor(private _http:Http, private service : DataService ) { }

  ngOnInit() {
    this.request = this.service.getData().subscribe(data =>{
      this.appetizerList =data
      this.foodItemList=this.appetizerList
    })
    
  //   this._http.get('assets/json/appetizers.json').subscribe(data => {
  //     this.appetizerList =data.json() 
  //     this.foodItemList=this.appetizerList
           
  //  } )
      this.request = this._http.get('assets/json/rices.json').subscribe(data => {   
      this.riceList =data.json()      
    })
      this.request = this._http.get('assets/json/noodles.json').subscribe(data => {        
      this.noodleList =data.json()
    })
          this.request = this._http.get('assets/json/combos.json').subscribe(data => {        
      this.comboList =data.json()
    })
          
  }

  ngOnDestroy(){
    this.request.unsubscribe()

  }

  getList(str){

  switch(str) { 

    case "appetizer": 
      this.foodItemList = this.appetizerList; 
      this.category="Appetizers";
      break; 
    
   case "rice": 
      this.foodItemList = this.riceList; 
      this.category="Rice";
      break; 
   
   case "noodle": 
      this.foodItemList = this.noodleList; 
      this.category="Noodles";
      break; 
   case "combo": 
      this.foodItemList = this.comboList; 
      this.category="Combo For One";
      break;
   default:  
     this.foodItemList = this.appetizerList; 
     this.category="Appetizers";
      break; 
   
  }
}

  getSubTotal(){
    this.total=0.00
    this.priceCheckerList.forEach(element => {
      this.total = this.total + (element.quantity * element.price)
       
      
    
    });
     //console.log(this.total)
      return this.total
  }
    getTax(){
      return this.total *0.13
    }
       getTotalAmount(){
      return this.total *1.13
    }

  add(item:any){
   // console.log(item.food_name)
    
      
     // if item not in priceCheckerList yet then add to the list
       if (this.priceCheckerList.filter(checkerObj =>checkerObj.name ===item.food_name).length ==0){
        this.priceCheckerList.push({"name": item.food_name, "quantity": 1, "price": item.price})
       }
      else{
        //Item already in priceCheckerList, increase the quantity
        this.priceCheckerList.filter(checkerObj => {if (checkerObj.name ===item.food_name) checkerObj.quantity++})
      }
 
    //console.log(this.priceCheckerList)
  //   if(this.priceCheckerList.find(x => x.name === "item.food_name")){
  //     console.log("item already in array")
  //   }
  //   else{
  //   
  // }
  //this.total=0
   // this.getTotalAmount()
  }

  remove(item:any, i: number){
      this.priceCheckerList[i].quantity=0
      //this.total=0.00
      //this.getTotalAmount()
  }

  plus(item:any, i: number){
    this.priceCheckerList[i].quantity++
    //this.total=0.00
   // this.getTotalAmount()

  }
  minus(item:any, i: number){
     this.priceCheckerList[i].quantity--
    // this.total=0.00
    // this.getTotalAmount()
  }
}


