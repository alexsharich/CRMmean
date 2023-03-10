import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../../classes/material.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit, AfterViewInit {

@ViewChild('floating') floatingRef : ElementRef

  links = [
    {url:'/overview',name: 'Review'},
    {url:'/analytics',name: 'Analytics'},
    {url:'/history',name: 'History'},
    {url:'/order',name: 'Add an order'},
    {url:'/categories',name: 'Assortment'},
  ]

  constructor(private auth:AuthService,
              private router:Router){

  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    MaterialService.initializeFloatingButton(this.floatingRef)
  }
  logout(event:Event){
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
