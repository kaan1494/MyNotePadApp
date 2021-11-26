  import React from 'react';
  import { StyleSheet, Text, View, ScrollView } from 'react-native';
  import ICommon from '../common/interfaces/ICommon';
  import Card from '../common/Card';
  import { TabItem } from 'react-native-elements/dist/Tab/Tab.Item';

  interface IProps extends ICommon{ }  
  interface IState{ }

  export default class Home extends React.Component<IProps, IState> {

    carsds = [
      {color: "#54c5b4" , count:1, title: "Main Notes" },
      {color: "#eb7988" , count:3, title: "School" },
      {color: "#8c587d" , count:5, title: "Daily Routines" },
      {color: "#78726b" , count:0, title: "Banks" },
      {color: "#3270b4" , count:0, title: "Social Media" },
      {color: "#3e96db" , count:0, title: "İmportant Days with Girlfriends :)" },
      {color: "#ffc434" , count:100, title: "Software to-do" },
      {color: "#eb7988" , count:0, title: "To be Taken" },
      {color: "#78726b" , count:0, title: "My Pivate Affairs" },
    ]

    constructor(p: IProps, s: IState){
      super(p, s)
    }

  render() {
    debugger;
    return (
      <ScrollView>
        <View style={styles.container}>
          {
             this.carsds.map((item, index)=> {
             return <Card key={`card_${index}`} color={item.color} count={item.count} title={item.title}></Card>
           })
          }
        </View>
      </ScrollView>

      );
    }
  }

const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding:6,
     flexDirection:"row",
     justifyContent:"space-between",
     flexWrap:"wrap"
  },
});
