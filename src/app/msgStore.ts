export const msgStore = [
  { msgCat: "EXCEPTION",
    msgName: "GENERIC",
    msgText: {
      EN: {shortText: "Exception Occurs in Operation: '%s'",
           longText: "%s1"}
    }
  },
  { msgCat: "EXCEPTION",
    msgName: "NOT_AUTHENTICATED_OR_SESSION_EXPIRED",
    msgText: {
      EN: {shortText: "You are not authenticated or your session is expired!",
        longText: "You are not authenticated or your session is expired, please <a href='/logon'>re-logon</a>."}
    }
  },
  { msgCat: "GENERAL",
    msgName: "EMPTY_LIST",
    msgText: {
      EN: {shortText: "No result is found",
        longText: "The system cannot find any items meet the search criteria."}
    }
  },
  { msgCat: "GENERAL",
    msgName: "UNSAVED_CHANGES",
    msgText: {
      EN: {
        shortText: "There are unsaved changes. Do you want to save the changes?",
        longText: ""
      }
    }
  },
  { msgCat: "GENERAL",
    msgName: "NO_CHANGE",
    msgText: {
      EN: {
        shortText: "No change is made, saving is not necessary.",
        longText: "The data is not changed, thus there is no need to save changes"
      }
    }
  },
  { msgCat: "USER",
    msgName: "INVALID",
    msgText: {
      EN: {shortText: "Data is invalid, please check.",
        longText: "The data still contains some errors, please make sure all mandatory fields are filled!"}
    }
  },
  { msgCat: "USER",
    msgName: "USER_NAME_EXISTS",
    msgText: {
      EN: {shortText: "User name: '%s' already exists!",
           longText: ""}
    }
  },
  { msgCat: "USER",
    msgName: "USER_ID_EXISTS",
    msgText: {
      EN: {shortText: "User ID: '%s' already exists!",
        longText: ""}
    }
  },
  { msgCat: "USER",
    msgName: "AT_LEAST_ONE_EMAIL",
    msgText: {
      EN: {
        shortText: "At least one email needs to be maintained!",
        longText: ""
      }
    }
  },
  { msgCat: "USER",
    msgName: "USER_SAVED",
    msgText: {
      EN: {
        shortText: "User '%s' is saved!",
        longText: ""
      }
    }
  }
];
