import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MeusAgendamentos() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleReagendar() {
    console.log("Reagendamento iniciado!");
  }

  function handleCancelar() {
    console.log("Agendamento cancelado!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Corte de Cabelo</Text>
        <Text style={styles.text}>📅 Data: 25/06/2024</Text>
        <Text style={styles.text}>⏰ Hora: 14:00</Text>
        <Text style={styles.text}>💈 Barbeiro: Rafael</Text>
        <Text style={styles.textConfirm}>Confirmado</Text>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FFC107" }]}
            onPress={handleReagendar}
          >
            <Text style={styles.buttonText}>Reagendar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#DC3545" }]}
            onPress={handleCancelar}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221610",
    padding: 20,
  },
  card: {
    backgroundColor: "#33221A",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#EEE",
    marginVertical: 3,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  textConfirm: {
    marginTop: 10,
    fontSize: 16,
    color: "#28A745",
    fontWeight: "bold",
  },
});
