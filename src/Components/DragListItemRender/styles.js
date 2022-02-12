import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    backgroundColor: 'lightgrey',
    marginTop: 5,
    elevation: 5
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'green',
    paddingLeft: 15
  },
  titleText: {
    color: 'white',
  },
  descriptionContainer: {
    flex: 3,
    backgroundColor: 'white',
    padding: 5,
  },
  descriptionText: {
    fontSize: 10
  },
  animatedContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})