import React, { useState } from 'react';

import { Flex, Text } from '../../../../libs/ui';

export const Card: React.FC<{
  title: string;
  caption: string;
  onClick: () => void;
}> = ({ title, caption, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      p={4}
      w={{ sm: 'xs', md: 'sm' }}
      h="125px"
      direction="column"
      justify="space-between"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.500"
      boxShadow={isHovered ? 'lg' : 'md'}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor="pointer">
      <Text variant="bold">{title}</Text>
      <Text variant="caption" color="gray.600">
        {caption}
      </Text>
    </Flex>
  );
};
