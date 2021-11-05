import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 20,
  },

  imageStyle: {
    height: 175,
    width: 200,
    borderRadius: 4,
    marginBottom: 5,
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ResultsDetail;
