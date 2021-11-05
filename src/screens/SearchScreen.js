import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          headerText="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList
          headerText="Pricier"
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          headerText="More Expensive"
          results={filterResultsByPrice("$$$")}
        />
        <ResultsList
          headerText="Most Expensive"
          results={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create();

export default SearchScreen;
