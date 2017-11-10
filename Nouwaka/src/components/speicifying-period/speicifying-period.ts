import { Component,ViewChild } from '@angular/core';
import { Calendar } from '@ionic-native/calendar';
import { NavController } from 'ionic-angular';
// import { DatePicker } from '@ionic-native/date-picker';
 import { DatePickerDirective } from 'ion-datepicker';
import { DatePicker } from 'ionic2-date-picker';
import { DatePickerOption } from 'ionic2-date-picker';
//import { DatePickerOption } from 'ionic2-date-picker';
/**
 * Generated class for the SpeicifyingPeriodComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'speicifying-period',
  templateUrl: 'speicifying-period.html',
 // providers:[DatePickerDirective],
  providers: [ DatePicker ]
})
export class SpeicifyingPeriodComponent {
  modalCtrl:any;
  viewController:any;
  // @ViewChild(DatePickerDirective) public datepicker: DatePickerDirective;
  // public localDate: Date = new Date();
  // public initDate: Date = new Date();
  // public initDate2: Date = new Date(2015, 1, 1);
  // public disabledDates: Date[] = [new Date(2017, 7, 14)];
  // public localeString = {
  //   monday: true,
  //   weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  //   months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  // };
  // public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));
  // public min: Date = new Date()
  // text: string;

  constructor(public navCtrl: NavController, public datePicker: DatePicker) {
   // this.datePicker = new DatePicker(<any>this.modalCtrl, <any>this.viewController);
   // this.datePicker.onDateSelected.subscribe((date) => { console.log(date); });

  }
  showCalendar() {
  
    
    let datePickerOption: DatePickerOption = {
       minimumDate: new Date('1/1/2017')
         // the minimum date selectable
}; 
    this.datePicker.showCalendar(datePickerOption);
  }
  // openCalendar() {
  //   this.datePicker.show({
  //     date: new Date(),
  //     mode: 'date',
  //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  //   }).then(
  //     date => console.log('Got date: ', date),
  //     err => console.log('Error occurred while getting date: ', err)
  //     );
  // }
  // public ngOnInit() {
    
  //     }
  //     public Log(stuff): void {
  //       this.datepicker.open();
  //       this.datepicker.changed.subscribe(() => console.log('test'));
  //       console.log(stuff);
  //     }
    
  //     public event(data: Date): void {
  //       this.localDate = data;
  //     }
  //     setDate(date: Date) {
  //       console.log(date);
  //       this.initDate = date;
  //     }
}
