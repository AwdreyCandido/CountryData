import { View, Text, Image, StyleSheet } from "react-native";

const Card = function ({ countryData }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: countryData[0].flags.png }} style={styles.image} />
      <View style={styles.dataContainer}>
        <Text style={styles.text}>👄 Name: <Text style={styles.data}>{countryData[0].name.common}</Text></Text>
        <Text style={styles.text}>📜 <Text style={styles.data}>{countryData[0].name.official}</Text></Text>
        <Text style={styles.text}>🗺️ Capital: <Text style={styles.data}>{countryData[0].capital}</Text></Text>
        <Text style={styles.text}>🌎 Region: <Text style={styles.data}>{countryData[0].region}, {countryData[0].subregion}</Text></Text>
        <Text style={styles.text}>🚶 Population: <Text style={styles.data}>{countryData[0].population}</Text></Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eee",
    width: "75%",
    borderWidth: 1,
    borderColor: "#6666fc",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,

  },
  text: {
    marginLeft: 10,
    marginVertical: 2,
    fontFamily: 'Nunito'
  },
  data: {
    fontFamily: 'Nunito-Bold'
  },
  dataContainer: {
      marginVertical: 15,
  },
});
