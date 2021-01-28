import { Center, ChakraProvider, Heading, VStack } from '@chakra-ui/react';
import * as React from 'react';
import AboutMe from './components/AboutMe';
import CandidateInformation from './components/CandidateInformation';
import Formation from './components/Formation';
import Interests from './components/Interests';
import Languages from './components/Languages';
import ProfessionalExperiences from './components/ProfessionalExperiences';
import custonTheme from './theme';

export const App = () => (
	<ChakraProvider theme={custonTheme}>
		<Center flexDirection="column" padding={12}>
			<VStack maxWidth="860px" spacing={8}>
				<Heading as="h1" size="4xl" marginY={10} width="100%">
					Éricson Rogério Moreira
				</Heading>
				<CandidateInformation />
				<AboutMe />
				<Formation />
        <ProfessionalExperiences />
        <Languages />
				<Interests />
			</VStack>
		</Center>
	</ChakraProvider>
);
