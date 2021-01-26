import { Center, ChakraProvider, Container, Heading } from '@chakra-ui/react';
import * as React from 'react';
import CandidateInformation from './components/CandidateInformation';
import Interests from './components/Interests';
import custonTheme from './theme';

export const App = () => (
	<ChakraProvider theme={custonTheme}>
		<Container width="100%" maxW="860px">
			<Center flexDirection="column">
				<Heading as="h1" size="2xl">
					Éricson Rogério Moreira
				</Heading>
				<CandidateInformation />
				<Interests />
			</Center>
		</Container>
	</ChakraProvider>
);
