import { HStack, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import {
	LinkedinIcon,
	GithubIcon,
	MapMarkerIcon,
	PhoneIcon,
	MailIcon,
} from '../../icons';
import Card from '../Card';

const CandidateInformation: React.FC = () => {
	return (
		<Card>
			<HStack>
				<Icon as={MapMarkerIcon} color="red.400" />
				<Text fontSize="md" alignItems="center">
					<strong>Localização</strong> · Fortaleza - CE
				</Text>
			</HStack>
			<HStack>
				<Icon as={PhoneIcon} />
				<Text fontSize="md" alignItems="center">
					<strong>Fone</strong> · (85) 99792-6510
				</Text>
			</HStack>
			<HStack>
				<Icon as={MailIcon} />
				<Text fontSize="md" alignItems="center">
					<strong>E-mail</strong> · moreira.ericson@gmail.com/
				</Text>
			</HStack>
			<HStack>
				<Icon as={GithubIcon} color="gray.700" />
				<Text fontSize="md" alignItems="center">
					<strong>Github</strong> ·{' '}
					<Link href="https://github.com/ericsonmoreira/">@ericsonmoreira</Link>
				</Text>
			</HStack>
			<HStack>
				<Icon as={LinkedinIcon} color="#0e76a8" />
				<Text fontSize="md" alignItems="center">
					<strong>Linkedin</strong> ·{' '}
					<Link href="https://www.linkedin.com/in/ericsonmoreira/">
						linkedin.com/in/ericsonmoreira/
					</Link>
				</Text>
			</HStack>
		</Card>
	);
};

export default CandidateInformation;
