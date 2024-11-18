import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TextInput, Pressable, ImageBackground } from 'react-native';
import styles from './constants/styles';
import { Svg, Image, Ellipse, ClipPath } from 'react-native-svg'; // Image bileşenini SvgImage olarak değiştirdik
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, runOnJS, withSequence, withSpring } from 'react-native-reanimated';
import React, { useState } from 'react';


export default function App() {
  const [isRegistering, setisRegistering] = useState(false);
  const { width, height } = Dimensions.get('window'); // Get the dimensions of the screen

  const imagePosition = useSharedValue(1); // Create a shared value for the image position
  const formPosition = useSharedValue(1); // Create a shared value for the form position

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0]);
    return {
      transform: [{
        translateY: withTiming(interpolation, { duration: 850 })
        // translateX: withTiming(interpolation, { duration: 500 }) // yatay olarak istersek
      }]
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [{ translateY: withTiming(interpolation, { duration: 850 }) }]
    };
  });

  const xContainerAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360])
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 1500 }),
      transform: [{ rotate: withTiming(interpolation + 'deg', { duration: 500 }) }]
    };
  })

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      runOnJS(setisRegistering)(false);
    }
  };
  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      runOnJS(setisRegistering)(true);
    }
  };
  const animatedFormHandler = useAnimatedStyle(() => {
    return {
      opacity: imagePosition.value === 0 ? withDelay(
        250, withTiming(1, { duration: 1500 })
      ) : withTiming(0, { duration: 300 })
    }
  });
  const formBtnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formPosition.value }]
    }
  });

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[{
        position: 'absolute', top: 0, right: 0, left: 0, bottom: 0
      },
        imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}
        //Aşğıdaki kodu ekleyerek resmi oval yapabiliriz. 
        //(ClipPath ve Ellipse bileşenlerini eklemeyi unutmayın)
        >
          <ClipPath id='clipPathId'>
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require('./assets/bg.jpg')}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio='xMidYMid slice' // This will make the image fit the screen
            clipPath="url(#clipPathId)"

          />
        </Svg>
        <Animated.View style={[styles.xContainer, xContainerAnimatedStyle]}>
          <Text onPress={() => imagePosition.value = 1}>X</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.btn}
            onPress={loginHandler}>
            <Text style={styles.btnTxt}>LOG IN</Text>
          </Pressable>
        </Animated.View>
      </View>
      <Animated.View style={buttonAnimatedStyle}>
        <Pressable style={styles.btn}
          onPress={registerHandler}>
          <Text style={styles.btnTxt}>REGISTER</Text>
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.formContainer, animatedFormHandler]}>
        {isRegistering && (
          <TextInput placeholder='Full Name' placeholderTextColor='black' style={styles.txtINP} />
        )}

        <TextInput placeholder='E-mail' placeholderTextColor='black' style={styles.txtINP} />
        <TextInput placeholder='Password' placeholderTextColor='black' style={styles.txtINP} />

        <View>
          <Animated.View style={[styles.formBtn, formBtnAnimatedStyle]}>
            <Pressable onPress={() => formPosition.value = withSequence(withSpring(0.65), withSpring(1))}>
              <Text style={styles.formBtnTxt}>{isRegistering ? "REGISTER" : "LOG IN"}</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>

    </Animated.View>
  );
}

