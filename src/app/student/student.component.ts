import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(
    private router:Router,
    private title:Title,
    private Meta:Meta
    ) { }

  ngOnInit(): void {
    this.title.setTitle("Welcome Student");
    this.Meta.updateTag({
      property:'og:title',
      content:'All students welcomed here'
    })
    this.Meta.updateTag({
      property:'og:description',
      content:'Students description present here'
    })
    this.Meta.updateTag({
      property:'og:image',
      content:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw0mT-DlI0cGyXPNVgoT-66N&ust=1653307529826000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDwrtWI8_cCFQAAAAAdAAAAABAD'
    })
  }

}
