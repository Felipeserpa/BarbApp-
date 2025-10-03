import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.heroImage}
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_n7TFDKfvkpVLt16rqmk1D0SRtwca02YkhQL3rb22gac0xpbcJ4UHOg4BuGtfC_UOA_sQrhHtQCbAlHaCTCVaLq2Vj8F-DC40Zhq1yJQRL_5F9-aCbUOslx0ECuhMKseiP4ZBmJB0WwhenBoRFwemglecummNjv5IrNOKudxsazOxVER4R9BZFPuxzH_HCq_g4UzHkS-PEHT90y-NG76VXSZMvLMbj6kglYwNOoesntJKZnuwp5NlCuYukgQnM0ofX9jKX2Fmfk",
        }}
      />
      <View>
        <Text style={styles.title}> Faça Login na sua conta</Text>
      </View>
      <ScrollView
        keyboardDismissMode="interactive"
        contentContainerStyle={{ paddingBottom: 20 }}
      ></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221610",
    alignItems: "center",
    justifyContent: "center",
  },
  heroImage: {
    width: 450,
    height: width * 0.9,
    //borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
});
