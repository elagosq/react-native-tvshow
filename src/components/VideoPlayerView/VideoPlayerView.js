import React,{Component} from 'react'
import {
    Text,
    View
} from 'react-native'

import styles from './styles'

import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation'

class VideoPlayerView extends Component{
          
    componentWillMount(){
      Orientation.lockToLandscape()
    }
    
    _back(){
        const { goBack } = this.props.navigation
        Orientation.lockToPortrait()
        goBack()
    }

    render(){        
        return(
           <View style={styles.container}>
               <VideoPlayer 
                  source={require('../../videos/video.mp4')}
                  title={this.props.title}
                  onBack={() => this._back()}
               />
           </View>  
        )
    }
}


export default VideoPlayerView