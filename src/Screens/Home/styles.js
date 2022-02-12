import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextContainer: {
    width: '80%',
    height: '60%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRadius: 50

  },
  titleText: {
    fontSize: 40,
    color: 'white',
  },  

  bottomContainer: {
    flex: 4,
  }
})