import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the WalkThroughPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'walkthrough-page',
  templateUrl: 'walkthrough.html',
})
export class WalkThroughPage {
  @ViewChild(Slides) slides: Slides;

  indexes: number[] = [0, 1, 2, 3, 4, 5];

  currentIndex = 0;
  minIndex = 0;
  maxIndex = this.indexes.length - 1;

  preBtn: HTMLElement;
  nextBtn: HTMLElement;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }

  /**
   * called when ion view is loaded successfully
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkThroughPage');
    this.updateIndicatorCircles();
    this.initSlideButtons();
    this.slides.lockSwipes(true);
  }

  /**
   * initialize slide buttons
   */
  initSlideButtons() {
    this.preBtn = document.getElementById("pre-btn");
    this.nextBtn = document.getElementById("next-btn");
  }

  /**
   * called when slide is changed
   */
  onSlideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
    this.updateIndicatorCircles();
  }

  /**
   * update indicator circles' UI
   */
  updateIndicatorCircles() {
    const currentCircleId = "circle " + this.currentIndex;
  
    // update other circle UI
    const otherCircles = document.getElementsByClassName("circle");
    for (let i = 0; i < otherCircles.length; i++) {
      const circle = otherCircles[i] as HTMLElement;
      circle.style.backgroundColor = "transparent";
    }

    // update current circle UI
    const currentCircle = document.getElementById(currentCircleId);
    currentCircle.style.backgroundColor = "white";
  }

  /**
   * slide to previous slide
   */
  onSlidePrevious() { 
    this.slides.lockSwipes(false);
    if (this.currentIndex != this.minIndex) {
      const previousIndex = this.currentIndex - 1;
      this.goToSlide(previousIndex);
    }
    this.slides.lockSwipes(true);
  }

  /**
   * slide to next slide
   */
  onSlideNext() { 
    this.slides.lockSwipes(false);
    if (this.currentIndex != this.maxIndex) {
      const nextIndex = this.currentIndex + 1;
      this.goToSlide(nextIndex);
    }
    this.slides.lockSwipes(true);
  }

  /**
   * slide to the slide by specified index
   * @param index : index of target slide
   */
  goToSlide(index: number) {
    this.slides.slideTo(index, 100); 
  }

  /**
   * dismiss window
   */
  onDismiss(){
    this.viewCtrl.dismiss();
  }
  
  
}
 