import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, _Text } from 'react-native';
import ICommon from '../common/interfaces/ICommon';
import Icon from 'react-native-vector-icons/FontAwesome' ;
import {  Input, Button, Text } from 'react-native-elements';



interface IProps  {
    title: string,
    color: string,
    count: number
}  
interface IState {
    title: string,
    color: string,
    count: number

}

const width = Dimensions.get("window").width;

export default class Card extends React.Component<IProps,IState> {

  constructor(p: IProps, s: IState) {
    super(p, s);
    this.state={
        color:this.props.color,
        title:this.props.title,
        count:this.props.count
    }
  }

  render()  {
       return (
           <View style= {styles.container}>
               <TouchableOpacity
                 style={[styles.touchable, { backgroundColor: this.state.color }]}
               >
                 <Text h4 >{this.state.title}</Text>
                 <Text h4 >{this.state.count}</Text>
             </TouchableOpacity>
          </View>
      );
  }

}

const styles = StyleSheet.create({

    container:{
        marginTop:20,
        width: (width - 30) / 2,
        height: (width - 30) / 2,
        borderRadius: 10
    
    },
    touchable:{
        flex:1, 
        width: (width - 30) / 2,
        height: (width - 30) / 2,
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center"
    }
})

