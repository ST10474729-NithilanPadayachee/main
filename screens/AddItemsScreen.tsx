//CODE ATTRIBUTION: GeeksforGeeks (no date) TypeScript Tutorial. Available at: https://www.geeksforgeeks.org/search/?gq=TypeScript+Tutorial (Accessed: 11    November 2025). (2)TypeScript (no date) TypeScript for JavaScript Programmers. Available at: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html (Accessed: 13 November 2025).
 //Code Attribution - W3Schools (no date) TypeScript styling. Available at: https://www.w3schools.com/#gsc.tab=0&gsc.q=typescript%20styling (Accessed: 13 November 2025).
 //Node.js (no date) Working with different filesystems. Available at: https://nodejs.org/en/learn/manipulating-files/working-with-different-filesystems (Accessed: 13 November 2025).

import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CafeItem, Course, RootStackParamList } from "./../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "AddItem"> & {
  addItem: (item: CafeItem) => void;
};

const c = {
  bg: "#12100f",
  card: "#1b1513",
  text: "#f5e9d7",
  meta: "#b59d7f",
  accent: "#ce5c5a",
  input: "#2b221f",
  border: "#fdb089ff",
  button: "#fa9c44ff",
};

// simple unique id generator
function wld(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export default function AddItemScreen({ navigation, addItem }: Props) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Course | "">("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");

  const onSave = () => {
    if (!itemName || !description || !price || !image || !category) {
      Alert.alert("Missing Fields", "Please fill in all fields");
      return;
    }

    const p = parseFloat(price);
    if (isNaN(p) || p <= 0) {
      Alert.alert("Invalid Price", "Please enter a valid positive price");
      return;
    }

    const intensity: CafeItem["intensity"] =
      p < 45 ? "Mild" : p < 60 ? "Balanced" : "Strong";

    const payload: CafeItem = {
      id: wld(),
      itemName,
      description,
      category: category as Course,
      price: p,
      intensity,
      image,
      ingredients: ingredients
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    addItem(payload);
    Alert.alert("Success", `${itemName} added successfully!`);
    navigation.goBack();
  };

  const onCategoryChange = (value: string) => {
    setCategory(value as Course);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, backgroundColor: c.bg }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.header}>Add New Item</Text>

          <TextInput
            style={styles.input}
            placeholder="Item Name"
            placeholderTextColor={c.meta}
            value={itemName}
            onChangeText={setItemName}
          />

          <TextInput
            style={styles.input}
            placeholder="Description"
            placeholderTextColor={c.meta}
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.pickerWrap}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.pickerBox}>
              <Picker
                selectedValue={category}
                onValueChange={onCategoryChange}
                mode="dropdown"
                dropdownIconColor="#c06a5a"
                style={styles.picker}
              >
                <Picker.Item
                  label="Select a category..."
                  value=""
                  color={c.meta}
                />
                <Picker.Item label="Beverage" value="Beverage" color={c.text} />
                <Picker.Item label="Main Meal" value="Main Meal" color={c.text} />
                <Picker.Item label="Dessert" value="Dessert" color={c.text} />
              </Picker>
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Price"
            placeholderTextColor={c.meta}
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />

          <TextInput
            style={styles.input}
            placeholder="Ingredients (comma separated)"
            placeholderTextColor={c.meta}
            value={ingredients}
            onChangeText={setIngredients}
          />

          <TextInput
            style={styles.input}
            placeholder="Image URL"
            placeholderTextColor={c.meta}
            value={image}
            onChangeText={setImage}
          />

          <TouchableOpacity style={styles.save} onPress={onSave}>
            <Text style={styles.saveText}>Save Item</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexGrow: 1,
    backgroundColor: c.bg,
    padding: 20,
  },
  header: {
    color: c.text,
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    backgroundColor: c.input,
    color: c.text,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: c.border,
    height: 50,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  pickerWrap: {
    marginBottom: 12,
  },
  label: {
    color: c.meta,
    marginBottom: 4,
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: c.border,
    borderRadius: 12,
    backgroundColor: c.input,
  },
  picker: {
    color: c.text,
  },
  save: {
    backgroundColor: c.button,
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  saveText: {
    color: c.text,
    textAlign: "center",
    fontWeight: "bold",
  },
  cancel: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: c.border,
    padding: 15,
    borderRadius: 12,
  },
  cancelText: {
    color: c.meta,
    textAlign: "center",
  },
});