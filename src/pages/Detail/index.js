import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../component/Dot';
import SizeShoes from '../../component/SizeShoes'
import Button from '../../component/Button'
import Footer from '../../component/Footer'

export default function Detail({ navigation  }) {
  
  navigation.setOptions({ title: 'Nike Air Max'});
  
 return (
   <ScrollView style={styles.container}>
     <Image
      source={require('../../assets/detail.png')}
      style={styles.image}
     />
     <View>
      <View>
        <View>
          <Text style={[styles.title, {fontSize: 24}]}>R$ 280,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, {fontSize: 30}]}>Nike Air Max</Text>
        </View>
      </View>

      <View style={styles.dotContainer}>
        <Dot color="#2379f4"/>
        <Dot color="#fb6e53"/>
        <Dot color="#ddd"/>
        <Dot color="#000"/>
      </View>

      <View style={{flexDirection: 'row', width: '100%'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
          <SizeShoes bgColor="#17181a" color="#fff">40</SizeShoes>
          <SizeShoes>37</SizeShoes>
          <SizeShoes>39</SizeShoes>
          <SizeShoes>42</SizeShoes>
        </ScrollView>
      </View>

      <View style={styles.textContent}>
        <Text style={styles.textTitle}> Nike Air Max</Text>
        <Text style={styles.textContent}>
        O Nike Air Max 97 oferece uma atualização elegante de um ícone de corrida. Cores modernas e uma mistura de couro autêntico e sintético na parte de cima proporcionam um look elegante. E, é claro, você ainda tem a unidade de Max Air de comprimento total que revolucionou o mundo das corridas nos anos 90.
        </Text>
        <Text style={styles.textList}>
          - Categoria: Amortecimento
        </Text>
        <Text style={styles.textList}>
          - MAterial: Mesh
        </Text>
      </View>
      <Button/>

      <View style={styles.line}/>

      <Footer/>
      
     </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
  },
  title: {
    fontFamily: 'anton',
    paddingHorizontal: '2%',
  }, 
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: '2%',
  }
})