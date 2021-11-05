import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  //   console.log(result);
  return (
    <View>
      <Text style={styles.name}> {result.name} </Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
      <Text> Phone Number: {result.display_phone}</Text>
      <Text> Address: {result.location.display_address}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginHorizontal: 15,
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default ResultsShowScreen;
