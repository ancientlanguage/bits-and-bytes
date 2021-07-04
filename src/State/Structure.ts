export type StructurePart = {
  tag: 'size';
  size: number;
} | {
  tag: 'or';
  parts: StructurePart;
} | {
  tag: 'and';
  parts: StructurePart;
} | {
  tag: 'list';
  count: number;
  item: StructurePart;
};

export type StructureTag = 'size' | 'or' | 'and' | 'list';

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
