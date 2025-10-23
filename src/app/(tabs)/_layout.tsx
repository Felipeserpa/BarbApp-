import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="Agenda"
          options={{
            headerShown: true,
            headerTitle: "Agenda",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
              color: "#FFF",
            },
            headerTintColor: "#FFF",
            headerStyle: { backgroundColor: "#221610" },
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
        <Tabs.Screen name="Agendamentos" options={{ headerShown: true }} />
        <Tabs.Screen name="Perfil" options={{ headerShown: false }} />
      </Tabs>
    </>
  );
}
