export type Structure = {
  tag: 'atom';
} | {
  tag: 'or';
  structures: string[];
} | {
  tag: 'and';
  structures: string[];
} | {
  tag: 'array';
  minLength: number;
  maxLength: number;
  item: string;
};

export type StructureTag = 'atom' | 'or' | 'and' | 'array';

export type StructureState = {

};

export type StructureContainerState = {
  uuidMap: Map<string, Structure>;
};

export type StructureContainerAction = {
  tag: 'add';
  uuid: string;
  structure: Structure;
};

export const trivialAtomId: string = '6947055f-606a-45e8-8abf-323a9c1d25d0';
