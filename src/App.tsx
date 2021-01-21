import { ChakraProvider, Flex, Grid, Heading, Input } from '@chakra-ui/react';
import * as React from 'react';
import custonTheme from './theme';

export const App = () => (
	<ChakraProvider theme={custonTheme}>
		<Grid
			height="100vh"
			as="main"
			templateColumns="1fr 300px 300px  1fr"
			templateRows="1fr 300px 1fr"
			templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'"
		>
			<Flex gridArea="logo" flexDir="column" alignItems="flex-start">
				<Heading size="2xl">Logo vai aqui</Heading>
			</Flex>

			<Flex
				gridArea="form"
				flexDir="column"
				alignItems="stretch"
				padding={16}
				borderRadius="md"
				backgroundColor="gray.700"
			>
				<Input height="50px" />
			</Flex>
		</Grid>
	</ChakraProvider>
);
