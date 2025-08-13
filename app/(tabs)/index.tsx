import Card from "@/components/Card";
import useStore from "@/store/filmsstore";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from "react-native";
export default function index() {
  const { films, AddFilm } = useStore();
  const [search, setSearch] = useState<string>("");

  const FetchFilms = async () => {
    if (search.trim() === "" || search.length < 3) {
      return;
    }
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_URL}?s=${search}&apikey=${process.env.EXPO_PUBLIC_API_KEY}`
      );
      const data = await response.json();

      if (data.Response === "False") {
        return;
      }

      AddFilm(data?.Search || []);
    } catch (error) {}
  };

  useEffect(() => {
    FetchFilms();
  }, [search]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      style={{ flex: 1 }}
    >
      <View className="p-4 bg-white border rounded-lg m-4 border-gray-200">
        <TextInput
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
          placeholder="Search for films..."
          placeholderTextColor={"#999"}
          className="border border-gray-300 p-2 rounded mb-2"
        />
      </View>
      <FlatList
        data={films}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => <Card item={item} />}
        style={{ maxHeight: "80%" }}
      />
    </KeyboardAvoidingView>
  );
}
