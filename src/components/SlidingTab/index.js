import React,{Component} from 'react';
import {Dimensions, Animated, View,Text,TouchableOpacity} from 'react-native';

import styles from './styles';

import colors from '../../styles/colors';
const colorTheme = colors.themeColor;

const { width } = Dimensions.get("window");

class SlidingTab extends Component{

    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
      };

    handleSlide = type => {
        let {
            active,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
      };

    render(){

        let {
            xTabOne,
            xTabTwo,
            translateX,
            active
          } = this.state;

        return(
            <View
              style={{
                  backgroundColor:'white',
                  borderRadius:15,
                  flexDirection: "row",
                  width:'90%',
                  height:'10%',
                  marginLeft:'auto',
                  marginRight:'auto',
                  marginTop: 20,
                  marginBottom: 20,
                  position: typeof this.props.position == 'object' ? 'absolute' : 'relative',
                  zIndex:5,
                  ...this.props.position
              }}
          >

              <Animated.View
                  style={{
                      position: "absolute",
                      width: "50%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      backgroundColor: colorTheme,
                      borderRadius: 15,
                      transform: [
                          {
                              translateX
                          }
                      ]
                  }}
              />
              <TouchableOpacity
                  style={{
                    ...styles.tabStyle,
                    borderRightWidth: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                }}
                  onLayout={event =>
                    this.setState({
                        xTabOne: event.nativeEvent.layout.x
                    })
                  }
                  onPress={() =>{
                        this.setState({ active: 0 }, () =>
                            this.handleSlide(xTabOne)
                        );
                        this.props.scroll(-1*this.props.scrollViewWidth);             
                    } 
                  }
              >
                  <Text style={{fontWeight:'bold',color: active === 0 ? "#fff" : colorTheme}}>
                      {this.props.labelTab1 ? this.props.labelTab1  : 'SemNome'}
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={{
                      ...styles.tabStyle,
                      borderLeftWidth: 0,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                  }}
                  onLayout={event =>
                    this.setState({
                        xTabTwo: event.nativeEvent.layout.x
                    })
                  }
                  onPress={() => {
                    this.setState(
                      { active: 1 }, 
                      () => this.handleSlide(xTabTwo)
                    );           
                      this.props.scroll(this.props.scrollViewWidth);     
                  }
                    
                  }
              >
                  <Text style={{fontWeight:'bold', color: active === 1 ? "#fff" : colorTheme}}>
                      {this.props.labelTab2 ? this.props.labelTab2 : 'SemNome'}
                  </Text>
              </TouchableOpacity>
          </View>
        )
    }
}

export default SlidingTab;