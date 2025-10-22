import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Adicione selectedDate para saber qual botão destacar
type Props = {
  onSelectDate: (date: string) => void;
  selectedDate: string | null;
};

const CalendarPicker: React.FC<Props> = ({ onSelectDate, selectedDate }) => {
  const today = new Date();
  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    const iso = d.toISOString().slice(0, 10); // YYYY-MM-DD
    const label = d.toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
    }); // Ex: Seg, 23/10
    return { iso, label };
  });

  return (
    // Usa um container com o estilo 'card' que você usou anteriormente
    <View style={styles.card}>
      <View style={styles.daysContainer}>
        {days.map((day) => {
          // Verifica se o dia atual no loop é o dia selecionado
          const isSelected = day.iso === selectedDate;
          return (
            <TouchableOpacity
              key={day.iso}
              onPress={() => onSelectDate(day.iso)}
              style={[
                styles.dayButton,
                // Aplica o estilo de seleção se for o dia escolhido
                isSelected ? styles.dayButtonSelected : null,
              ]}
            >
              <Text
                style={[
                  styles.dayText,
                  isSelected ? styles.dayTextSelected : null,
                ]}
              >
                {day.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

// Estilos movidos e adaptados para o seu tema
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#33221A", // Cor do seu card
    borderRadius: 10,
    padding: 10,
    marginTop: 4,
    elevation: 3,
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Distribui os botões
  },
  dayButton: {
    backgroundColor: "transparent", // Fundo transparente por padrão
    padding: 8,
    marginVertical: 4, // Espaçamento vertical
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#5C4B40", // Borda sutil
    minWidth: "24%", // Para caber 4 por linha, ajuste conforme necessário
    alignItems: "center",
  },
  dayButtonSelected: {
    backgroundColor: "#C29A6B", // Seu selectedColor
    borderColor: "#C29A6B",
  },
  dayText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
  dayTextSelected: {
    color: "#221610", // Cor escura para contraste no botão selecionado
    fontWeight: "bold",
  },
});

export default CalendarPicker;
