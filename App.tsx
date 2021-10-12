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
  StatusBar,
  VStack,
  Image,
  Pressable,
} from "native-base";
import {
  AppBar,
  Drawer,
  MasonaryLayout,
  HomeScreenTile,
} from "./src/components";
import { NavigationContainer } from "@react-navigation/native";
import {WallpaperScreen} from "./src/screens";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

// Server API that returns Images details
const imgData = [
  {
    url: "https://iasdas.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Brow Rock",
    owner: "Cristina Gottardi",
  },
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Blue Orange Smoke",
    owner: "Lucas Benjamin",
  },
  {
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Restaurant Relax",
    owner: "Clem Onojeghuo",
  },
  {
    url: "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Tree of life",
    owner: "Veeterzy",
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Reflection",
    owner: "Garrett parker",
  },
  {
    url: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Canyon Pass",
    owner: "Ashim D’Silva",
  },
  {
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Brow Rock",
    owner: "Cristina Gottardi",
  },
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Blue Orange Smoke",
    owner: "Lucas Benjamin",
  },
  {
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Restaurant Relax",
    owner: "Clem Onojeghuo",
  },
  {
    url: "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Tree of life",
    owner: "Veeterzy",
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Reflection",
    owner: "Garrett parker",
  },
  {
    url: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Canyon Pass",
    owner: "Ashim D’Silva",
  },
  {
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Brow Rock",
    owner: "Cristina Gottardi",
  },
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Blue Orange Smoke",
    owner: "Lucas Benjamin",
  },
  {
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Restaurant Relax",
    owner: "Clem Onojeghuo",
  },
  {
    url: "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Tree of life",
    owner: "Veeterzy",
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Reflection",
    owner: "Garrett parker",
  },
  {
    url: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Canyon Pass",
    owner: "Ashim D’Silva",
  },
  {
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Brow Rock",
    owner: "Cristina Gottardi",
  },
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Blue Orange Smoke",
    owner: "Lucas Benjamin",
  },
  {
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Restaurant Relax",
    owner: "Clem Onojeghuo",
  },
  {
    url: "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Tree of life",
    owner: "Veeterzy",
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Reflection",
    owner: "Garrett parker",
  },
  {
    url: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Canyon Pass",
    owner: "Ashim D’Silva",
  },
  {
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Brow Rock",
    owner: "Cristina Gottardi",
  },
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Blue Orange Smoke",
    owner: "Lucas Benjamin",
  },
  {
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Restaurant Relax",
    owner: "Clem Onojeghuo",
  },
  {
    url: "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Tree of life",
    owner: "Veeterzy",
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Reflection",
    owner: "Garrett parker",
  },
  {
    url: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Canyon Pass",
    owner: "Ashim D’Silva",
  },
  {
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Brow Rock",
    owner: "Cristina Gottardi",
  },
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Blue Orange Smoke",
    owner: "Lucas Benjamin",
  },
  {
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Restaurant Relax",
    owner: "Clem Onojeghuo",
  },
  {
    url: "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Tree of life",
    owner: "Veeterzy",
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Reflection",
    owner: "Garrett parker",
  },
  {
    url: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Canyon Pass",
    owner: "Ashim D’Silva",
  },
  {
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Brow Rock",
    owner: "Cristina Gottardi",
  },
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Blue Orange Smoke",
    owner: "Lucas Benjamin",
  },
  {
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Restaurant Relax",
    owner: "Clem Onojeghuo",
  },
  {
    url: "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Tree of life",
    owner: "Veeterzy",
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Reflection",
    owner: "Garrett parker",
  },
  {
    url: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Canyon Pass",
    owner: "Ashim D’Silva",
  },
  {
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Brow Rock",
    owner: "Cristina Gottardi",
  },
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Blue Orange Smoke",
    owner: "Lucas Benjamin",
  },
  {
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Restaurant Relax",
    owner: "Clem Onojeghuo",
  },
  {
    url: "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Tree of life",
    owner: "Veeterzy",
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Reflection",
    owner: "Garrett parker",
  },
  {
    url: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Canyon Pass",
    owner: "Ashim D’Silva",
  },
];
const MasonaryLayoutItemHeights = [32, 40, 48, 48, 40];
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <WallpaperScreen/>
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
