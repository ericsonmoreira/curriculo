import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const MainTitle: React.FC = () => {
	return (
		<Box width="full">
			<Heading size="2xl">Éricson Rogério Moreira</Heading>
			<Heading size="sm" marginTop={2} color={'gray.600'}>
				Graduando em Ciência da Computação - Frontend Developer
			</Heading>
		</Box>
	);
};

export default MainTitle;
