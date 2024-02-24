import { Component } from '@angular/core';
import { ContactInterface } from '../contact-interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title:string = "CONATCT SECTION";
  light:boolean = false;

  contactData:ContactInterface =
    {userName:"", userAge:"" , userEmail: "" , userPassword:""}

    onKeyUserName(event: any) {
      this.contactData.userName = event.target.value;
    }
    onKeyUserAge(event: any) {
      this.contactData.userAge = event.target.value;
    }
    onKeyUserEmail(event: any) {
      this.contactData.userEmail = event.target.value;
    }
    onKeyUserPassword(event: any) {
      this.contactData.userPassword = event.target.value;
    }
  }
