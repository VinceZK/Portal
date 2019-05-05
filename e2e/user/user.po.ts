import { browser, by, element } from 'protractor';

export class UserPage {
  navigateToSearch() {
    return browser.get('/users');
  }

  fillUserID(userID: string = 'anonymous') {
    element(by.css('[name="user_id"]')).sendKeys(userID);
  }

  fillUserName(userName: string = 'Anonymous') {
    element(by.css('[name="user_name"]')).sendKeys(userName);
  }

  clickSearchButton() {
    element(by.id('search')).click();
  }

  getSearchResultList() {
    return element.all(by.tagName('tr'));
  }

  getFirstHitUserID() {
    return element(by.css('td a')).getText();
  }

  clickOneUserID(linkText: string = 'anonymous') {
    element(by.linkText(linkText)).click();
  }

  clickDisplayUserButton() {
    element.all(by.id('display')).first().click();
  }

  clickChangeUserButton() {
    element.all(by.id('change')).first().click();
  }

  clickDeleteUserButton() {
    element.all(by.id('delete')).first().click();
  }

  clickNewUserButton() {
    element(by.id('new')).click();
  }

  getCurrentURL() {
    return browser.getCurrentUrl();
  }

  deletionConfirmationDialogIsShown() {
    return element(by.css('.modal.show')).getCssValue('display');
  }

  clickCancelDeletionButton() {
    element(by.id('cancel')).click();
  }

  clickConfirmDeletionButton() {
    element(by.id('confirm')).click();
  }

  fillUserIDinDetailPage(userID: string) {
    const userIDInput = element(by.id('user_id'));
    userIDInput.clear()
      .then(() => userIDInput.sendKeys(userID));
  }

  fillUserBasic() {
    element.all(by.css('li a')).get(0).click();
    const userBasicTemplate = element(by.tagName('app-user-basic'));
    const userNameInput = userBasicTemplate.element(by.id('userName'));
    const displayNameInput = userBasicTemplate.element(by.id('displayName'));
    const givenNameInput = userBasicTemplate.element(by.id('givenName'));
    const middleNameInput = userBasicTemplate.element(by.id('middleName'));
    const familyNameInput = userBasicTemplate.element(by.id('familyName'));
    const titleInput = userBasicTemplate.element(by.id('title'));
    const DepartmentIDInput = userBasicTemplate.element(by.id('DepartmentID'));
    const companyIDInput = userBasicTemplate.element(by.id('companyID'));
    const genderInput = userBasicTemplate.element(by.id('gender'));
    userNameInput.clear().then(() => userNameInput.sendKeys('tester03'));
    displayNameInput.clear().then(() => displayNameInput.sendKeys('Tester 03'));
    givenNameInput.clear().then(() => givenNameInput.sendKeys('John'));
    middleNameInput.clear().then(() => middleNameInput.sendKeys('xxx'));
    familyNameInput.clear().then(() => familyNameInput.sendKeys('Bush'));
    titleInput.clear().then(() => titleInput.sendKeys('developer'));
    DepartmentIDInput.clear().then(() => DepartmentIDInput.sendKeys('development'));
    companyIDInput.clear().then(() => companyIDInput.sendKeys('darkhouse'));
    genderInput.clear().then(() => genderInput.sendKeys('Male'));
  }

  changeTitle() {
    element.all(by.css('li a')).get(0).click();
    const userBasicTemplate = element(by.tagName('app-user-basic'));
    const titleInput = userBasicTemplate.element(by.id('title'));
    titleInput.clear().then(() => titleInput.sendKeys('architect'));
  }

  fillUserEmail() {
    element.all(by.css('li a')).get(1).click();
    const userEmailTemplate = element(by.tagName('app-user-email'));
    const emailTypeInput = userEmailTemplate.all(by.id('emailType')).first();
    const emailAddressInput = userEmailTemplate.all(by.id('emailAddress')).first();
    emailTypeInput.clear().then(() => emailTypeInput.sendKeys('private'));
    emailAddressInput.clear().then(() => emailAddressInput.sendKeys('dh003@hotmail.com'));
  }

