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
  Heading,
  Button,
  Link,
} from "native-base";
import { NativeModules } from "react-native";

export function WallpaperScreen() {
  return (
    <Box flex="1">
      <VStack flex="1">
        <Image
          flex="2"
          alt="wallpaper-img"
          source={{
            uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          }}
        />
        <VStack flex="3" p="4" space="4">
          <Heading>Image Name</Heading>
          <Text>User Name</Text>
          <Link
            rounded="4"
            _text={{ textDecorationLine: "none" }}
            isExternal
            alignSelf="flex-start"
            bg="primary.500"
            px="3"
            py="2"
            href="https://unsplash.com/photos/sMQiL_2v4vs"
          >
            View on Unsplash
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
}
