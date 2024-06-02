import React , { useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import floors from './engineeringFloor'
import Bottombar from '../../component/bottomBar'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SecondFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['2F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '090201') {
      additionalText = '\n';
    } else if (room === '090202') {
      additionalText = '\n';
    }

    Alert.alert('알림', `${room} 강의실입니다. ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('Gil', { roomId: room, startFloor: '2F', goalFloor: '2F' }); // startFloor와 goalFloor 전달
        },
      },
      {
        text: '아니오',
        onPress: () => console.log('아니오 버튼이 눌렸습니다.'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.outerContainer}
        contentContainerStyle={styles.innerContainer}
      >
      <ScrollView
        style={styles.outerContainer}
        contentContainerStyle={styles.innerContainer}
        horizontal = {true}
      >
      <Image style={styles.headerImage} source={currentImage} />
      {Object.keys(floors['2F'].rooms).map((roomId) => {
        const room = floors['2F'].rooms[roomId];
        const isRotated = [ '090203','090204', '090205','090212','090213','090220','090223','090225'].includes(roomId);
        return (
          <TouchableOpacity
            key={roomId}
            style={[styles.button, { top: `${room.y}%`, left: `${room.x}%` }]}
            onPress={() => showInfoAlert(roomId)}
          >
            <Text style={[styles.buttonText, { fontSize: 8 }, isRotated && styles.rotatedText]}>
              {roomId}
            </Text>
          </TouchableOpacity>
        );
      })}
      </ScrollView>
      </ScrollView>
      <Bottombar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'column',
  },
  headerImage: {
    width: windowWidth * 1.5,
    height: windowHeight * 1.5,
    resizeMode: 'stretch',
    aspectRatio: 1,
    marginBottom: 200,
  },
  
  button: {
    position: 'absolute',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  rotatedText: {
    transform: [{ rotate: '90deg' }],
  },
});

export default SecondFloorScreen;