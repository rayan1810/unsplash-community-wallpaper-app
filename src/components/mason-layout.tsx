import { HStack, VStack } from "native-base";
import React from "react";

export const MasonaryLayout = ({
  column,
  _hStack,
  _vStack,
  children,
  ...props
}: any) => {
  const VStackChildren: any[][] = [];
  const columnLength = column.length;
  React.Children.map(children, (child, cIndex) => {
    const pos = cIndex % columnLength;
    if (!VStackChildren[pos]) VStackChildren[pos] = [];
    VStackChildren[pos].push(child);
  });

  const vstackTemplate = () => {
    return column.map((flexVal: any, index: any) => {
      VStackChildren[index][VStackChildren[index].length - 1] =
        React.cloneElement(
          VStackChildren[index][VStackChildren[index].length - 1],
          { flex: 1 }
        );
      return (
        <VStack {..._vStack} flex={flexVal}>
          {VStackChildren[index]}
        </VStack>
      );
    });
  };

  return <HStack {..._hStack}>{vstackTemplate()}</HStack>;
};
