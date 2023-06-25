import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

const Title = ({text, style}) => {
 return (
    <SafeAreaView>
      <View>
        <Text style={[styles.title, style]}>{text}</Text>
      </View>
    </SafeAreaView>

    
 )
}

export default Title;