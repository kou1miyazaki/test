import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular-calendar';
import { Calendar } from '@ionic-native/calendar';
//import { DatePicker } from '@ionic-native/date-picker';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera } from '@ionic-native/camera';
//import { DatePickerModule } from 'ion-datepicker';
import { DatePicker } from 'ionic2-date-picker';

import { SpeicifyingPeriodComponent } from './../components/speicifying-period/speicifying-period';
import { RegisterUserComponent } from '../components/Register-User/Register-User';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatModePage } from '../pages/chat-mode/chat-mode';
import { SettingPage } from '../pages/setting/setting';
import { PlayListPage } from '../pages/play-list/play-list';
import { UserListPage } from '../pages/user-list/user-list';
import { WalkThroughPage } from '../pages/walkthrough/walkthrough';
import { UserDetailPage } from '../pages/user-detail/user-detail';

import { ContentsCommentaryPage } from '../pages/contents-commentary/contents-commentary';
import { PlayingContentPage } from '../pages/playing-content/playing-content';
import { NoAhPlayingPage } from '../pages/no-ah-playing/no-ah-playing';

import { AuthRequestor } from './../pages/login/auth_requestor';
import { StaffPopoverComponent } from './../components/staff-popover/staff-popover';
import { UserSortingOrderPopoverComponent } from './../components/user-sorting-order-popover/user-sorting-order-popover';
import { FacilityPopoverComponent } from './../components/facility-popover/facility-popover';
import { DeletingUserRegistrationPopoverComponent } from './../components/deleting-user-registration-popover/deleting-user-registration-popover';
import { FilterBySeriesPopoverComponent } from './../components/filter-by-series-popover/filter-by-series-popover';
import { FilterByYamatoLanguageTagPopoverComponent } from './../components/filter-by-yamato-language-tag-popover/filter-by-yamato-language-tag-popover';
import { ContentsSortingOrderPopoverComponent } from './../components/contents-sorting-order-popover/contents-sorting-order-popover';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,    
    ChatModePage,
    SettingPage,
    PlayListPage,
    UserListPage,
	  StaffPopoverComponent,
    WalkThroughPage,
    ContentsCommentaryPage,
    RegisterUserComponent,
    PlayingContentPage,
    UserDetailPage,
    SpeicifyingPeriodComponent,
    NoAhPlayingPage,
    DeletingUserRegistrationPopoverComponent,
    UserSortingOrderPopoverComponent,
    FacilityPopoverComponent,
    FilterBySeriesPopoverComponent,
    FilterByYamatoLanguageTagPopoverComponent,
    ContentsSortingOrderPopoverComponent,
    DatePicker
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    //DatePickerModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'もどる',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    } 
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,    
    ChatModePage,
    SettingPage,
    PlayListPage,
    UserListPage,
    WalkThroughPage,
    StaffPopoverComponent,
    ContentsCommentaryPage,
    RegisterUserComponent,
    SpeicifyingPeriodComponent,
    PlayingContentPage,
    UserDetailPage,
    NoAhPlayingPage,
    DeletingUserRegistrationPopoverComponent,
    UserSortingOrderPopoverComponent,
    FacilityPopoverComponent,
    FilterBySeriesPopoverComponent,
    FilterByYamatoLanguageTagPopoverComponent,
    ContentsSortingOrderPopoverComponent,
    //DatePicker
  ],
  providers: [
    StatusBar,
    Calendar,
    DatePicker,
    SplashScreen,
    NativeStorage,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthRequestor,
  ]
})
export class AppModule {}
