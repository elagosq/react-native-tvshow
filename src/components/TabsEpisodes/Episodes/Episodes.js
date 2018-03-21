import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableWithoutFeedback, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import {replaceHttps, removeHtmlTags} from '../../../lib' 
class Episodes extends Component{

    /*getThumbnail(item){
        const localImagePath = require('../../images/default-image.png')
        return item.image ? {uri: replaceHttps(item.image.original)} : localImagePath
    }*/

    renderEpisodes(){          
       const res = this.props.episodes.map((item,i) => {
            const img = item.image == null ? 'https://static.tvmaze.com/uploads/images/medium_landscape/76/190262.jpg': item.image.medium      
            return (
                <View style={styles.container} key={i}>
                    <View style={styles.videoEpisode}>
                        <ImageBackground style={styles.image} source={{uri: img}}>
                            <View style={styles.buttonPlay}>
                                <TouchableWithoutFeedback>
                                    <View style={{backgroundColor: 'transparent'}}>
                                        <Icon 
                                            style={styles.iconPlay}
                                            name="play-circle"
                                            size={30}
                                            color="white"
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </ImageBackground>
                        <View style={styles.episodeName}>
                            <Text style={styles.text}>{item.number}. {item.name}</Text>
                            <Text style={styles.text}>{item.runtime}</Text>
                        </View>
                    </View>
                    <Text style={styles.summary}>{removeHtmlTags(item.summary)}</Text>
                </View>
            )
        });
        return res
    }
    render(){       
        return (          
                <View style={styles.renderEpisodes}>
                    {this.renderEpisodes()}
                </View>
        )
    }
}

export default Episodes