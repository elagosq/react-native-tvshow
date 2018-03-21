
import { StyleSheet,Dimensions } from 'react-native'

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
nameContainer: {
    backgroundColor: 'transparent'
},
header: {
    backgroundColor: '#181818',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
},
closeButton: {
    position: 'absolute',
    top: 15,
    right: 10,
    zIndex: 2
},
headerText: {
    color: 'white',
    fontSize: 20
},
headerWithIcon: {
    flexDirection: 'row',
    alignItems: 'center'
},
iconDown: {
    marginLeft: 5
},
titleShow: {
    fontSize: 35,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'white'
},
container: {
   flex: 1, 
   backgroundColor: '#181818',
   borderWidth: 1,
   borderColor: '#d6d7da',  
},
thumbnail: {
    width: width,
    height: 300
},
buttonPlay: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
},
iconPlay: {
    opacity: 0.7,
    backgroundColor: 'transparent'
},
descriptionContainer: {
    paddingHorizontal: 20
},
subtitle: {
    flexDirection: 'row'
},
subTitleText: {
    marginRight: 20
},
text: {
    color: '#b3b3b3',
    fontSize: 16
},
shareListIcons: {
   flexDirection: 'row',
   marginVertical: 30 
},
listIcon: {
    height: 25
},
shareIcon: {
    height: 25
},
myListIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40
},
myShareIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
},
description: {
    marginVertical: 10
},
light: {
    fontWeight: '200'
}
});

  export default styles;