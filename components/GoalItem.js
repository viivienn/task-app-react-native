import React from 'react'
import { View, Text, StyleSheet, TouchableOppacity } from 'react-native'

const GoalItem = (props) => {
  return (
   <TouchableOppacity onPress={props.onDelete}>
   <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOppacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default GoalItem
