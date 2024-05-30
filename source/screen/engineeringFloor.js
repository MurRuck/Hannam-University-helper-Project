const floors = {
  '1F': {
    image: require('../../image/공대1층.png'),
    rooms: {
      '090101': { x: 15, y: 26 },
      '090102': { x: 15, y: 20 },
      '090103': { x: 23, y: 20 },
      '090104': { x: 28, y: 20 },
      '090105': { x: 50, y: 20 },
      '090106': { x: 22, y: 11.5 },
      '090111': { x: 55, y: 14 },
      '090112': { x: 66, y: 14 },
      '090113': { x: 70, y: 14 },
      '090114': { x: 89, y: 11.5 },
      '090119': { x: 67, y: 6 },
      '090120': { x: 59.5, y: 6 },
      '090121': { x: 54, y: 6 },
      '090122': { x: 49, y: 6 },
      '090124': { x: 43.5, y: 6 }, 
      '090125': { x: 39, y: 6 },// 퍼센트 단위로 조정
   

    },
  },
  '2F': {
    image: require('../../image/공대2층.png'),
    rooms: {
      '090201': { x: 4, y: 30.5 },
      '090202': { x: 6, y: 22 },
      '090203': { x: 23, y: 22 },
      '090204': { x: 28, y: 22 },
      '090205': { x: 49, y: 22 },
      '090206': { x: 22, y: 11.5 },
      '090209': { x: 47, y: 13 }, 
      '090210': { x: 57, y: 13 },
      '090211': { x: 68, y: 13 },
      '090212': { x: 74, y: 13 },
      '090213': { x: 78, y: 13 },
      '090214': { x: 88, y: 13 },
      '090215': { x: 92, y: 4 },
      '090219': { x: 68, y: 4 },
      '090220': { x: 61.5, y: 4 },
      '090221': { x: 53, y: 4 },
      '090223': { x: 43, y: 4 },
      
      // 다른 방 좌표
    },
  },
  '3F': {
    image: require('../../image/공대3층.png'),
    rooms: {
      '090301': { x: 4, y: 29 },
      '090302': { x: 17, y: 29 },
      '090303': { x: 26, y: 29 },
      '090305': { x: 4, y: 21 },
      '090306': { x: 14, y: 21 },
      '090307': { x: 24, y: 21 },
      '090308': { x: 31, y: 21 },
      '090309': { x: 34, y: 21 }, 
      '090310': { x: 41, y: 21 },
      '090311': { x: 49, y: 21 },
      '090312': { x: 21, y: 11 },
      '090316': { x: 50, y: 12 },
      '090317': { x: 68, y: 12 },
      '090317-A': { x: 61, y: 12 },
      '090317-B': { x: 58, y: 12 },
      '090318': { x: 74, y: 12 },
      '090319': { x: 78, y: 12 },
      '090320': { x: 88, y: 12 },
      '090321': { x: 90, y: 3 },
      '090325': { x: 68, y: 3 },
      '090325-A': { x: 60, y: 3 },
      '090326': { x: 54, y: 3 },
      '090327': { x: 43, y: 3 },
      // 다른 방 좌표
    },
  },
  '4F': {
    image: require('../../image/공대4층.png'),
    rooms: {
      '090401': { x: 4, y: 30 },
      '090402': { x: 17, y: 30 },
      '090403': { x: 26, y: 30 },
      '090404': { x: 0, y: 21 },
      '090405': { x: 4.5, y: 21 },
      '090406': { x: 9.5, y: 21 },
      '090407': { x: 13, y: 21 },
      '090408': { x: 24, y: 21 },
      '090409': { x: 34, y: 21 }, 
      '090410': { x: 44, y: 21 },
      '090411': { x: 21, y: 11 },
      '090414': { x: 50, y: 13 },
      '090415': { x: 61, y: 13 },
      '090416': { x: 66.5, y: 13 },
      '090416-A': { x: 69, y: 13 },
      '090417': { x: 74, y: 13 },
      '090418': { x: 77, y: 13 },
      '090419': { x: 83, y: 13 },
      '090420': { x: 91, y: 13 },
      '090421': { x: 90, y: 3 },
      '090423': { x: 69, y: 3 },
      '090423-A': { x: 62, y: 3 },
      '090424': { x: 54, y: 3 },
      '090425': { x: 43, y: 3 },
      // 다른 방 좌표
    },
  },
  '5F': {
    image: require('../../image/공대5층.png'),
    rooms: {
      '090501': { x: 4, y: 30 },
      '090502': { x: 15, y: 30 },
      '090503': { x: 24, y: 30 },
      '090503-A': { x: 28, y: 30 },
      '090504': { x: 0, y: 22 },
      '090505': { x: 4.5, y: 22 },
      '090506': { x: 9.5, y: 22 },
      '090507': { x: 13.5, y: 22 },
      '090508': { x: 22, y: 22 },
      '090509': { x: 26, y: 22 }, 
      '090510': { x: 31, y: 22 },
      '090511': { x: 37, y: 22 },
      '090512': { x: 41, y: 22 },
      '090513': { x: 47, y: 22 },
      '090514': { x: 17.5, y: 12 },
      '090515': { x: 21, y: 12 },
      '090515-A': { x: 24, y: 12 },
      '090516': { x: 47, y: 13 },
      '090517': { x: 60, y: 13 },
      '090518': { x: 77, y: 13 },
      '090519': { x: 89, y: 13 },
      '090520': { x: 91, y: 4 },
      '090522-A': { x: 69, y: 4 },
      '090523': { x: 51, y: 4 },
      '090524': { x: 44, y: 4 },
      '090522': { x: 60, y: 4 },
      // 다른 방 좌표
    },
  },
  '6F': {
    image: require('../../image/공대6층.png'),
    rooms: {
      '090601': { x: 4, y: 35 },
      '090601-A': { x: 9.5, y: 35 },
      '090602': { x: 17, y: 35 },
      '090602-A': { x: 24, y: 35 },
      '090602-B': { x: 30, y: 35 },
      '090603': { x: 38, y: 35 },
      '090603-A': { x: 48, y: 35 },
      '090604': { x: 5, y: 21 },
      '090605': { x: 13.5, y: 21 },
      '090606': { x: 22, y: 21 },
      '090607': { x: 47, y: 21 }, 
      '090608': { x: 56, y: 21 },
      '090609': { x: 61, y: 21 },
      '090610': { x: 68, y: 21 },
      '090611': { x: 73, y: 21 },
      '090612': { x: 79, y: 21 },
      '090613': { x: 84, y: 21 },
      '090614': { x: 89, y: 21 },
      '090615': { x: 83, y: 6 },
      '090616': { x: 89, y: 6 },
      '090619': { x: 41, y: 6 },
      // 다른 방 좌표
    },
  },
  '7F': {
    image: require('../../image/공대7층.png'),
    rooms: {
      '090716': { x: 26.9, y: 7.5 },
      '090715': { x: 34.9, y: 7.5 },
      '090712': { x: 79.2, y: 7.5 },
      '090711': { x: 87.5, y: 7.5 },
      '090710': { x: 87.5, y: 26.5 },
      '090709': { x: 79.2, y: 26.5 },
      '090708': { x: 69.6, y: 26.5 },
      '090707': { x: 61.2, y: 26.5 },
      '090706': { x: 52.7, y: 26.5 },
      '090705': { x: 43.9, y: 26.5 },
      '090704': { x: 35.2, y: 26.5 },
      '090703': { x: 26.6, y: 26.5 },
      '090702': { x: 18.1, y: 26.5 },
      '090701': { x: 9, y: 26.5 },
      '090717': { x: 18, y: 7.5 },
    },
  },
  '8F': {
    image: require('../../image/공대8층.png'),
    rooms: {
      '090816': { x: 17, y: 9.5 },
      '090815': { x: 29.9, y: 9.5 },
      '090812': { x: 75.2, y: 9.5 },
      '090811': { x: 83.5, y: 9.5 },
      '090810': { x: 84.5, y: 28.5 },
      '090809': { x: 76.2, y: 28.5 },
      '090808': { x: 66.6, y: 28.5 },
      '090807': { x: 58.2, y: 28.5 },
      '090806': { x: 49.7, y: 28.5 },
      '090805': { x: 40.9, y: 28.5 },
      '090804': { x: 32.2, y: 28.5 },
      '090803': { x: 23.6, y: 28.5 },
      '090802': { x: 15.1, y: 28.5 },
      '090801': { x: 6, y: 28.5 },
    },
  },
  '9F': {
    image: require('../../image/공대9층.png'),
    rooms: {
      '090915': { x: 21, y: 11 },
      '090914': { x: 33, y: 11 },
      '090911': { x: 83.5, y: 11 },
      '090910': { x: 87.5, y: 29.5 },
      '090909': { x: 78.2, y: 29.5 },
      '090908': { x: 68.6, y: 29.5 },
      '090907': { x: 60.2, y: 29.5 },
      '090906': { x: 51.7, y: 29.5 },
      '090905': { x: 41.9, y: 29.5 },
      '090904': { x: 33.2, y: 29.5 },
      '090903': { x: 23.6, y: 29.5 },
      '090902': { x: 15.1, y: 29.5 },
      '090901': { x: 6, y: 29.5 },
    },
  },
  '10F': {
    image: require('../../image/공대10층.png'),
    rooms: {
      '091015': { x: 21, y: 11 },
      '091014': { x: 33, y: 11 },
      '091011': { x: 81.5, y: 11 },
      '091010': { x: 85.5, y: 29.5 },
      '091009': { x: 76.2, y: 29.5 },
      '091008': { x: 66.6, y: 29.5 },
      '091007': { x: 58.2, y: 29.5 },
      '091006': { x: 49.7, y: 29.5 },
      '091005': { x: 40.9, y: 29.5 },
      '091004': { x: 32.2, y: 29.5 },
      '091003': { x: 23.6, y: 29.5 },
      '091002': { x: 15.1, y: 29.5 },
      '091001': { x: 6, y: 29.5 },
    },
  },
  '11F': {
    image: require('../../image/공대11층.png'),
    rooms: {

      '091115': { x: 21, y: 10 },
      '091114': { x: 77, y: 10 },
      '091111': { x: 86.5, y: 10 },
      '091110': { x: 86.5, y: 29.5 },
      '091109': { x: 77.2, y: 29.5 },
      '091108': { x: 68.6, y: 29.5 },
      '091107': { x: 59.2, y: 29.5 },
      '091106': { x: 50.7, y: 29.5 },
      '091105': { x: 40.9, y: 29.5 },
      '091104': { x: 32.2, y: 29.5 },
      '091103': { x: 23.6, y: 29.5 },
      '091102': { x: 15.1, y: 29.5 },
      '091101': { x: 6, y: 29.5 },
      '091015': { x: 21, y: 10 },
      '091014': { x: 77, y: 10 },
      '091011': { x: 86.5, y: 10 },
      '091010': { x: 86.5, y: 29.5 },
      '091009': { x: 77.2, y: 29.5 },
      '091008': { x: 68.6, y: 29.5 },
      '091007': { x: 59.2, y: 29.5 },
      '091006': { x: 50.7, y: 29.5 },
      '091005': { x: 40.9, y: 29.5 },
      '091004': { x: 32.2, y: 29.5 },
      '091003': { x: 23.6, y: 29.5 },
      '091002': { x: 15.1, y: 29.5 },
      '091001': { x: 6, y: 29.5 },

    },
  },
  '12F': {
    image: require('../../image/공대12층.png'),
    rooms: {
      '091201': { x: 50, y: 26.5 },
    },
  },
  // 다른 층 추가
};

export default floors;