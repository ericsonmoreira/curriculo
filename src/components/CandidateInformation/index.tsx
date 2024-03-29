import { HStack, Icon, Link, Text, VStack } from '@chakra-ui/react';
import Card from 'components/Card';
import {
	ExternalLinkIcon,
	GithubIcon,
	LinkedinIcon,
	MailIcon,
	MapMarkerIcon,
} from 'icons';
import React from 'react';

const CandidateInformation: React.FC = () => {
	return (
		<Card title="Informações Gerais" color="white">
			<VStack alignItems="flex-start">
				<HStack>
					<Icon as={MapMarkerIcon} />
					<Text fontSize="md" alignItems="center">
						<strong>Localização</strong> · Fortaleza - CE
					</Text>
				</HStack>
				<HStack>
					<Icon as={MailIcon} />
					<Text fontSize="md" alignItems="center">
						<strong>E-mail</strong> · moreira.ericson@gmail.com/
					</Text>
				</HStack>
				<HStack>
					<Icon as={GithubIcon} />
					<Text fontSize="md" alignItems="center">
						<strong>Github</strong> ·{' '}
						<Link
							href="https://github.com/ericsonmoreira/"
							isExternal
							color="teal.500"
						>
							@ericsonmoreira <Icon as={ExternalLinkIcon} />
						</Link>
					</Text>
				</HStack>
				<HStack>
					<Icon as={LinkedinIcon} />
					<Text fontSize="md" alignItems="center">
						<strong>Linkedin</strong> ·{' '}
						<Link
							href="https://www.linkedin.com/in/ericsonmoreira/"
							color="teal.500"
							isExternal
						>
							linkedin.com/in/ericsonmoreira/ <Icon as={ExternalLinkIcon} />
						</Link>
					</Text>
				</HStack>
			</VStack>
		</Card>
	);
};

export default CandidateInformation;
