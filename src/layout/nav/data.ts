import { Genre, Band, Musician, MenuDataArray } from "./interfaces";

export const genres: MenuDataArray[] = [
  {
    id: 1,
    name: "rock",
    children: {
      tableName: "bands",
      tableIds: [1, 2]
    }
  },
  {
    id: 2,
    name: "pop",
    children: {
      tableName: "bands",
      tableIds: [3, 4]
    }
  },
];

export const bands: MenuDataArray[] = [
  {
    id: 1,
    name: "rock band1",
    children: {
      tableName: "musicians",
      tableIds: [1, 2]
    }
  },
  {
    id: 2,
    name: "rock band2",
    children: {
      tableName: "musicians",
      tableIds: [3, 4]
    }
  },
  {
    id: 3,
    name: "pop band1",
    children: {
      tableName: "musicians",
      tableIds: [5, 6]
    }
  },
  {
    id: 4,
    name: "pop band2",
    children: {
      tableName: "musicians",
      tableIds: [7, 8]
    }
  }
];

export const musicians: MenuDataArray[] = [
  {
    id: 1,
    name: "rock guy1"
  },
  {
    id: 2,
    name: "rock guy2"
  },
  {
    id: 3,
    name: "rock guy3"
  },
  {
    id: 4,
    name: "rock guy4"
  },
  {
    id: 5,
    name: "pop guy1"
  },
  {
    id: 6,
    name: "pop guy2"
  },
  {
    id: 7,
    name: "pop guy3"
  },
  {
    id: 8,
    name: "pop guy4"
  }
];




// export const genres: Genre[] = [
//   {
//     id: 1,
//     name: "rock",
//     bands: [1, 2]
//   },
//   {
//     id: 2,
//     name: "pop",
//     bands: [3, 4]
//   }
// ];

// export const bands: Band[] = [
//   {
//     id: 1,
//     name: "rock band1",
//     musicians: [1, 2]
//   },
//   {
//     id: 2,
//     name: "rock band2",
//     musicians: [3, 4]
//   },
//   {
//     id: 3,
//     name: "pop band1",
//     musicians: [5, 6]
//   },
//   {
//     id: 4,
//     name: "pop band2",
//     musicians: [7, 8]
//   }
// ];

// export const musicians: Musician[] = [
//   {
//     id: 1,
//     name: "rock guy1"
//   },
//   {
//     id: 2,
//     name: "rock guy2"
//   },
//   {
//     id: 3,
//     name: "rock guy3"
//   },
//   {
//     id: 4,
//     name: "rock guy4"
//   },
//   {
//     id: 5,
//     name: "pop guy1"
//   },
//   {
//     id: 6,
//     name: "pop guy2"
//   },
//   {
//     id: 7,
//     name: "pop guy3"
//   },
//   {
//     id: 8,
//     name: "pop guy4"
//   }
// ];
