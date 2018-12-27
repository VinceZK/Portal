import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-external-app',
  templateUrl: './external-app.component.html',
  styleUrls: ['./external-app.component.css']
})
export class ExternalAppComponent implements OnInit {
  appUrl: string;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const appID = this.route.snapshot.paramMap.get('appID');
    let appDangerousUrl = "http://www.baidu.com";
    switch (appID) {
      case '1':
        appDangerousUrl = "https://darkhouse.com.cn/blog/4  ";
        break;
      default:
    }

    this.appUrl = <string>this.sanitizer.bypassSecurityTrustResourceUrl(appDangerousUrl);
  }
}
