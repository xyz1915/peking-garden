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
familyList=new Array();
soupList  = new Array();
chopsueyList  = new Array();
spicyList  = new Array();
seafoodList  = new Array();
eggfooyongList  = new Array();
sweetnsourList  = new Array();
poultryList  = new Array();
beefList  = new Array();
porkList  = new Array();
vegetableList  = new Array();
chefList = new Array();
beverageList = new Array();



 
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
          this.request = this._http.get('assets/json/familydinners.json').subscribe(data => {        
      this.familyList =data.json()
    })
    this.request = this._http.get('assets/json/soups.json').subscribe(data => {        
      this.soupList =data.json()
    })
    this.request = this._http.get('assets/json/chopsuey.json').subscribe(data => {        
      this.chopsueyList =data.json()
    })
    this.request = this._http.get('assets/json/hot&spicy.json').subscribe(data => {        
      this.spicyList =data.json()
    })
    this.request = this._http.get('assets/json/seafood.json').subscribe(data => {        
      this.seafoodList =data.json()
    })
    this.request = this._http.get('assets/json/eggfooyong.json').subscribe(data => {        
      this.eggfooyongList =data.json()
    })
    this.request = this._http.get('assets/json/sweetnsour.json').subscribe(data => {        
      this.sweetnsourList =data.json()
    })
    this.request = this._http.get('assets/json/poultry.json').subscribe(data => {        
      this.poultryList =data.json()
    })
    this.request = this._http.get('assets/json/beef.json').subscribe(data => {        
      this.beefList =data.json()
    })
    this.request = this._http.get('assets/json/pork.json').subscribe(data => {        
      this.porkList =data.json()
    })
    this.request = this._http.get('assets/json/vegetables.json').subscribe(data => {        
      this.vegetableList =data.json()
    })
    this.request = this._http.get('assets/json/chef.json').subscribe(data => {        
      this.chefList =data.json()
    })
    this.request = this._http.get('assets/json/pop.json').subscribe(data => {        
      this.beverageList =data.json()
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
   case "family": 
      this.foodItemList = this.familyList; 
      this.category="Family Dinners";
      break;
  case "soup": 
      this.foodItemList = this.soupList; 
      this.category="Soups";
      break;
  case "chopsuey": 
      this.foodItemList = this.chopsueyList; 
      this.category="Chop Suey (Bean Sprout)";
      break;
  case "spicy": 
      this.foodItemList = this.spicyList; 
      this.category="Hot & Spicy";
      break;
  case "seafood": 
      this.foodItemList = this.seafoodList; 
      this.category="Seafood";
      break;
  case "eggfooyong": 
      this.foodItemList = this.eggfooyongList; 
      this.category="Egg Foo Yong";
      break;
  case "sweetnsour": 
      this.foodItemList = this.sweetnsourList; 
      this.category="Sweer & Sour";
      break;
  case "poultry": 
      this.foodItemList = this.poultryList; 
      this.category="Chicken";
      break;
  case "beef": 
      this.foodItemList = this.beefList; 
      this.category="Beef";
      break;
  case "pork": 
      this.foodItemList = this.porkList; 
      this.category="Pork & SpareRibs";
      break;
  case "vegetable": 
      this.foodItemList = this.vegetableList; 
      this.category="Vegetables";
      break;
  case "chef": 
      this.foodItemList = this.chefList; 
      this.category="Chef's Suggestions";
      break;
  case "beverage": 
      this.foodItemList = this.beverageList; 
      this.category="Beverages";
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


