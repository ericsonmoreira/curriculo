import * as React from 'react';
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign="center" fontSize="xl">
			<Text>Testando</Text>
		</Box>
	</ChakraProvider>
);
