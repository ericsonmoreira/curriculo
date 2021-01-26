import { Heading, StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

interface CardProps {
	title?: string;
}

const Card: React.FC<StackProps & CardProps> = ({
	children,
	title,
	...rest
}) => {
	return (
		<VStack
			w="100%"
			p={4}
			alignItems="flex-start"
			borderColor="gray"
			rounded="md"
			shadow="lg"
			{...rest}
		>
			{title && <Heading fontSize="lg" color="indigo">{title}</Heading>}
			{children}
		</VStack>
	);
};

export default Card;
