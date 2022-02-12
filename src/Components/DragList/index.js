import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './styles'
import DragListItemRender from '../DragListItemRender'


const DragList = ({ data }) => {
  return (

      <View style={styles.container}>
        {
          data.map((item) => {
            return (
              <DragListItemRender item={item} />
            )
          })
        }
      </View>

  )
}

export default DragList