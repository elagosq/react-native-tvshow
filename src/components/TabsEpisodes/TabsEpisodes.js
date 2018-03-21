import React, {Component } from 'react'
import {View, StyleSheet,Dimensions} from 'react-native'
import {TabViewAnimated, TabBar} from 'react-native-tab-view'
import Episodes from './Episodes/Episodes'
import Trailers from './Trailers/Trailers'

import styles from './styles'

class TabsEpisodes extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            routes: [
                {key:'1', title: 'Episodes'},
                {key:'2', title: 'Trailers & More'}
            ]
        }
    }

    _handleChangeTab = (index) => {
        this.setState({index})
    }

    _renderHeader(props){
        return <TabBar {...props} />
    }

    _renderScene = ({route}) => {
        switch(route.key){
            case '1':
                return <Episodes                                                                   
                            episodes={this.props.data} 
                        />
            case '2':
                return <Trailers />
            default: 
                return null
        }
    }
    render(){
        return (
            <TabViewAnimated 
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleChangeTab}               
            />
        )
    }
}

export default TabsEpisodes; 