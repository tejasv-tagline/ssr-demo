import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private title:Title,
    private Meta:Meta
    ) { }

  ngOnInit(): void {
    this.title.setTitle("Home page");
    this.Meta.updateTag({
      property:'og:title',
      content:'Home page here'
    })
    this.Meta.updateTag({
      property:'og:description',
      content:'Welcome everybody to school'
    })
    this.Meta.updateTag({
      property:'og:image',
      content:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0mT-DlI0cGyXPNVgoT-66N&ust=1653307529826000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDwrtWI8_cCFQAAAAAdAAAAABAO'
    })
  }

}
