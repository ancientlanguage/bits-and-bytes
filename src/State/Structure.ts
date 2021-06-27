export type StructurePart = {
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
  id: string;
  part: StructurePart;
};

export type StructureContainerState = {
  uuidMap: Map<string, StructureState>;
};

export type StructureContainerAction = {
  tag: 'add';
  structurePart: StructurePart;
};

export const trivialAtomId: string = '6947055f-606a-45e8-8abf-323a9c1d25d0';
