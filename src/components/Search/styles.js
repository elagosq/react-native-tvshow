
import { StyleSheet, Dimensions } from 'react-native'

const { width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
},
header: {
    height: 40,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderColor: '#3a3a3a',
    paddingBottom: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
},
searchIcon: {
    position: 'absolute',
    top: 5,
    left: 15,
    zIndex: 1,
    backgroundColor:'transparent'
},
iconInputClose: {
    position: 'absolute',
    top: 5,
    right: 90,
    backgroundColor: 'transparent',
    zIndex: 1
},
input: {
    width: width - (width / 4),
    height: 35,
    backgroundColor: '#323232',
    marginHorizontal: 10,
    paddingLeft: 30,
    borderRadius: 3,
    color: 'grey'
},
cancelButtonText: {
    color: 'white'
},
image: {
    marginRight: 5,
    width: 115,
    height: 170
}
});

  export default styles;