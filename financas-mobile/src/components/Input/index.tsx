import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { THEME } from "../../theme";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
 
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value=  {number}
        placeholder="0,00"
        keyboardType="decimal-pad"
        textAlign="center"
        color="#FFFFF"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop:150,
    height: 100,
    fontSize: 60,
    margin: 12,
    padding: 10,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.PRIMARY
    
  },
});

export default UselessTextInput;