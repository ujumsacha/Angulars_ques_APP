import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let head = document.getElementsByTagName('head')[0]
    let script = document.createElement('script')

    script.src = "assets/js/app.js"
    head.appendChild(script)
  }

}
