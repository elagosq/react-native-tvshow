import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const Header = props => {
    const {navigate} = props.navigation
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggle()}>
                <Icon 
                    name="bars"
                    color="white"
                    size={25}
                />
            </TouchableWithoutFeedback>           
            <TouchableWithoutFeedback onPress={() => navigate('Search')}>
            <Icon 
                name="search"
                color="white"
                size={25}
            />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Header