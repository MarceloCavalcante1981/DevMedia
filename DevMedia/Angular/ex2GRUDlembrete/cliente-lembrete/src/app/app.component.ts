import { Component, ViewChild } from '@angular/core';
import { ErroMsgComponent } from './compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'GRUD Lembretes com Angular  ';
  @ViewChild(ErrorMsgComponent ) errorMsgComponent:ErrorMsgComponen;

}
