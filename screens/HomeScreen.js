import { StyleSheet, Text, Image, View, SafeAreaView} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image 
            source={require('../assets/cabular_logo.png')}
            style={{
            width: 100, height:100, resizeMode: 'contain',
        }}
        />

      <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: 'blue'
    },
});