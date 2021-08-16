import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

// declare function connectingclient(): any;

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) { }

  ngOnInit(): void {
    // connectingclient();
  }
  openLink():void {
    this.bottomSheetRef.dismiss();
  }
}
/*
var ftpClient = require("ftp-client"),
  config = {
    host: "localhost",
    port: 21,
    user: "user1",
    password: "",
  },
  options = {
    logging: "basic",
  },
  client = new ftpClient(config, options);

client.connect(function () {
  client.download(
    ".",
    ".",
    {
      overwrite: "none",
    },
    function (result) {
      console.log(result);
    }
  );
});
*/