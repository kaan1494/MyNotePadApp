import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './AppContainer'
import {i18n} from "./common/loc"
import * as Localization from 'expo-localization'


interface IProps  { }  
interface IState{ 
  locale: string
}
console.warn("something")
export default class App extends React.Component<IProps,IState> {

  constructor(p: IProps, s: IState) {
    super(p, s);
    this.state = {
      locale: "tr" //Localization.locale
    }
  }

  t = (scope:string, options: any) => {
    return i18n.t(scope, { locale:this.state.locale , ...options });
  }

  setLocale = (locale: string) =>  {
    this.setState({
      locale
    });
  }

  render() {
    return (
      <AppContainer
        screenProps={{
          locale:this.state.locale,
          t: this.t
        }}
      ></AppContainer>
    );
  }
}

function BadLogboxStack() {
  console.warn('I have a useless stack!');
  return <View></View>;
}