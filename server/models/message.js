const msgArray = [
  { msgCat: "ENTITY",
    msgName: "GENERAL_ERROR",
    msgText: {
      EN: {shortText: "%s", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "ENTITY_ID_MISSING",
    msgText: {
      EN: {shortText: "There is no ENTITY_ID provided", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "ENTITY_NOT_EXIST",
    msgText: {
      EN: {shortText: "Entity %s doesn't exist", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "RELATION_NOT_VALID",
    msgText: {
      EN: {shortText: "Entity %s doesn't have relation: %s", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "ATTRIBUTE_NOT_VALID",
    msgText: {
      EN: {shortText: "Entity: %s doesn't have attribute: %s", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "ATTRIBUTE_NOT_MULTI_VALUE",
    msgText: {
      EN: {shortText: "Attribute %s of entity %s doesn't support multiple values", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "RELATIONSHIP_NOT_VALID",
    msgText: {
      EN: {shortText: "Entity %s doesn't involve in relationship %s", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "ROLE_NOT_VALID",
    msgText: {
      EN: {shortText: "Role %s doesn't involve in relationship %s", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "RELATIONSHIP_INSTANCE_SINGULAR",
    msgText: {
      EN: {shortText: "Only one instance of role %s can be involved in relationship %s", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "RELATION_ATTRIBUTE_NOT_EXIST",
    msgText: {
      EN: {shortText: "The attribute %s doesn't exist in relation %s", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "FOREIGN_KEY_CHECK_ERROR",
    msgText: {
      EN: {shortText: "Foreign key(s) %s doesn't exist in relation %s", longText: "dummy"}
    }
  },
  { msgCat: "ENTITY",
    msgName: "ENTITY_INSTANCE_NOT_EXIST",
    msgText: {
      EN: {shortText: "Entity instance %s doesn't exist", longText: "dummy"}
    }
  }
];

module.exports = msgArray;
