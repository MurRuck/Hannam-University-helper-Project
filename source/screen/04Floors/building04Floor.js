const floors = {
    '1F': {
      image: require('../../image/04-1층.png'),
      rooms: {
        '040101': { x: 13, y: 9 },
        '040102': { x: 13, y: 19 },
        '040103': { x: 55, y: 34 },
        '040103-A': { x: 63, y: 34 },
        '040104': { x: 76, y: 34 },
        '040105': { x: 85, y: 34 },
        '040106': { x: 47, y: 5 },
        '040107': { x: 64, y: 5 },
        '040108-A': { x: 46, y: 12 },
        '040108': { x: 47, y: 21 },
      },
    },
    '2F': {
      image: require('../../image/04-2층.png'),
      rooms: {
       // '020201': { x: 4, y: 30.5 },
        '020202': { x: 3, y: 20 },
        '020203': { x: 12, y: 20 },
        '020204': { x: 21, y: 20 },
        '020205': { x: 31, y: 20 },
        '020208': { x: 40, y: 20 },
        '020209': { x: 47, y: 20 }, 
        '020210': { x: 55, y: 20 },
        '020211': { x: 66, y: 20 },
        '020212': { x: 82, y: 20 },
        // 다른 방 좌표
      },
    },
    '3F': {
      image: require('../../image/04-3층.png'),
      rooms: {
        '020301': { x: 4, y: 20 },
        '020302': { x: 11, y: 20 },
        '020303': { x: 15, y: 20 },
        '020304': { x: 20, y: 20 },
        '020305': { x: 24, y: 20 },
        '020306': { x: 29, y: 20 },
        '020307': { x: 34, y: 20 },
        '020308': { x: 38, y: 20 },
        '020309': { x: 43, y: 20 }, 
        '020310': { x: 48, y: 20 },
        '020311': { x: 55, y: 20 },
        '020312': { x: 70, y: 20 },
        '020313': { x: 85, y: 20 },
      },
    },
    '4F': {
      image: require('../../image/04-4층.png'),
      rooms: {
        '020401': { x: 4, y: 20 },
        '020402': { x: 17, y: 21.5 },
        '020403': { x: 26, y: 21.5 },
        '020404': { x: 33, y: 21.5 },
        '020405': { x: 43, y: 21.5 },
        '020406': { x: 55, y: 21.5 },
        '020407': { x: 68, y: 21.5 },
        '020408': { x: 82, y: 20 },
        
        // 다른 방 좌표
      },
    },
    // 다른 층 추가
  };
  
  export default floors;