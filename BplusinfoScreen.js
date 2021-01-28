import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

const fireImg = require('./assets/pictures/Fire.png');
const cycloneImg = require('./assets/pictures/cyclone.png');
const lightningImg = require('./assets/pictures/lightning1.png');

import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';

import { LinearGradient } from 'expo-linear-gradient';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default function BplusInfoScreen({
  textArrayFromProps,
  titleFromProps,
  maxScreensFromProps,
}) {
  const [text, setText] = useState('HI THERE');
  const [backgroundColor, setBackGroundColor] = useState('yellow');
  const [gestureName, setGestureName] = useState('none');
  const [currentScreen, setCurrentScreen] = useState(0);
  const textArray = [
    "Bigmo plus(b+) points are awarded to you if you're disciplined in meeting your saving goals.",
    'Using your earned b+ points gives you special powers within bigmo. \n These special powers give you an edge over the others who are using bigmo',
    'You get b+ points when you track your fitness and are meeting your fitness goals each day',
    'You also get b+ points when you unwrap your luck each week as a reward for being disciplined with your spending',
  ];
  const title = 'What are b+ points?';
  const maxScreens = 4;

  const onSwipeLeft = (gestureState) => {
    if (currentScreen !== maxScreens) {
      setCurrentScreen(currentScreen + 1);
    } else {
      setCurrentScreen(0);
    }
  };
  const onSwipeRight = (gestureState) => {
    if (currentScreen !== 0) {
      setCurrentScreen(currentScreen - 1);
    } else {
      setCurrentScreen(maxScreens);
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const finalScreenBplus = () => {
    return (
      <View style={styles.finalScreenContainer}>
        <View style={styles.finalScreenTitleContainer}>
          <Text style={styles.finalScreenTitle}>
            There are 3 levels with different rewards
          </Text>
        </View>
        <View style={styles.finalScreenMain}>
          <View style={styles.levelContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.levelText}>LEVEL 1</Text>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.imageContainer}>
                <Image source={fireImg} style={styles.fireImg} />
              </View>
              <View style={styles.bplusTextContainer}>
                <Text style={styles.bplusText}>1000b+</Text>
              </View>
            </View>
          </View>
          <View style={styles.levelContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.levelText}>LEVEL 2</Text>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.imageContainer}>
                <Image source={lightningImg} style={styles.lightningImg} />
              </View>
              <View style={styles.bplusTextContainer}>
                <Text style={styles.bplusText}>1500b+</Text>
              </View>
            </View>
          </View>
          <View style={styles.levelContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.levelText}>LEVEL 3</Text>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.imageContainer}>
                <Image source={cycloneImg} style={styles.cycloneImg} />
              </View>
              <View style={styles.bplusTextContainer}>
                <Text style={styles.bplusText}>2500b+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderBottomBars = () => {
    const arr = [];
    for (let i = 0; i <= maxScreens; i++) {
      arr.push(i);
    }
    return arr.map((item) => {
      return (
        <View
          key={item}
          style={{
            ...styles.bottomTab,
            backgroundColor: currentScreen === item ? 'black' : 'grey',
          }}
        ></View>
      );
    });
  };

  return (
    <GestureRecognizer
      onSwipeLeft={(state) => onSwipeLeft(state)}
      onSwipeRight={(state) => onSwipeRight(state)}
      config={config}
      style={styles.gestureRecognizer}
    >
      <LinearGradient
        //colors={['#d9dab0', '#f4f5db']}
        colors={['rgba(122, 219, 255, 0.52)', 'rgba(3, 231, 152, 0.52)']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>

          <View style={styles.contentContainer}>
            {currentScreen < 4 ? (
              <Text style={styles.contentText}>{textArray[currentScreen]}</Text>
            ) : (
              finalScreenBplus()
            )}
          </View>

          <View style={styles.bottomTabs}>{renderBottomBars()}</View>
        </View>
      </LinearGradient>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  gestureRecognizer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    // marginTop: HEIGHT / 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  contentText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#5E5E5F',
    textAlign: 'center',
  },
  bottomTabs: {
    flexDirection: 'row',
    flex: 1,
  },
  bottomTab: {
    height: 10,
    width: 40,
    backgroundColor: 'black',
    marginHorizontal: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  finalScreenContainer: {
    width: WIDTH,
    flex: 1,
    // backgroundColor: 'pink',
  },
  finalScreenTitleContainer: {
    alignItems: 'center',
  },

  finalScreenTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#5E5E5F',
  },
  finalScreenMain: {
    flex: 1,
  },

  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    //width: Platform.OS === 'ios' ? '80%' : WIDTH / 1.3,
    width: WIDTH / 1.3,
    justifyContent: 'space-around',
    flex: 1,
  },
  levelText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#5E5E5F',
  },

  rightContainer: {
    height: HEIGHT / 8,
    //backgroundColor: 'pink',
    justifyContent: 'space-between',
  },

  imageContainer: {
    backgroundColor: '#797979',
    height: 80,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#23FDFF',
  },

  fireImg: {
    height: 60,
    width: 60,
  },
  lightningImg: {
    height: 60,
    width: 60,
  },
  cycloneImg: {
    height: 60,
    width: 60,
  },
  bplusTextContainer: {
    alignItems: 'center',
  },
  bplusText: {
    color: '#5E5E5F',
  },
});