  addUserEmail(isPrimary: boolean) {
    element.all(by.css('li a')).get(1).click();
    const userEmailTemplate = element(by.tagName('app-user-email'));
    const emailTypeInput = userEmailTemplate.all(by.id('emailType')).last();
    const emailAddressInput = userEmailTemplate.all(by.id('emailAddress')).last();
    userEmailTemplate.element(by.id('add')).click();
    emailTypeInput.sendKeys('work');
    emailAddressInput.sendKeys('dh003@darkhouse.com');
    if (isPrimary) {
      userEmailTemplate.all(by.id('primaryEmail')).last().click();
    }
  }

  removeUserEmail() {
    element.all(by.css('li a')).get(1).click();
    const userEmailTemplate = element(by.tagName('app-user-email'));
    userEmailTemplate.all(by.id('remove')).first().click();
  }

  addUserAddress(isPrimary: boolean) {
    element.all(by.css('li a')).get(2).click();
    const userAddressTemplate = element(by.tagName('app-user-address'));
    const addressTypeInput = userAddressTemplate.all(by.id('addressType')).last();
    const addressInput = userAddressTemplate.all(by.id('address')).last();
    const postcodeInput = userAddressTemplate.all(by.id('postcode')).last();
    const cityInput = userAddressTemplate.all(by.id('city')).last();
    const countryInput = userAddressTemplate.all(by.id('country')).last();
    userAddressTemplate.element(by.id('add')).click();
    addressTypeInput.sendKeys('work');
    addressInput.sendKeys('Room XXX, Building 39, 373 XXXX Road');
    postcodeInput.sendKeys('201208');
    cityInput.sendKeys('Shanghai');
    countryInput.sendKeys('China');
    if (isPrimary) {
      userAddressTemplate.all(by.id('primaryAddress')).last().click();
    }
  }

  removeUserAddress() {
    element.all(by.css('li a')).get(2).click();
    const userAddressTemplate = element(by.tagName('app-user-address'));
    userAddressTemplate.all(by.id('remove')).first().click();
  }

  fillUserPersonalization() {
    element.all(by.css('li a')).get(3).click();
    const userPersonalizationTemplate = element(by.tagName('app-user-personalization'));
    const languageInput = userPersonalizationTemplate.element(by.id('language'));
    const timezoneInput = userPersonalizationTemplate.element(by.id('timezone'));
    const decimalFormatInput = userPersonalizationTemplate.element(by.id('decimalFormat'));
    const datetimeFormatInput = userPersonalizationTemplate.element(by.id('datetimeFormat'));
    languageInput.clear().then(() => languageInput.sendKeys('ZH'));
    timezoneInput.clear().then(() => timezoneInput.sendKeys('UTC+8'));
    decimalFormatInput.clear().then(() => decimalFormatInput.sendKeys('000,000.00'));
    datetimeFormatInput.clear().then(() => datetimeFormatInput.sendKeys('YYYY/MM/DD hh:mm:ss'));
  }

  addUserRole(roleName: string) {
    element.all(by.css('li a')).get(4).click();
    const userRoleTemplate = element(by.tagName('app-user-role'));
    const roleNameInput = userRoleTemplate.all(by.css('.dk-name input')).last();
    roleNameInput.clear().then(() => roleNameInput.sendKeys(roleName));
  }

  deleteUserRole(index: number) {
    element.all(by.css('li a')).get(4).click();
    const userRoleTemplate = element(by.tagName('app-user-role'));
    userRoleTemplate.all(by.id('delete')).get(index).click();
  }

  clickSaveButton() {
    element(by.id('save')).click();
  }

  clickEditDisplayToggleButton() {
    element(by.id('editDisplay')).click();
  }

  getMessage() {
    return element(by.css('.dk-message .alert-link')).getText();
  }

  closeMessage() {
    element(by.css('.dk-message .close')).click();
  }
}
