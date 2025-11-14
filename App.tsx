//CODE ATTRIBUTION: GeeksforGeeks (no date) TypeScript Tutorial. Available at: https://www.geeksforgeeks.org/search/?gq=TypeScript+Tutorial (Accessed: 11    November 2025). (2)TypeScript (no date) TypeScript for JavaScript Programmers. Available at: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html (Accessed: 13 November 2025).
 //Code Attribution - W3Schools (no date) TypeScript styling. Available at: https://www.w3schools.com/#gsc.tab=0&gsc.q=typescript%20styling (Accessed: 13 November 2025).
 //Node.js (no date) Working with different filesystems. Available at: https://nodejs.org/en/learn/manipulating-files/working-with-different-filesystems (Accessed: 13 November 2025).

import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CafeItem, Course, RootStackParamList } from "./type";

import WelcomeScreen from "./screens/WelcomeScreen";

import HomeScreen from "./screens/HomeScreen";

import AddItemScreen from "./screens/AddItemsScreen";

import FilterScreen from "./screens/FilterScreen";

 

const Stack = createNativeStackNavigator<RootStackParamList>();

 

const predefined: CafeItem[] = [

    {

        id: "1",

        itemName: "Bubblegum Ice Latte",

        description: "A comforting minty sweet drink.",

        category: "Beverage",

        price: 58,

        intensity: "Balanced",

        image: "https://i.pinimg.com/1200x/97/12/69/9712695c0eec71776701e3167b89a279.jpg",

        ingredients: ["Mint Syrup", "Bubblegum Essence", "Milk"]

    },

    {

        id: "2",

        itemName: "Citrus Maddrino",

        description: "A fresh drink with a zesty twist.",

        category: "Beverage",

        price: 52,

        intensity: "Strong",

        image: "https://i.pinimg.com/1200x/fa/50/ef/fa50ef040ae79423b74a414b6d30ec48.jpg",

        ingredients: ["Lemonade Mint", "Citrus Syrup", "Lemon Zest"]

    },

    {

        id: "3",

        itemName: "Rasberry Milshake",

        description: "Creamy milshake with raspberry flavor.",

        category: "Beverage",

        price: 45,

        intensity: "Mild",

        image: "https://i.pinimg.com/1200x/4d/28/ba/4d28bad44b30898775fcf9509989d821.jpg",

        ingredients: ["Sweetners", "Rasberry", "Milk Foam"]

    },

    {

        id: "4",

        itemName: "Double Crunch Mutton Burger",

        description: "Juicy mutton patty with crispy toppings.",

        category: "Main Meal",

        price: 74,

        intensity: "Mild",

        image: "https://i.pinimg.com/736x/12/a7/ff/12a7ff2d3bd4c159db60da68d6d76971.jpg",

        ingredients: ["Medium Mutton Patty", "Exlusive Christoffel Sauce", "Lettuce", "Tomato", "Cheese"]

    },

    {

        id: "5",

        itemName: "Large Crispy Chips",

        description: "Golden fried crispy potato chips.",

        category: "Main Meal",

        price: 42,

        intensity: "Mild",

        image: "https://plus.unsplash.com/premium_photo-1675871810408-db7e4e51b740?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",

        ingredients: ["Potato Slices", "Spice", "Sauce (extras)"]

    },

    {

        id: "6",

        itemName: "Chicken Brochette",

        description: "Grilled chicken skewers with herbs with a buttery italian sauce.",

        category: "Main Meal",

        price: 80,

        intensity: "Mild",

        image: "https://i.pinimg.com/1200x/90/e5/58/90e558abed32694074a68c544742dcef.jpg",

        ingredients: ["Chopped Chicken Fillet", "Butter Sauce with lemon", "Christoffel Herbs and Spices Exclusive", "Vegetables"]

    },

    {

        id: "7",

        itemName: "Vegetarian Pasta",

        description: "Pasta with fresh vegetables in a creamy sauce.",

        category: "Main Meal",

        price: 62,

        intensity: "Balanced",

        image: "https://i.pinimg.com/1200x/8f/ec/bc/8fecbcf10fae02a5bad1bd6678f29237.jpg",

        ingredients: ["Pasta", "Penne Sauce", "Vegetables"]

    },

    {

        id: "8",

        itemName: "Berry Cheesecake",

        description: "Creamy cheesecake with lemon zest.",

        category: "Dessert",

        price: 64,

        intensity: "Mild",

        image: "https://i.pinimg.com/736x/98/f8/45/98f8450fbf8a4c3e704db41ec16dec30.jpg",

        ingredients: ["Cheese", "Lemon Zest", "Cream"]

    },

    {

        id: "9",

        itemName: "Pineapple Dream Cookie",

        description: "Soft cookie with pineapple chunks.",

        category: "Dessert",

        price: 60,

        intensity: "Strong",

        image: "https://i.pinimg.com/1200x/b2/70/85/b2708593cac7ddc8b139bc9e230805b0.jpg",

        ingredients: ["Pineapple", "Pastry Cookie Sweetened", "Sugar Additives"]

    },

    {

        id: "10",

        itemName: "Chocolate Cake",

        description: "Rich chocolate cake with coffee infusion.",

        category: "Dessert",

        price: 55,

        intensity: "Strong",

        image: "https://i.pinimg.com/736x/4a/1e/57/4a1e57e5b111b108bce7d0a626ee9f48.jpg",

        ingredients: ["Cocoa", "Sugar", "Flour", "Coffee Essence", "Chocolate Chips", "Cream"]

    }

];


 

