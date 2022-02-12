import { View, Text, Alert } from 'react-native'
import React from 'react'

import { styles } from './styles'
import DragList from '../../Components/DragList'

import listTasks from '../../Database/Tasks'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const HomeScreen = () => {


  

  
  


  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Task List</Text>
        </View>
      </View>

      

      <View style={styles.bottomContainer}>
        <DragList
          data={listTasks}

        />
      </View>

    </View>
  )
}

export default HomeScreen