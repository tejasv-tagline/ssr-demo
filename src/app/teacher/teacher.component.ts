import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {


  constructor(
    private router:Router,
    private title:Title,
    private Meta:Meta
    ) { }

  ngOnInit(): void {
    this.title.setTitle("Welcome Teacher");
    this.Meta.updateTag({
      property:'og:title',
      content:'Teacher Dashboard'
    })
    this.Meta.updateTag({
      property:'og:description',
      content:'Teachers are the examiners'
    })
    this.Meta.updateTag({
      property:'og:image',
      content:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.industrialempathy.com%2Fposts%2Fimage-optimizations%2F&psig=AOvVaw0mT-DlI0cGyXPNVgoT-66N&ust=1653307529826000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDwrtWI8_cCFQAAAAAdAAAAABAJ'
    })
  }

}
