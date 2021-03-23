import { Box, Center, ChakraProvider, Heading, VStack } from '@chakra-ui/react';
import * as React from 'react';
import AboutMe from 'components/AboutMe';
import CandidateInformation from 'components/CandidateInformation';
import Formation from 'components/Formation';
import Interests from 'components/Interests';
import Languages from 'components/Languages';
import ProfessionalExperiences from 'components/ProfessionalExperiences';
import custonTheme from 'theme';
// import Footer from 'components/Footer';

export const App = () => (
	<ChakraProvider theme={custonTheme}>
		<Center
			h="300px"
			w="full"
			bgSize="cover"
			bgPos="center"
			bgRepeat="no-repeat"
			filter="grayscale(0.5)"
			bgImg="url('/computer.jpg')"
			display="flex"
			flexDir="column"
		>
			<Box borderWidth="5px" borderColor="white">
				<Heading size="2xl" color="white" p="10px">
					Éricson Rogério Moreira
				</Heading>
			</Box>
			<Heading size="sm" marginTop={2} color="gray.200">
				Graduando em Ciência da Computação · Frontend Developer
			</Heading>
		</Center>
		<Center flexDirection="column" padding={12} backgroundColor="gray.800">
			<VStack maxWidth="860px" spacing={8}>
				<CandidateInformation />
				<AboutMe />
				<Formation />
				<ProfessionalExperiences />
				<Languages />
				<Interests />
				{/* <Footer /> */}
			</VStack>
		</Center>
	</ChakraProvider>
);
