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
