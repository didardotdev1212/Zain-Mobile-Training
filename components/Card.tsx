import React from "react";
import { Image, Text, View } from "react-native";

export type FilmType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export default function Card({ item }: { item: FilmType }) {
  return (
    <View className="p-4 bg-white flex flex-row border relative rounded-lg m-2 border-gray-200">
      <Image
        source={{
          uri: item?.Poster,
        }}
        resizeMode="contain"
        className="w-full h-48 rounded-lg mb-2 w-1/3"
      />

      <View className="w-2/3 pl-4">
        <Text className="text-lg font-bold mb-2">{item?.Title}</Text>
        <Text className="text-gray-700">
          {item?.Type} - {item?.Year}
        </Text>
      </View>
    </View>
  );
}
