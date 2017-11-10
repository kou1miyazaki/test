import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayingContentPage } from './playing-content';

@NgModule({
  declarations: [
    PlayingContentPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayingContentPage),
  ],
})
export class PlayingContentPageModule {}
