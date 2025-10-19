import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Agendamento() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Serviços</Text>
      <Picker>
        <Picker.Item label="Corte de Cabelo" value="corte_de_cabelo" />
        <Picker.Item label="Barba" value="barba" />
        <Picker.Item label="Corte e Barba" value="corte_e_barba" />
      </Picker>

      <View>
        <Text style={styles.barbeiro}>Barbeiros</Text>
      </View>

      <View>
        <Text style={styles.date}>Data e Hora</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#221610" },

  text: { fontSize: 24, color: "#FFF" },

  barbeiro: { fontSize: 24, color: "#FFF", marginTop: 10 },
  date: { fontSize: 24, color: "#FFF", marginTop: 10 },
});
