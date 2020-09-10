import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public btnDisable:boolean = true;
  public success : boolean = true;
  constructor() { }

  slides = [
    {
      title : "Sending Machine",
      img: "assets/images/panting-tools.jpg",
      text1 : "Faster & Cleaner Dus",
      text2 : "Dust free Vacuum Function",
      text3 : "Regular speed"
    },
    {
      title : "Sending Machine",
      img: "assets/images/panting-tools.jpg",
      text1 : "Faster & Cleaner Dus",
      text2 : "Dust free Vacuum Function",
      text3 : "Regular speed"
    },
    {
      title : "Sending Machine",
      img: "assets/images/panting-tools.jpg",
      text1 : "Faster & Cleaner Dus",
      text2 : "Dust free Vacuum Function",
      text3 : "Regular speed"
    }
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "autoplay": false,
    "infinite": true,
    "nextArrow": "<div class='nav-btn slick-next'><i class='fa fa-chevron-right'></i></div>",
    "prevArrow": "<div class='nav-btn slick-prev'><i class='fa fa-chevron-left'></i></div>",
  };
  ngOnInit() {
  }
  onRegister(event) {
    if ($('#fname').val() && $('#city').val() && $('#emailid').val() && $('#mobileNo').val()) {
      if ($('.error_msg').is(":visible")) {
      this.btnDisable = true;
      }
      else {
        this.btnDisable = false;
      }
      } else {
        this.btnDisable = true;
      }
   
    }
    resetform() {
      $(".input-container").val("");
      this.success = false;
     }
     
}
