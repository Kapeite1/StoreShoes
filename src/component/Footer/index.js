import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes'

export default function Footer() {
 return (
   <View>
     <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
     <View style={{flexDirection: 'row'}}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/1.png')} cost="140,90">
              Nike Air Max Dia
            </Shoes>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/2.png')} cost="450,90">
              Nike Air ST45
            </Shoes>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/5.png')} cost="669,90">
              Nike Air S25
            </Shoes>
          </View>
       </ScrollView>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'anton',
    fontSize: 24,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  }
})