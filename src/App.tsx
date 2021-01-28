import { Center, ChakraProvider, VStack } from '@chakra-ui/react';
import * as React from 'react';
import AboutMe from 'components/AboutMe';
import CandidateInformation from 'components/CandidateInformation';
import Formation from 'components/Formation';
import Interests from 'components/Interests';
import Languages from 'components/Languages';
import MainTitle from 'components/MainTitle';
import ProfessionalExperiences from 'components/ProfessionalExperiences';
import custonTheme from 'theme';
import Footer from 'components/Footer';

export const App = () => (
	<ChakraProvider theme={custonTheme}>
		<Center flexDirection="column" padding={12} backgroundColor="gray.100">
			<VStack maxWidth="860px" spacing={8}>
				<MainTitle />
				<CandidateInformation />
				<AboutMe />
				<Formation />
				<ProfessionalExperiences />
				<Languages />
				<Interests />
				<Footer />
			</VStack>
		</Center>
	</ChakraProvider>
);
