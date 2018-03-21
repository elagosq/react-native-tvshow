import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Share,
    Animated
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TabsEpisodes from './../TabsEpisodes/TabsEpisodes'
import * as Animatable from 'react-native-animatable'
import TextGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation'

import {replaceHttps, getYear, removeHtmlTags} from '../../lib' 

const {width,height} = Dimensions.get('window')

import styles from './styles'

class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
          mesaures:0,
          header: false,
          animation:''
        }
    }   

    componentWillMount() {
        Orientation.lockToPortrait()
    }

    onShare(){
        Share.share({
            title: 'Designated Survivor',
            url: 'www.youtube.com',
            message: 'Awesome Tv Show'
        }, {
            //android
            dialogTitle: 'Share this awesome content',
            //ios
            excludeActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }

    getSeason = (season) => {
        this.setState({
            currentSeason: season
        })
    }

    renderThumbnail(){
        const {params} = this.props.navigation.state
        const {episodes} = params.item.details
        const localImagePath = require('../images/default-image.png');
        return episodes[0].image ? {uri : replaceHttps(episodes[0].image.original) } : localImagePath
    }

    getLastSeason = () => {
        const {params} = this.props.navigation.state
        const {episodes} = params.item.details
        return episodes[episodes.length-1].season
    }

    getNumOfEpisodes(){
        const {params} = this.props.navigation.state
        const {episodes} = params.item.details
        return episodes.length
    }

    getCast(){
        const {params} = this.props.navigation.state
        const { cast } = params.item.details       
        const personCast = []       
          
        personCast.push(cast.slice(0))        
        
        return personCast.join(", ");
    }

    resumeDescription(text){
        const newText = text.split(".")
        return removeHtmlTags(newText[0]) + ". " + removeHtmlTags(newText[1])
    }

    handleScroll = (event) => {
        if(event.nativeEvent.contentOffset.y > this.state.mesaures){
            this.setState({
               header:true,
               animation:'slideInDown'
            })
        }else{
           this.setState({
               header:false
           })
        }
    }

    render(){
        console.log(this.props.navigation)       

        const {goBack} = this.props.navigation
        const {params} = this.props.navigation.state
        const {episodes} = params.item.details
        const {navigate} = this.props.navigation
        const {name} = params.item
        const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = params.item.details
        return (
            <View style={{flex: 1}}>
                <TouchableHighlight 
                    style={styles.closeButton}
                    onPress={() => goBack()}
                >
                    <Icon 
                        name="close"
                        color="white"
                        size={18}
                    />
                </TouchableHighlight>
                {this.state.header ? <Animatable.View animation={this.state.animation} style={styles.header}>
                  <Text style={styles.headerText}>{name}</Text>
                 </Animatable.View>:null}             
                <ScrollView
                onScroll={this.handleScroll} 
                style={styles.container}>
                    <ImageBackground 
                        style={styles.thumbnail}
                        source={this.renderThumbnail()}
                    >
                        <View style={styles.buttonPlay}>
                            <TouchableWithoutFeedback
                                onPress={() => navigate('Video', {name: name})}
                            >
                                <View>
                                    <Icon 
                                        style={styles.iconPlay}
                                        name="play-circle"
                                        size={90}
                                        color="white"
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.nameContainer}
                            onLayout={({nativeEvent}) => {
                                this.setState({
                                    measures: nativeEvent.layout.y
                                })
                            }}                        
                        >
                            <TextGradient colors={['transparent', '#181818', '#181818']}>
                                <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                            </TextGradient>
                        </View>
                    </ImageBackground>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.subtitle}>
                            <Text style={[styles.text, styles.subTitleText]}>{getYear(year)}</Text>
                            <Text style={[styles.text, styles.subTitleText]}>{this.getNumOfEpisodes()}</Text>
                            <Text style={[styles.text, styles.subTitleText]}>{this.getLastSeason()} Season</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={[styles.text, styles.light]}>{this.resumeDescription(description)}.</Text>
                        </View>
                        <Text style={[styles.text]}>Cast: {this.getCast()}. </Text>
                        <View style={styles.shareListIcons}>
                            <View style={styles.myListIcon}>
                                <IonIcons
                                    style={styles.listIcon} 
                                    name="md-checkmark"
                                    color="grey"
                                    size={25}
                                />
                                <Text style={styles.text}>My List</Text>
                            </View>
                            <TouchableHighlight onPress={this.onShare}>
                                <View style={styles.myShareIcon}>
                                    <Icon 
                                        style={styles.shareIcon}
                                        name="share-alt"
                                        color="grey"
                                        size={25}
                                    />
                                    <Text style={styles.text}>Share</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View                   
                      onLayout={({nativeEvent}) => {
                                this.setState({
                                    measuresSeason: nativeEvent.layout.y + 10
                                })
                            }}>
                        <TabsEpisodes
                            seasons={season}
                            getSeason={this.getSeason}
                            navigation={this.props.navigation} 
                            data={episodes}                        
                        />
                    </View>
                </ScrollView>
            </View>
        )     
    }
}

export default Details;