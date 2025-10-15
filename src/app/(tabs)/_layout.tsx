import { Tabs } from "expo-router";
import React from "react";
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="Agenda" options={{ headerShown: true }} />
      <Tabs.Screen name="MeusAgendamentos" options={{ headerShown: false }} />
      <Tabs.Screen name="Barbeiros" options={{ headerShown: false }} />
      <Tabs.Screen name="Perfil" options={{ headerShown: false }} />
    </Tabs>
  );
}
