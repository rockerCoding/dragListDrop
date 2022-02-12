import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const DragListItemRender = ({ item }) => {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      //context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      //translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      /* const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);

      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      } */
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });


  /* const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if(e.duration > 500)
    if (success) {
      console.log(`Long pressed for ${e.duration} ms!`);
    }
  }); */
  
      {/* <GestureDetector  gesture={longPressGesture}>
        <View style={{width: 20, height: 20, backgroundColor: 'red'}} />
      </GestureDetector> */}

  const longPressGesture = Gesture.LongPress().onStart((e) => console.log(e))
  return (
    <GestureDetector gesture={longPressGesture}>
      <Animated.View style={[styles.animatedContainer, rStyle]}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{item.id} - {item.title}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>

        </View>
      </Animated.View>
    </GestureDetector >
  )
}

export default DragListItemRender