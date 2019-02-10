import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";
import {switchMap} from "rxjs/operators";
import {ShareService} from "../share.service";
import {App} from "../role";
import {IdentityService} from "../identity.service";
import {of} from "rxjs";

@Component({
  selector: 'app-external-app',
  templateUrl: './external-app.component.html',
  styleUrls: ['./external-app.component.css']
})
export class ExternalAppComponent implements OnInit {
  appUrl: string;
  iFrameWidth: string;
  apps: App[] = [];

  constructor(
    private route: ActivatedRoute,
    private shareService: ShareService,
    private identityService: IdentityService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit() {
    this.shareService.isCollapsed ? this.iFrameWidth = '95%' : this.iFrameWidth = '80%';
    this.shareService.isCollapsed$.subscribe( isCollapsed => {
      isCollapsed ? this.iFrameWidth = '95%' : this.iFrameWidth = '80%';
    });

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          const appID = params.get('appID');
          if (this.shareService.apps.length === 0) {
            return this.identityService.getAppRouteLink(appID);
          } else {
            return of(this.shareService.apps.find( app => app.appID === appID).originalRouteLink);
          }
        }
      )).subscribe(routeLink => {
        if (routeLink === 'appNotFound') {
          this.router.navigate(['pageNotFound']);
        } else {
          const appDangerousUrl = routeLink.substr(0, 4) === 'http' ? routeLink :
            window.location.origin + routeLink;
          this.appUrl = <string>this.sanitizer.bypassSecurityTrustResourceUrl(appDangerousUrl);
        }
    });
  }
}
