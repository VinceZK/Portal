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
    const userIDInput = element(by.id('D84D9A544984A20BCF0BAD59977277E8'));
    userIDInput.clear()
      .then(() => userIDInput.sendKeys(userID));
  }

  fillUserBasic() {
    element.all(by.css('li a')).get(0).click();
    const userBasicTemplate = element(by.tagName('app-user-basic'));
    const userNameInput = userBasicTemplate.element(by.id('793A63D8DEA43B5BF88EE7BAF02757C4'));
    const displayNameInput = userBasicTemplate.element(by.id('DB3D668D338E076626061456992F60DB'));
    const givenNameInput = userBasicTemplate.element(by.id('02C2EE9D3CA229EAD8919007CC3858C'));
    const middleNameInput = userBasicTemplate.element(by.id('90D418F172B221C71D62598C119E97D5'));
    const familyNameInput = userBasicTemplate.element(by.id('E0392472ABB6DB7FDB5FFC92B5DC7A29'));
    const titleInput = userBasicTemplate.element(by.id('E5016EE79DC1B36DAAA9027173674BB4'));
    const DepartmentIDInput = userBasicTemplate.element(by.id('849D0D50634137D6E9F9D6F153C67627'));
    const companyIDInput = userBasicTemplate.element(by.id('5EC22219F4E45746BFCDE76256FD6160'));
    const genderSelect = userBasicTemplate.element(by.id('E6FF69F311DCE5E6328029FB932F20E3'));
    userNameInput.clear().then(() => userNameInput.sendKeys('tester03'));
    displayNameInput.clear().then(() => displayNameInput.sendKeys('Tester 03'));
    givenNameInput.clear().then(() => givenNameInput.sendKeys('John'));
    middleNameInput.clear().then(() => middleNameInput.sendKeys('xxx'));
    familyNameInput.clear().then(() => familyNameInput.sendKeys('Bush'));
    titleInput.clear().then(() => titleInput.sendKeys('developer'));
    DepartmentIDInput.clear().then(() => DepartmentIDInput.sendKeys('development'));
    companyIDInput.clear().then(() => companyIDInput.sendKeys('darkhouse'));
    genderSelect.element(by.css('[value="Male"]')).click();
  }

  changeTitle() {
    element.all(by.css('li a')).get(0).click();
    const userBasicTemplate = element(by.tagName('app-user-basic'));
    const titleInput = userBasicTemplate.element(by.id('E5016EE79DC1B36DAAA9027173674BB4'));
    titleInput.clear().then(() => titleInput.sendKeys('architect'));
  }

  fillUserEmail() {
    element.all(by.css('li a')).get(1).click();
    const userEmailTemplate = element(by.tagName('app-user-email'));
    const emailTypeSelect = userEmailTemplate.all(by.id('874DE1A0CF38C6C4B740E2B68F1E43F6')).first();
    const emailAddressInput = userEmailTemplate.all(by.id('8549B2388F8C3E6381CA15043EC4CFAE')).first();
    emailTypeSelect.element(by.css('[value="PRIVATE"]')).click();
    emailAddressInput.clear().then(() => emailAddressInput.sendKeys('dh003@hotmail.com'));
  }

  addUserEmail(isPrimary: boolean) {
    element.all(by.css('li a')).get(1).click();
    const userEmailTemplate = element(by.tagName('app-user-email'));
    const emailTypeSelect = userEmailTemplate.all(by.id('874DE1A0CF38C6C4B740E2B68F1E43F6')).last();
    const emailAddressInput = userEmailTemplate.all(by.id('8549B2388F8C3E6381CA15043EC4CFAE')).last();
    userEmailTemplate.element(by.id('add')).click();
    emailTypeSelect.element(by.css('[value="WORK"]')).click();
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
    const addressTypeSelect = userAddressTemplate.all(by.id('929116D53BF779DB2E0AC487971773D4')).last();
    const addressInput = userAddressTemplate.all(by.id('6FE183B97FC0E7578051EBDB9EF5D5A4')).last();
    const postcodeInput = userAddressTemplate.all(by.id('7B1EB846E932AD839D4ECE7462AD7F3D')).last();
    const cityInput = userAddressTemplate.all(by.id('930EF6C283C8679EE43B291EA5C1A76C')).last();
    const countryInput = userAddressTemplate.all(by.id('93CB473FC2C6D2E32BFE5E60E603934D')).last();
    userAddressTemplate.element(by.id('add')).click();
    addressTypeSelect.element(by.css('[value="WORK"]')).click();
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
    const languageSelect = userPersonalizationTemplate.element(by.id('D8CDF1E5208AF30FE47D272DA304DE71'));
    const timezoneSelect = userPersonalizationTemplate.element(by.id('6EA9A83FA267F82EBE1B381D56A3F312'));
    const decimalFormatSelect = userPersonalizationTemplate.element(by.id('9718C0E8783C1F86EC212C8436A958C5'));
    const datetimeFormatSelect = userPersonalizationTemplate.element(by.id('37C7C8C24EBDB3A725FC7D6CF719A06E'));
    languageSelect.element(by.css('[value="ZH"]')).click();
    timezoneSelect.element(by.css('[value="UTC+8"]')).click();
    decimalFormatSelect.element(by.css('[value="1"]')).click();
    datetimeFormatSelect.element(by.css('[value="2"]')).click();
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
