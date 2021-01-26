import { Center, ChakraProvider, Container, Heading } from '@chakra-ui/react';
import * as React from 'react';
import AboutMe from './components/AboutMe';
import CandidateInformation from './components/CandidateInformation';
import Formation from './components/Formation';
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
        <AboutMe />
        <Formation />
				<Interests />
			</Center>
		</Container>
	</ChakraProvider>
);
