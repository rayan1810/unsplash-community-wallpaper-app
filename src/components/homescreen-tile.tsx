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

export function HomeScreenTile({ind,MasonaryLayoutItemHeights,img,...props}:any) {
  const [imageLoaded, setImageLoaded] = React.useState(true);
  return (
    <Pressable h={MasonaryLayoutItemHeights[ind % 5]} onPress={()=>{
        alert("Pressed")
    }}>
      <Image
        fallbackSource={{
          uri: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
        }}
        h="100%"
        source={{ uri: img.url }}
        alt={img.name}
        onError={() => {
          setImageLoaded(false);
        }}
      />
      {imageLoaded && (
        <Box
          position="absolute"
          left="0"
          right="0"
          top="0"
          bottom="0"
          bg="gray.800:alpha.40"
          p="4"
        >
          <VStack flex="1">
            <Text color="white" fontSize="xl">
              {img.name}
            </Text>
            <Text color="white">by {img.owner}</Text>
          </VStack>
        </Box>
      )}
    </Pressable>
  );
}
