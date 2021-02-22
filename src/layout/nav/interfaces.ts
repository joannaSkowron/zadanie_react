export interface Genre {
  id: number;
  name: string;
  bands: number[];
}

export interface Band {
  id: number;
  name: string;
  musicians: number[];
}

export interface Musician {
  id: number;
  name: string;
}

export interface MenuItem {
  id: number;
  title: string;
  url: string;
  children?: MenuItem[];
}

export interface MenuDataArray {
  id: number;
  name: string;
  children?: { tableName: string, tableIds: number[] };
}

export interface Table {
  [key: string]: MenuDataArray[]
}
