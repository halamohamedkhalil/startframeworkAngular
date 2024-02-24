import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  scrollTop:number = 0;
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollTop = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
}
}
