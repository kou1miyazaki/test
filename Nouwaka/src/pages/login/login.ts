import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { AuthRequestor } from './auth_requestor';
import { LoginInputValidator } from './login_input_validator';
import { LoginUser } from './login_user';
import { ChatModePage } from './../chat-mode/chat-mode';
import { TabsPage } from './../tabs/tabs';
import { AuthHttp, AuthConfig,JwtHelper } from 'angular2-jwt';

import 'rxjs/add/operator/map';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  public isPasswordShown = false;
  public errorType: string = "";
  public jwtHelper: JwtHelper = new JwtHelper();
  loginUser: LoginUser =
  {
    email: "",
    password: "",
  };

  constructor(public nativeStorage: NativeStorage, public navCtrl: NavController, public authRequestor: AuthRequestor) {
    
  }

  /**
   * If password input type is password, then display password value as plain text. If not, display it as password text
   */
  onShowPassword(): void {
    if (this.loginUser.password !== "") {
      this.isPasswordShown = !this.isPasswordShown;
    }
  }

  /**
   * Perform login job
   */
  onSubmitLogin(): void {
    this.errorType = "";
    const inputValidator: LoginInputValidator = new LoginInputValidator();
    if (this.loginUser.email == "" && this.loginUser.password == "") {
      this.errorType = "メールアドレス, パスワード は必須項目です。";
      this.showInvalidInputErrorMessage();
    } else {
      if (this.loginUser.email == "") {
        this.errorType = "メールアドレス は必須項目です。";
        this.showInvalidInputErrorMessage();
      } else {
        if (this.loginUser.password == "") {
          this.errorType = "パスワード は必須項目です。";
          this.showInvalidInputErrorMessage();
        } else {
          if (inputValidator.isInputsValid(this.loginUser.email, this.loginUser.password)) {
            this.hideInvalidInputErrorMessage();
            this.requestAuthToServer();
          } else {
            this.errorType = "入力エラー";
            this.showInvalidInputErrorMessage();
          }
        }
      }
    }
  }

  /**
   * Show invalid input error message
   */
  showInvalidInputErrorMessage(): void {
    const errMsgSpan = document.getElementById("error-messenger");
    errMsgSpan.hidden = false;
  }

  /**
  * Hide invalid input error message
  */
  hideInvalidInputErrorMessage(): void {
    const errMsgSpan = document.getElementById("error-messenger");
    errMsgSpan.hidden = true;
  }

  /**
   * request authentication to Server
   */
  requestAuthToServer() {
    const loginData = (this.loginUser);
    let loginObserver = this.authRequestor.requestAuth(loginData);
    loginObserver.subscribe(data => {

                            //console.log( this.jwtHelper.decodeToken(data));
                           
                            this.nativeStorage.setItem('token',data).then(
                              () =>{
                                //console.log(data);
                                this.navCtrl.push(TabsPage);
                              },
                              error => console.error('Error storing item', error)
                            );
                          },error => {
                            let mes = JSON.parse(error._body);
                            console.log(mes);
                            this.showInvalidInputErrorMessage();
                           }
                         );
  }

  /**
   * This method is used for test email and password input value
   */
  get diagnostic() {
    return JSON.stringify(this.loginUser);
  }

}


