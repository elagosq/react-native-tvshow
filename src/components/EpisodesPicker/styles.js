
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#181818'
},
row: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: 'black'
},
    textCancel: {color: '#f9f9f9', fontSize: 18},
    textList: {color: '#f9f9f9', fontSize: 18},
    textTitle: {color: 'white', fontSize: 21, fontWeight: '600'},
    header: {justifyContent: 'flex-end', alignItems: 'center', height: 60, backgroundColor: 'black', paddingBottom: 10},
    cancelButtonView: {position: 'absolute', right: 7, top: 25},
    seasonChecked: {flexDirection: 'row', justifyContent: 'space-between'} 
});

  export default styles;