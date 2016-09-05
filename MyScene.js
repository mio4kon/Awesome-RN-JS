/**
 * Created by mio4kon on 16/9/2.
 */

import React, {Component,PropTypes} from 'react';
import {View, Text,TouchableHighlight} from 'react-native';


export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    render() {
        return (
            <View>
                {/*第一行展示当前页的title*/}
                <Text>当前页面为: { this.props.title }</Text>
                {/*点击内容*/}
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>点击进入下一个页面</Text>
                </TouchableHighlight>
                {/*点击内容*/}
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>点击回到上一个页面</Text>
                </TouchableHighlight>
            </View>
        )
    }
}



