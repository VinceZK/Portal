import { Component, OnInit } from '@angular/core';
import {UserList} from "../../user";
import {Message, MessageService, messageType} from "ui-message-angular";
import {Router} from "@angular/router";
import {IdentityService} from "../../identity.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userID: string;
  userName: string;
  users: UserList[];
  showDeletionConfirmation = false;
  toBeDeletedUser: string;

  get displayDeletionConfirmation() {return this.showDeletionConfirmation ? 'block' : 'none'; }

  constructor(private identityService: IdentityService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.messageService.clearMessages();
    this.users = [];
    this.userID = this.userID ? this.userID.trim() : '';
    this.userName = this.userName ? this.userName.trim() : '';
    this.identityService.searchUsers(this.userID, this.userName).subscribe(
      data => {
        if (!data[0]) {
          this.messageService.reportMessage('GENERAL', 'EMPTY_LIST', messageType.Warning);
        } else if (data[0]['msgCat']) {
          const messages = <Message[]>data;
          messages.forEach( msg => this.messageService.add(msg));
        } else {
          this.users = <UserList[]>data;
        }
      }
    );
  }

  enterSearch($event): void {
    if ($event.keyCode === 13 ) {
       this.search();
    }
  }

  newUser(): void {
    this.router.navigate(['users', '/', {action: 'new'}]);
  }

  displayUser(userID: string): void {
    this.router.navigate(['users', userID, {action: 'display'}]);
  }

  changeUser(userID: string): void {
    this.router.navigate(['users', userID, {action: 'change'}]);
  }

  deleteUser(userID: string): void {
    this.toBeDeletedUser = userID;
    this.showDeletionConfirmation = true;
  }

  cancelDeletion(): void {
    this.showDeletionConfirmation = false;
  }

  confirmDeletion(): void {
    const toBeDeletedUserGUID = this.users.find( ele => ele.USER_ID === this.toBeDeletedUser).INSTANCE_GUID;
    this.identityService.deleteUser(toBeDeletedUserGUID).subscribe( errorMsg => {
      this.showDeletionConfirmation = false;
      if (errorMsg) {
        const messages = <Message[]>errorMsg;
        messages.forEach( msg => this.messageService.add(msg));
      } else {
        this.search();
      }
    });
  }

}
