export interface Sector {
  id: number;
  categoryName: string;
  parentSector: Sector;
  value: number;
}