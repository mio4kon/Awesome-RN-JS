/**
 * Created by mio4kon on 16/9/6.
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, Text, TouchableOpacity, View} from 'react-native';
import {createStore} from 'redux'


export default class ReduxSimpleEx extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 100
        }
        store.subscribe(()=> {
                this.setState(store.getState())
            }
        )
    }


    render() {
        console.log(this.state)
        return (
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{width: 100, height: 20}}>{this.state.count}</Text>
                <TouchableOpacity style={{width: 100, height: 20}} onPress={this.add.bind(this)}>
                    <Text>点击加一</Text>
                </TouchableOpacity>
            </View>
        )
    }

    add() {
        // this.setState({count: 200});
        store.dispatch({type: 'INCREMENT', state: this.state})
    }
}


const initialState = {
    count: 0
};
//reducer
function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case 'DECREMENT':
            return state.count - 1
        default:
            return state
    }
}

store
var store = createStore(counter)
//
// store.subscribe(function () {
//         console.log("state改变为" + store.getState())
//     }
// )




