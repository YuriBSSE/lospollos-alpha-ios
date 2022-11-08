// @ts-nocheck
import { StyleSheet, Text, View ,SafeAreaView,StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import GlobalFont from 'react-native-global-font'
import "react-native-gesture-handler"
import Toast from 'react-native-toast-message';
import NetInfo from "@react-native-community/netinfo";
import Btn from './components/Btn'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import WifiIcon from "react-native-vector-icons/Feather"
import colors from './assets/colors/colors'

export default function App() {
  // @ts-ignore
  if (Text.defaultProps == null) Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
  const [connection, setConnection] = useState(true)

  useEffect(() => {
    SplashScreen.hide()
    const fontName = 'FredokaOne-Regular'
    GlobalFont.applyGlobal(fontName)
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setConnection(state.isConnected)
    });
    return () => {
      unsubscribe();
    }
  }, [])

  if (!connection) {
    return (
      <View style={styles.parentCon}>
        <WifiIcon
        color={colors.themeblue}
          name="wifi-off"
          size={responsiveFontSize(10)}
        />
        <Text style={styles.heading}>Oops</Text>
        <Text style={{color: 'black'}}>There is no internet connection</Text>
        <Text style={{color: 'black'}}>Please check your internet connection</Text>
        <View style={styles.btnCon}>
          <Btn
            call={() => console.log('reload app')}
            text={"Try Again"}
          />
        </View>
      </View>
    )
  }

  
  const toastConfig = {
    error: ({ text1, props }) => (
      <View
        style={styles.errCont}>
        <Text style={styles.errText}>{text1}</Text>
      </View>
    ),
  };

  return (
      <View style={{flex:1,backgroundColor:"white"}}>
        
        <SafeAreaView style={{flex:1}}>
          <StatusBar
          backgroundColor={"white"}
          barStyle='dark-content'
          />
        <Provider store={store}>
            <Routes />
            <Toast config={toastConfig} />
        </Provider>
      </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  parentCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnCon: {
    marginTop: responsiveFontSize(1),
    width: '50%'
  },
  heading: {
    fontSize: responsiveFontSize(3),
    color: colors.themeblue,
    marginVertical: responsiveFontSize(1)
  },
  errCont: {
    paddingVertical: responsiveHeight(1),
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: responsiveFontSize(0.75),
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: "tomato"
  },
  errText: {
    paddingHorizontal: responsiveFontSize(3),
    fontSize: responsiveFontSize(1.5),
    fontWeight: "bold",
    color: "#000000"
  }
});
