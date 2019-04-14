import {IdentityService} from "../../identity.service";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {Observable, timer} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {MessageService} from "ui-message-angular";

export function existingUserNameValidator(identityService: IdentityService,
                                          messageService: MessageService,
                                          userID: string): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return timer(500).pipe(
      switchMap( () => identityService.getUserByUserName(control.value).pipe(
        map(data => {
          if (data['r_user'] && data['r_user'][0]['USER_ID'] !== userID) {
            return {message: messageService.generateMessage('USER', 'USER_NAME_EXISTS',
                'E', control.value).msgShortText};
          } else {
            return null;
          }
        })
      )));
  };
}

export function existingUserIDValidator(identityService: IdentityService,
                                          messageService: MessageService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return timer(500).pipe(
      switchMap( () => identityService.getUserByUserID(control.value).pipe(
        map(data => {
          if (data['r_user'] && data['r_user'][0]['USER_ID'] === control.value) {
            return {message: messageService.generateMessage('USER', 'USER_ID_EXISTS',
                'E', control.value).msgShortText};
          } else {
            return null;
          }
        })
      )));
  };
}
