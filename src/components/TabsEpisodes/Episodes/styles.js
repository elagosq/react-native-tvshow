  
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
container: {    
    marginHorizontal:20,           
},
buttonWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
},
buttonText: {
    color:'white'
},
iconDown: {
    marginLeft: 5
},
renderEpisodes: {
    marginTop: 15,
    position:'absolute',
    top:0,   
    left:0,
    right:0,
    bottom:0       
},
image: {    
    width: 150,
    height: 80,
    marginRight: 10
},
buttonPlay: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
},
episodeName:{
    marginVertical:20,
    justifyContent: 'center'
},
videoEpisode: {
    flexDirection: 'row'
},
text: {
    color: 'white'
},
summary: {
    color: 'grey',
    marginTop:10,
    marginBottom: 20
}   
});

  export default styles;