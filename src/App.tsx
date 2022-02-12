import { Box, Center, ChakraProvider, Heading, VStack } from '@chakra-ui/react';
import AboutMe from 'components/AboutMe';
import CandidateInformation from 'components/CandidateInformation';
import Formation from 'components/Formation';
import Interests from 'components/Interests';
import Languages from 'components/Languages';
import ProfessionalExperiences from 'components/ProfessionalExperiences';
import * as React from 'react';
import custonTheme from 'theme';
import { GlassCard } from './styles';

export const App = () => {
	return (
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
				<Box m={4}>
					<GlassCard>
						<Heading size="2xl" color="white" p={4}>
							Éricson Rogério Moreira
						</Heading>
					</GlassCard>
					<Heading size="sm" marginTop={2} color="white">
						Graduando em Ciência da Computação · Frontend Developer
					</Heading>
				</Box>
			</Center>
			<Center flexDirection="column" padding={12} backgroundColor="gray.800">
				<VStack maxWidth="860px" spacing={8}>
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
};
