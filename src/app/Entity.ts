export class Entity {
  name: string;
  attributes: Attribute[];
  relations: Relation[];
  roles: Role[];
  Relationship: Relationship[];
}

export class Relation {
  name: string;
  attributes: Attribute[];
  association: Association;
}

class Attribute {
  name: string;
  dataElement: string;
  dataType: string;
  dataLength: number;
}
class Association {
  leftRelation: string;
  rightRelation: string;
  cardinality: number;
  mapping: FieldMapping[];
}

class FieldMapping {
  leftRelation: string;
  leftField: string;
  rightRelation: string;
  rightField: string;
}
export class Role {
  relationship: string;
  name: string;
  attributes: Attribute[];
  relations: Relation[];
}

export class Relationship {
  name: string;
  validPeriod: number;
  involves: Involvement[];
  attributes: Attribute[];
  relations: Relation[];
}

class Involvement {
  relationship: string;
  entity: string;
  role: string;
}
