import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View, TextInput } from "react-native";
import PrimaryButton from "./components/Button";
import Card from "./components/Card";

export default function App() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);

  const [fontsLoaded] = useFonts({
    "Nunito": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const countryNameHandler = function (name) {
    setCountryName(name);
  };
  const getCountryData = function () {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((data) => data.json())
      .then((jsonData) => setCountryData(jsonData));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Get Country Data 🌎</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={countryNameHandler}
          placeholder='Country name...'
          value={countryName}
        />
        <PrimaryButton onPress={getCountryData} />
      </View>
      {countryData ? <Card countryData={countryData} /> : <Text style={styles.message}>Search for a Country name</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 36,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 5,
    borderColor: '#e0e0fe',
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 24,
  },
  input: {
    width: '60%',
    backgroundColor: "#eee",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#6666fc",
    padding: 4,
    paddingHorizontal: 12,
    elevation: 4,
    fontFamily: 'Nunito'
  },
  card: {
    backgroundColor: "#eee",
    width: "70%",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  message:{
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    color: "#6666fc",
  },
  title:{
    fontFamily: 'Nunito-Bold',
    fontSize: 34,
    color: "#6666fc",
  }
});
