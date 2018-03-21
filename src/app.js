import React, {Component} from 'react'
import {
    Text,
    View,  
    ScrollView
} from 'react-native'

import {connect} from 'react-redux'

import Header from './components/Header/Header'
import List from './components/List/List'
import Menu from './components/Menu/Menu'
import Slide from './components/Slider/Slider'
import Genres from './components/Genres/Genres'

import SideMenu from 'react-native-side-menu'

import styles from './styles'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            itemSelected: 'Home'
        }
        this.getTwoRows = this.getTwoRows.bind(this)
        this.itemSelected = this.itemSelected.bind(this)
    }  

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    itemSelected(item){
        this.setState({
            itemSelected: item,
            isOpen: false
        })
    }

    updateMenu(isOpen){
        this.setState({isOpen})
    }

    getTwoRows(){
        const { shows } = this.props              
        const array = shows.slice(0)
        const val = Math.floor(array.length / 2)
        const newArray = array.splice(0, val)
        return [
            array,
            newArray
        ]
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <SideMenu
                    menu={<Menu 
                        navigation={this.props.navigation}
                        itemSelected={this.itemSelected} 
                        itemSelectedValue={this.state.itemSelected}
                    />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    style={{flex: 1}}
                >
                    <ScrollView style={[{flex: 1}, styles.container]}>
                        <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />
                        {this.state.itemSelected == 'Home' ? <View style={{flex: 1}}>
                            <Slide />
                            <List
                                getTwoRows={this.getTwoRows} 
                                navigation={this.props.navigation}
                            />
                        </View> : 
                        <Genres
                            navigation={this.props.navigation} 
                            item={this.state.itemSelected}
                        />}
                    </ScrollView>
                </SideMenu>
            </View>
        )
    }
}

export default connect(state => ({shows: state.shows}))(App)
