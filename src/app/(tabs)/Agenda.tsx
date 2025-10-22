import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Agendamento() {
  // Estado para o barbeiro selecionado
  const [barbeiroSelecionado, setBarbeiroSelecionado] =
    React.useState<string>("");
  // Lista de barbeiros (exemplo estático)
  const barbeiros = [
    { id: "1", nome: "Rafael" },
    { id: "2", nome: "Felipe" },
  ];

  const handleAgendar = () => {
    // Verifica se um barbeiro foi selecionado
    if (!barbeiroSelecionado) {
      alert("Selecione um barbeiro antes de agendar!");
      return;
    }
    // Inicia o processo de agendamento
    const barbeiroNome =
      barbeiros.find((b) => b.id === barbeiroSelecionado)?.nome || "";
    alert(`Agendamento iniciado com ${barbeiroNome}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#221610" />
      <Text style={styles.text}>Serviços</Text>

      <View style={styles.pickerContainer}>
        <Picker style={styles.picker} dropdownIconColor="#FFF">
          <Picker.Item label="Selecione um Serviço" value="" />
          <Picker.Item label="Corte de Cabelo" value="corte_de_cabelo" />
          <Picker.Item label="Barba" value="barba" />
          <Picker.Item label="Corte e Barba" value="corte_e_barba" />
        </Picker>
      </View>

      <View>
        <Text style={styles.barbeiro}>Escolha seu Barbeiro</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={barbeiroSelecionado}
            onValueChange={(itemValue: string) =>
              setBarbeiroSelecionado(itemValue)
            }
            style={styles.picker}
            dropdownIconColor="#FFF"
          >
            <Picker.Item label="Selecione um barbeiro..." value="" />
            {barbeiros.map((barbeiro) => (
              <Picker.Item
                key={barbeiro.id}
                label={barbeiro.nome}
                value={barbeiro.id}
              />
            ))}
          </Picker>
        </View>
      </View>

      <View>
        <Text style={styles.date}>Data e Hora</Text>
      </View>
      <View>
        <Button title="Agendar" onPress={handleAgendar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#221610" },

  text: { fontSize: 24, color: "#FFF" },

  barbeiro: { fontSize: 24, color: "#FFF", marginTop: 10 },
  date: { fontSize: 24, color: "#FFF", marginTop: 10 },

  pickerContainer: {
    backgroundColor: "#33221A",
    borderRadius: 8,
    marginTop: 8,
    overflow: "hidden",
  },

  picker: {
    color: "#FFF",
    height: 50,
    width: "100%",
  },
});
