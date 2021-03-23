import { Box, Heading, StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

interface CardProps {
	title: string;
}

const Card: React.FC<StackProps & CardProps> = ({
	children,
	title,
	...rest
}) => {
	return (
		<VStack
			bgColor="gray.700"
			w="100%"
			alignItems="flex-start"
			rounded="md"
			shadow="lg"
			overflow="hidden"
			{...rest}
		>
			<Box
				bgColor="purple.700"
				h="40px"
				p={2}
				w="full"
				display="flex"
				alignItems="center"
			>
				<Heading fontSize="2xl" color="white">
					{title}
				</Heading>
			</Box>
			<Box display="flex" flexDir="column" w="full" p={2}>
				{children}
			</Box>
		</VStack>
	);
};

export default Card;
