import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './styles'
import DragListItemRender from '../DragListItemRender'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const DragList = ({ data }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {
          data.map((item) => {
            return (
              <DragListItemRender item={item} />
            )
          })
        }
      </View>
    </GestureHandlerRootView>
  )
}

export default DragList