import React from "react";

import { Alert,FlatList,Image,SafeAreaView,StyleSheet,Text,TouchableOpacity,View,} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CafeItem,  RootStackParamList } from "./../type";


type Props = NativeStackScreenProps<RootStackParamList, "Home"> & {

  items: CafeItem[];

  removeItem: (id: string) => void;

  averages: { Beverages: string; Mains: string; Desserts: string };

};


export default function HomeScreen({ navigation, items, removeItem, averages }: Props) {

  const confirmRemove = (id: string) => {

    Alert.alert("Remove Item", "Do you want to remove this item?", [

      { text: "Cancel", style: "cancel" },

      { text: "Remove", style: "destructive", onPress: () => removeItem(id) },

    ]);

  };


  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>Our Menu ({items.length})</Text>


      <View style={styles.statsContainer}>

        <View style={styles.statBox}>

          <Text style={styles.statLabel}>Beverages</Text>

          <Text style={styles.statValue}>R {averages.Beverages}</Text>

        </View>

        <View style={styles.statBox}>

          <Text style={styles.statLabel}>Pastries</Text>

          <Text style={styles.statValue}>R {averages.Mains }</Text>

        </View>

        <View style={styles.statBox}>

          <Text style={styles.statLabel}>Desserts</Text>

          <Text style={styles.statValue}>R {averages.Desserts}</Text>

        </View>

      </View>


      <FlatList

        data={items}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View style={styles.card}>

            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.body}>

              <Text style={styles.title}>{item.itemName}</Text>

              <Text style={styles.desc}>{item.description}</Text>

              <Text style={styles.cata}>{item.category}</Text>

              <TouchableOpacity

                style={styles.remove}

                onPress={() => confirmRemove(item.id)}

              >

                <Text style={styles.removeText}>Remove</Text>

              </TouchableOpacity>

            </View>

          </View>

        )}

        contentContainerStyle={{ paddingBottom: 120 }}

      />


      <View style={styles.fabs}>

        <TouchableOpacity

          style={styles.fab}

          onPress={() => navigation.navigate("AddItem")}

        >

          <Text style={styles.fabText}>Add</Text>

        </TouchableOpacity>


        <TouchableOpacity

          style={styles.fab}

          onPress={() => navigation.navigate("Filter", { items })}

        >

          <Text style={styles.fabText}>Filter</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

}


const c = {

  bg: "#F8F6FF",

  card: "#cb0d36ff",

  accent: "#fb5250ff", 

  text: "#fbf6f6ff",

  border: "#fd622eff", 

  soft: "#ec7f81ff", 

  remove: "#d11e1eff",

};


const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: c.bg,

    paddingHorizontal: 20,

  },

  heading: {

    fontSize: 28,

    fontWeight: "900",

    textAlign: "center",

    color: c.accent,

    marginVertical: 20,

  },

  statsContainer: {

    flexDirection: "row",

    justifyContent: "space-around",

    marginBottom: 20,

  },

  statBox: {

    backgroundColor: c.card,

    borderRadius: 14,

    padding: 10,

    width: "30%",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.1,

    shadowRadius: 6,

    elevation: 4,

  },

  statLabel: {

    fontSize: 14,

    color: c.text,

    marginBottom: 4,

  },

  statValue: {

    fontSize: 16,

    fontWeight: "bold",

    color: c.soft,

  },

  card: {

    backgroundColor: c.card,

    borderRadius: 16,

    marginVertical: 10,

    overflow: "hidden",

    shadowColor: "#000",

    shadowOpacity: 0.1,

    shadowRadius: 8,

    elevation: 5,

  },

  image: {

    width: "100%",

    height: 180,

  },

  body: {

    padding: 14,

  },

  title: {

    fontSize: 18,

    fontWeight: "700",

    color: c.accent,

    marginBottom: 6,

  },

  desc: {

    fontSize: 14,

    color: "#555",

    marginBottom: 4,

  },

  cata: {

    fontSize: 13,

    fontStyle: "italic",

    color: c.border,

    marginBottom: 8,

  },

  remove: {

    backgroundColor: c.remove,

    borderRadius: 10,

    paddingVertical: 6,

    alignItems: "center",

  },

  removeText: {

    color: "#fff",

    fontWeight: "700",

  },

  fabs: {

    position: "absolute",

    bottom: 30,

    right: 20,

    flexDirection: "column",

    gap: 12,

  },

  fab: {

    backgroundColor: c.accent,

    borderRadius: 50,

    paddingVertical: 14,

    paddingHorizontal: 26,

    elevation: 5,

  },

  fabText: {

    color: "#fff",

    fontWeight: "bold",

    fontSize: 16,

    textAlign: "center",

  },

});