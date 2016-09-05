/**
 * Created by mio4kon on 16/9/2.
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, Text, TouchableHighlight, View} from 'react-native';

import MyScene from './MyScene'

export default class NavigatorDemo extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{title: '初始页面', index: 0}}
                renderScene={(route, navigator) => {

                    return (
                        <MyScene
                            title={route.title}
                            onForward={ () => {
                                const nextIndex = route.index + 1;
                                navigator.push({
                                    title: '页面- ' + nextIndex,
                                    index: nextIndex,
                                });
                            }}

                            onBack={() => {
                                if (route.index > 0) {
                                    navigator.pop();
                                }
                            }}
                        />
                    )
                }}
            />
        )
    }
}



