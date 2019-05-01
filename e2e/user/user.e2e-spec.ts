import { UserPage } from './user.po';

fdescribe('user App', () => {
  const page = new UserPage();

  describe('Search&List Page', () => {
    beforeAll(() => {
      page.navigateToSearch();
    });

    it('should list all users when clicking button Search', () => {
      page.clickSearchButton();
      page.getSearchResultList()
        .then((list) => expect(list.length).toBeGreaterThan(2));
    });

    it('should list a user filtered by userID', () => {
      page.fillUserID(); // anonymous
      page.clickSearchButton();
      expect(page.getFirstHitUserID()).toEqual('anonymous');
    });

    it('should list a user filtered by userName', () => {
      page.fillUserName(); // anonymous
      page.clickSearchButton();
      expect(page.getFirstHitUserID()).toEqual('anonymous');
    });

    it('should navigate to user detail page in display mode 1', () => {
      page.clickSearchButton();
      page.clickOneUserID();
      expect(page.getCurrentURL()).toEqual('http://localhost:4200/users/anonymous;action=display');
      page.navigateToSearch();
    });

    it('should navigate to user detail page in display mode 2', () => {
      page.clickSearchButton();
      page.clickDisplayUserButton();
      expect(page.getCurrentURL()).toEqual('http://localhost:4200/users/anonymous;action=display');
      page.navigateToSearch();
    });

    it('should navigate to user detail page in change mode', () => {
      page.clickSearchButton();
      page.clickChangeUserButton();
      expect(page.getCurrentURL()).toEqual('http://localhost:4200/users/anonymous;action=change');
      page.navigateToSearch();
    });

    it('should open the deletion confirmation dialog', () => {
      page.clickSearchButton();
      page.clickDeleteUserButton();
      expect(page.deletionConfirmationDialogIsShown()).toEqual('block');
      page.clickCancelDeletionButton();
    });

    it('should navigate to new user page', () => {
      page.clickNewUserButton();
      expect(page.getCurrentURL()).toEqual('http://localhost:4200/users/;action=new');
    });
  });

  describe('Detail Page: User Creation', () => {
    beforeAll(() => {
      page.navigateToSearch();
    });

    it('should report error due to user ID already exist', () => {
      page.clickNewUserButton();
      page.fillUserIDinDetailPage('DH001'); // user DH001 already exists
      page.fillUserBasic();
      page.fillUserEmail();
      page.clickSaveButton();
      expect(page.getMessage()).toEqual('Data is invalid, please check.');
      page.closeMessage();
    });

    it('should report error due to invalid user role', () => {
      page.fillUserIDinDetailPage('DH003');
      page.addUserEmail(true);
      page.addUserAddress(false);
      page.addUserRole('notExist');
      page.addUserRole('tester');
      page.clickSaveButton();
      expect(page.getMessage()).toEqual('Data is invalid, please check.');
      page.closeMessage();
    });

    it(`should create user 'DH003' successfully`, () => {
      page.deleteUserRole(0); // Delete role notExist
      page.addUserAddress(true);
      page.fillUserPersonalization();
      page.clickSaveButton();
      expect(page.getMessage()).toEqual(`User 'DH003' is saved!`);
      page.closeMessage();
    });
  });

  describe('Detail Page: User Deletion', () => {
    beforeAll(() => {
      page.navigateToSearch();
    });

    it(`should delete user 'DH003'`, () => {
      page.fillUserID('DH003');
      page.clickSearchButton();
      page.clickDeleteUserButton();
      page.clickConfirmDeletionButton();
    });

  });
});
