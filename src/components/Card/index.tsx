import { StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

const Card: React.FC<StackProps> = ({ children, ...rest }) => {
	return (
		<VStack
			w="100%"
			p={4}
			alignItems="flex-start"
			borderColor="gray"
			borderRadius="md"
			shadow="lg"
			{...rest}
		>
			{children}
		</VStack>
	);
};

export default Card;
