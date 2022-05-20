import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

const PrimaryButton = function ({ onPress }) {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={onPress}
        android_ripple={{ color: "#eee" }}
      >
        <Text style={styles.text}>Search </Text>
        <Ionicons name="search" size={24} color="white" />
        
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#6666fc",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 4,
  },
  text: {
    color: "white",
    fontFamily: 'Nunito-Bold'
  },
});
