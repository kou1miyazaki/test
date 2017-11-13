import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the RegisterUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-user',
  templateUrl: 'register-user.html'
})
export class RegisterUserComponent {
  firstNameText: string;
  public Image : string;
  text: string;

  constructor(public camera: Camera,private sanitizer: DomSanitizer) {
  }
  takePicfromLibrary(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: 0,
      sourceType:0
    };
    this.takePic(options);
  }

  takePicfromCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: 0,
      sourceType:1,
      cameraDirection:this.camera.Direction.FRONT
    };
    this.takePic(options);
  }

  async takePic(option){
      await this.camera.getPicture(option).then((imageData) => {
        let image = 'data:image/jpeg;base64,' + imageData ;
        // this.Image = this.sanitizer.bypassSecurityTrustUrl(image);
        this.Image = image;
      }, (err) => {
      });
  }
  isRegister(){
  debugger;
  console.log(this.firstNameText);

}
}
