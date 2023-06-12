
import React from 'react';
import Home from './src/screens/Home';
import Title from './src/components/Title';
import { SafeAreaView, View } from 'react-native';

const App = () => {
  return (

    <SafeAreaView>
      <View>
        <Home/>
      </View>
    </SafeAreaView>   

  )
}

export default App;
