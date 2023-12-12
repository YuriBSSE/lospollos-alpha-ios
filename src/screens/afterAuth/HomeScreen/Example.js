// @ts-nocheck
import * as React from 'react';
import { Text, View, StyleSheet,PanResponder,Animated,ScrollView,Dimensions} from 'react-native';


const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
// You can import from local files

export default class Example extends React.Component {
  constructor(props){
    super(props);
    this.minTop = 100;
    this.maxTop = 500;
    this.state={
      AnimatedTop:new Animated.Value(0),
    }
  }

  componentWillMount(){
    let that = this;
    this._previousTop = 100;
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder(){
        return true;
      },
      onPanResponderGrant(){
        that._previousTop = that.state.AnimatedTop.__getValue();
        return true;
      },
      onPanResponderMove(evt,gestureState){
        let currentTop = that._previousTop + gestureState.dy;
        that.state.AnimatedTop.setValue(that._previousTop+gestureState.dy);

      },
      onPanResponderRelease(){

      }
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.overlay,{top:this.state.AnimatedTop}]}
          {...this._panResponder.panHandlers}
        >
          <View style={{height:200,backgroundColor:"black"}}></View>
          <View>
            <ScrollView
              style={{height:500}}
            >
              <View style={{backgroundColor:"blue",height:200}}></View>
              <View style={{backgroundColor:"yellow",height:200}}></View>
              <View style={{backgroundColor:"pink",height:200}}></View>
              <View style={{backgroundColor:"red",height:200}}></View>
            </ScrollView>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  overlay:{
    position:"absolute",
    width:WINDOW_WIDTH,
    height:WINDOW_HEIGHT-100,
  }
});