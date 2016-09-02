/**
 * Created by mio4kon on 16/8/18.
 */
import React from 'react'
import {
    AppRegistry,
    Text,
    Image,
    StyleSheet,
    View,
    ListView,
} from 'react-native';


var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

class ListMovies extends React.Component {

    //构造函数,stata发生改变会调用render()
    constructor(props) {
        super(props)
        this.state = {
            //dataSource是ListView的数据源
            dataSource: new ListView.DataSource({
                //ListView的一处优化
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            //用来区分是否加载完数据
            loaded: false
        };
    }


    //生命周期,View被渲染完后会调用
    componentDidMount() {
        //获取数据
        this.fetchData();
    };

    //加载网络数据
    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true
                });
            })
            .done();
    }


    render() {
        if (this.state.loaded) {
            //显示列表
            return this.renderListMovies(this.state.dataSource);
        }

        //显示loading界面
        return this.renderLoadingView();
    }

    //movie
    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据……
                </Text>
            </View>
        );
    }

    renderListMovies() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        )
    }

}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});


export default ListMovies;