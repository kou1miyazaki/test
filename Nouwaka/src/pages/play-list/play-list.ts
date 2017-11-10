import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentsCommentaryPage } from '../contents-commentary/contents-commentary';
import { TabsPage } from '../tabs/tabs';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Events } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ContentsSortingOrderPopoverComponent } from './../../components/contents-sorting-order-popover/contents-sorting-order-popover';
import { FilterBySeriesPopoverComponent } from './../../components/filter-by-series-popover/filter-by-series-popover';
import { FilterByYamatoLanguageTagPopoverComponent } from './../../components/filter-by-yamato-language-tag-popover/filter-by-yamato-language-tag-popover';

import { AuthHttp, AuthConfig,JwtHelper } from 'angular2-jwt';
// import { PlayListModel } from './model';
// import { AuthRequestor } from './api';
import 'rxjs/add/operator/map';
/**
 * Generated class for the PlayListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-play-list',
  templateUrl: 'play-list.html',
  
})
export class PlayListPage {
 
  playList:any = 
 {
    CKReleaseFlg: 0,
   C2ReleaseFlg: 0,
   RDReleaseFlg: 0,
   CategoryId: 0,
   ContentCode: "",
   ContentName: "",
   Count: "",
   Created: new Date(1/1/2017),
   ExecutionsCount: 0,
   FileUrl: "",
   Id: 0,
   Level: 0,
   Modified: new Date(1/1/2017),
   People: 0,
   SeriesId: 0,
   Style: 0,
   Time: 0,
   contenstags: "",
 };
 sortId:any;
 arrayTemp:any;
 items : any;
 series : any;
  agreementId:any;
 public imgList:any;
  tabPage: any;
  labelTag1:string;
  labelSeries:string;
 idTag1:any;
 idSeries:any;
 idSort:any;
 labelIdSort:any;
  callEvent: Events;
  public jwtHelper: JwtHelper = new JwtHelper();
  arraySearch:any;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado']
  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController, private http: Http, public navParams: NavParams, public popoverCtrl: PopoverController, public events: Events) {
    this.tabPage = TabsPage;
    this.callEvent = events;
  
    this.nativeStorage.getItem('token').then(
    data => {
      if (data) {
        let headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
     /* hard code */    "Authorization": data,
      });

      let options = new RequestOptions({
          headers: headers
      });
this.http.get("http://nouwaka-api01k.azurewebsites.net/api/tags",options).map(res => res.json()).subscribe(data => { 
     this.items = data.items;
});
this.http.get("http://nouwaka-api01k.azurewebsites.net/api/series",options).map(res => res.json()).subscribe(data => { 
     this.series = data.items;
});
      } else {
        console.log('2');
      }
    },error =>{
      console.log('err'+error);
    } 
  );
     
  this.loadContent("","",1);
  }


  //load list content
 loadContent(TagId:any,Serries:any,idSort:any){
  
  this.nativeStorage.getItem('token').then(
    data => {
      if (data) {
        let headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
         "Authorization": data,
      });
      
      let options = new RequestOptions({
          headers: headers
      });
        this.agreementId = this.jwtHelper.decodeToken(data);
        console.log("agreementId:" +this.agreementId.RepresentativeFlg);
        if(this.idSeries == null){
          Serries = ""
          this.labelSeries = "サウンドパネル"
       }
       
        if(this.idTag1 == null){
        
        TagId = ""
        this.labelTag1 = "かなでる"
       }
        if (this.idSort == null){
         idSort = 1
         this.labelIdSort = "新着順"
       }
        this.http.get("http://nouwaka-api01k.azurewebsites.net/api/contens?SortId="+idSort+"&RepresentativeFlg="+  this.agreementId.RepresentativeFlg +"&SeriesId="+Serries +"&TagId="+TagId+"",options).map(res => res.json()).subscribe(data => { 
             this.imgList = data.item;
             this.arraySearch = this.imgList;
        });
      } else {
        console.log('2');
      }
    },error =>{
      console.log('err'+error);
     
    } 
  );
 
  
  

 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayListPage');
  }

  presentPopoverUserSortingOrder(ev) {
    let popover = this.popoverCtrl.create(ContentsSortingOrderPopoverComponent, { cssClass: 'custom-userSortContent-popover' });
    popover.present({
      ev: ev
    });
    popover.onDidDismiss(data => {
      this.labelIdSort = data; 
      this.idSort = data  
    this.loadContent(this.idTag1,this.idSeries,this.idSort)
  });
  }

  presentPopoverFilterBySeries(ev) {
    let popover = this.popoverCtrl.create(FilterBySeriesPopoverComponent, {cbb:this.series},{ cssClass: 'custom-seiresFilter-popover' });
    popover.present({
      ev: ev
    });
    popover.onDidDismiss(data => {
      this.labelSeries = data.SeriesName;
      this.idSeries = data.Id
    this.loadContent(this.idTag1,this.idSeries,this.idSort)
  });
  }

  presentPopoverFilterByLanguage(ev) {
    let popover = this.popoverCtrl.create(FilterByYamatoLanguageTagPopoverComponent, {cba:this.items},{ cssClass: 'custom-languageFilter-popover' });
    popover.present({
      ev: ev
    });
    popover.onDidDismiss(data => {
      this.labelTag1 = data.Tag1;
      this.idTag1 = data.Id
    this.loadContent(this.idTag1,this.idSeries,this.idSort)
  });
  }

  contentsCommentaryPage() {
    this.callEvent.publish('changeContentsCommentaryIntoRootPage');
  }
 
   onSelectChange(selectedValue: any) {
    console.log('Selected', selectedValue);
  }
  onContentChange(selectedValue: any) {
    console.log('Selected', selectedValue);
  }



  getItems(ev: any) {
    let val = ev.target.value;
  
    console.log(this.imgList);
    if (val && val.trim() != '') {
      this.arraySearch = this.imgList.filter((item) => {
        return (item.ContentName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.arraySearch = this.imgList;
    }
  }
}
