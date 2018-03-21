    
import { StyleSheet,Dimensions } from 'react-native'

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex:1,
        width,     
        height,
        borderTopWidth: 2,
        borderColor: 'black',                      
    }
});

export default styles;