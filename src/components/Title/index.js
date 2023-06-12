import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "../Title/style";

const Title = (props) => {
 return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>{props.text}</Text>
      </View>
    </SafeAreaView>
 )
}

export default Title;