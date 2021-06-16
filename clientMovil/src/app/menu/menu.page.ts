import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  active = '';

  NAV = [
    {
      name: 'productos',
      link: '/menu/productos',
      icon: 'cube'
    },
    {
      name: 'carrito',
      link: '/menu/carrito',
      icon: 'cart'
    },
    {
      name: 'ordenes',
      link: '/menu/ordenes',
      icon: 'list'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
  }
  ngOnInit() {
  }

}
