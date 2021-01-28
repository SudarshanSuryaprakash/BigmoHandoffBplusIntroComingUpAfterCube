import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, Animated } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

import * as Progress from 'react-native-progress';

export default () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(1);
    }, 2500);
    setTimeout(() => {
      setCurrentScreen(2);
    }, 5000);
    setTimeout(() => {
      setCurrentScreen(3);
    }, 7500);
    setTimeout(() => {
      setCurrentScreen(4);
    }, 10000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProgressWidth(0.1);
    }, 1000);
    setTimeout(() => {
      setProgressWidth(0.2);
    }, 2000);
    setTimeout(() => {
      setProgressWidth(0.3);
    }, 3000);
    setTimeout(() => {
      setProgressWidth(0.4);
    }, 4000);
    setTimeout(() => {
      setProgressWidth(0.5);
    }, 5000);
    setTimeout(() => {
      setProgressWidth(0.6);
    }, 6000);
    setTimeout(() => {
      setProgressWidth(0.7);
    }, 7000);
    setTimeout(() => {
      setProgressWidth(0.8);
    }, 8000);
    setTimeout(() => {
      setProgressWidth(0.9);
    }, 9000);
    setTimeout(() => {
      setProgressWidth(1);
    }, 10000);
    // const interval = setInterval(() => {
    //   setProgressWidth(progressWidth + 0.1);
    // }, 1000);
    // if (progressWidth === 1) {
    //   clearInterval(interval);
    // }
  }, []);

  const titleArray = [
    'That was just a trial',
    'Each week, you get to play',
    'Rewards get bigger each week',
    "You won't get a chance",
    'Your grit brings you luck',
  ];
  const textArray = [
    'You could get a spin each week',
    'When you are on track with your saving goals',
    '£s and b+ points',
    "If you're off the mark",
    'Luck that gets bigger each week',
  ];
  return (
    <LinearGradient
      colors={['rgba(122, 219, 255, 0.52)', 'rgba(3, 231, 152, 0.52)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Unwrap your luck</Text>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headingText}>{titleArray[currentScreen]}</Text>

            <Text style={styles.contentText}>{textArray[currentScreen]}</Text>
          </View>
          <Progress.Bar
            progress={progressWidth}
            width={310}
            unfilledColor='grey'
            color='black'
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#B2F3E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    // marginTop: HEIGHT / 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: WIDTH,
  },
  textContainer: {
    width: '98%',
  },
  headingText: {
    color: '#531B93',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 3,
  },
  contentText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#5E5E5F',
    textAlign: 'center',
    marginTop: 3,
  },
  progressContainer: {
    width: '80%',
    height: 10,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
});
