//CODE ATTRIBUTION: GeeksforGeeks (no date) TypeScript Tutorial. Available at: https://www.geeksforgeeks.org/search/?gq=TypeScript+Tutorial (Accessed: 11    November 2025). (2)TypeScript (no date) TypeScript for JavaScript Programmers. Available at: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html (Accessed: 13 November 2025).
 //Code Attribution - W3Schools (no date) TypeScript styling. Available at: https://www.w3schools.com/#gsc.tab=0&gsc.q=typescript%20styling (Accessed: 13 November 2025).
 //Node.js (no date) Working with different filesystems. Available at: https://nodejs.org/en/learn/manipulating-files/working-with-different-filesystems (Accessed: 13 November 2025).

import React, { useMemo, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CafeItem, Course, RootStackParamList } from "./../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Filter">;

const c = {
  bg: "#f81e51ff",
  card: "#e6456aff",
  text: "#f5e9d7",
  meta: "#b69b7f",
  input: "#2b221f",
  border: "#3a302d",
};

export default function FilterScreen({ route }: Props) {
  const items: CafeItem[] = route.params?.items ?? [];
  const [selected, setSelected] = useState<Course>("Beverage");

  const filtered = useMemo(
    () => items.filter((i) => i.category === selected),
    [items, selected]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pickerWrap}>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={selected}
            onValueChange={(value) => setSelected(value as Course)}
            mode="dropdown"
            dropdownIconColor="#f34a12a6"
            style={styles.picker}
          >
            <Picker.Item label="Beverage" value="Beverage" color="#f5e9d7" />
            <Picker.Item label="Main Meal" value="Main Meal" color="#f5e9d7" />
            <Picker.Item label="Dessert" value="Dessert" color="#f5e9d7" />
          </Picker>
        </View>
      </View>

      <Text style={styles.heading}>
        {selected}s ({filtered.length})
      </Text>

      <FlatList
        data={filtered}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.body}>
              <Text style={styles.title}>{item.itemName}</Text>
              <Text style={styles.meta}>
                {item.category} — R{item.price}
              </Text>
              {item.ingredients && (
                <View style={styles.chips}>
                  {item.ingredients.map((g, idx) => (
                    <View key={idx} style={styles.chip}>
                      <Text style={styles.chipText}>{g}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c.bg,
    padding: 16,
  },
  pickerWrap: {
    alignItems: "center",
    marginBottom: 20,
  },
  pickerBox: {
    backgroundColor: c.input,
    borderRadius: 12,
    borderColor: c.border,
    borderWidth: 1,
    width: "80%",
  },
  picker: {
    color: c.text,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: c.text,
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: c.card,
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  body: {
    padding: 12,
  },
  title: {
    color: c.text,
    fontSize: 18,
    fontWeight: "700",
  },
  meta: {
    color: c.meta,
    marginTop: 4,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  chip: {
    backgroundColor: c.input,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  chipText: {
    color: c.text,
    fontSize: 12,
  },
});