export default function App() {

    const [items, setItems] = useState<CafeItem[]>(predefined);

 

    const addItem = (item: CafeItem) => setItems(prev => [...prev, item]);

 

    const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id));

 

    const avg = (course: Course) => {

        const list = items.filter(i => i.category === course);

        if (!list.length) return "0.00";

        const total = list.reduce((s, i) => s + i.price, 0);

        return (total / list.length).toFixed(2);

    };

 

    return (

        <NavigationContainer>

            <Stack.Navigator

                screenOptions={{

                    headerStyle: { backgroundColor: "#1b1513" },

                    headerTintColor: "#f5e9d7",

                    headerTitleStyle: { fontWeight: "800" }

                }}>

                <Stack.Screen

                    name="Welcome"

                    component={WelcomeScreen}

                    options={{ headerShown: false }}

                />

                <Stack.Screen name="Home" options={{ title: "Barista Bliss" }}>

                    {props => (

                        <HomeScreen

                            {...props}

                            items={items}

                            removeItem={removeItem}

                            averages={{

                                Beverages: avg("Beverage"),

                                Mains: avg("Main Meal"),

                                Desserts: avg("Dessert")

                            }}

                        />

                    )}

                </Stack.Screen>

                <Stack.Screen name="AddItem" options={{ title: "Add New Item" }}>

                    {props => <AddItemScreen {...props} addItem={addItem} />}

                </Stack.Screen>

                <Stack.Screen

                    name="Filter"

                    component={FilterScreen}

                    options={{ title: "Filter Menu" }}

                />

            </Stack.Navigator>

        </NavigationContainer>

    );

}


import { StyleSheet } from "react-native";


const c = {

  bg: "#fff",

  text: "#333",

  input: "#f2f2f2",

  border: "#f36a8cff",

  meta: "#888",

  accent: "#f3604fff"

};


const styles = StyleSheet.create({

  form: { backgroundColor: c.bg, padding: 20 },

  header: { color: c.text, fontSize: 22, fontWeight: "900", textAlign: "center", marginBottom: 16 },

  input: { backgroundColor: c.input, color: c.text, borderRadius: 12, borderWidth: 1, borderColor: c.border, height: 50, paddingHorizontal: 12, marginVertical: 8 },

  pickerWrap: { marginVertical: 8 },

  label: { color: c.meta, marginLeft: 4, marginBottom: 6, fontWeight: "700" },

  pickerBox: { backgroundColor: c.input, borderRadius: 12, borderWidth: 1, borderColor: c.border, overflow: "hidden", height: 50, justifyContent: "center" },

  picker: { color: c.text, height: 50, width: "100%" },

  preview: { width: "100%", height: 200, borderRadius: 12, marginTop: 12 },

  save: { backgroundColor: c.accent, padding: 14, borderRadius: 12, marginTop: 16, alignItems: "center" },

  saveText: { color: "#1b1513", fontWeight: "900" },

  cancel: { alignItems: "center", marginTop: 10 },

  cancelText: { color: c.meta, fontWeight: "800" }

});