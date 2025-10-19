import { StyleSheet, Text, View } from "react-native";

export default function Agendamento() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Serviços</Text>
      <Text style={styles.barbeiro}>Barbeiro</Text>
      <View>
        <Text style={styles.date}>Data e Hora</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#221610" },
  text: { fontSize: 24, color: "#FFF" },
  barbeiro: { fontSize: 18, color: "#FFF", marginTop: 10 },
  date: { fontSize: 18, color: "#FFF", marginTop: 10 },
});
