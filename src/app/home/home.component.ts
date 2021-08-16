import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
var today = new Date();   
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  time = today.getHours()-1 + ':' + (today.getMinutes()-3);
  date1 = today.getDate()-1 + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  time1 = today.getHours()-5 + ':' + today.getMinutes();
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
}
