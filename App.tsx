import React from "react";
import {
  Text,
  HStack,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  Square,
  Box,
  ScrollView,
} from "native-base";
import "react-native-gesture-handler";
import { AppBar, Drawer, MasonaryLayout } from "./src/components";
import { NavigationContainer } from "@react-navigation/native";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
const CustomComp = ({ minH, props }: any) => {
  return (
    <Square bg="primary.400"
    minH={minH}
    >
      <Box
        _text={{
          fontWeight: "bold",
          fontSize: "lg",
          color: "white",
        }}
        {...props}
      >
        20
      </Box>
    </Square>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppBar />
        {/* <Drawer /> */}
        <ScrollView
          contentContainerStyle={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <MasonaryLayout
            column={[1, 1]}
            _hStack={{
              space: 4,
              mb: 4,
              pt: 8,
            }}
            _vStack={{ space: 4 }}
          >
            <CustomComp minH={32} />
            <CustomComp minH={40} />
            <CustomComp minH={48} />
            <CustomComp minH={48} />
            <CustomComp minH={32}/>
            <CustomComp minH={40}/>
            <CustomComp minH={40}/>
            <CustomComp minH={40}/>
            <CustomComp minH={32}/>
            <CustomComp minH={32}/>
            <CustomComp minH={40}/>
            <CustomComp minH={40}/>
            <CustomComp minH={24}/>
          </MasonaryLayout>
        </ScrollView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
