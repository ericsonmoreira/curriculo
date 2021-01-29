import { HStack, Icon, Link, Text } from '@chakra-ui/react';
import Card from 'components/Card';
import {
	ExternalLinkIcon,
	GithubIcon,
	LinkedinIcon,
	MailIcon,
	MapMarkerIcon,
	PhoneIcon,
	WhatsAppIcon,
} from 'icons';
import React from 'react';

const CandidateInformation: React.FC = () => {
	return (
		<Card title="Informações Gerais">
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
				<Icon as={WhatsAppIcon} color="#128C7E" />
				<Text fontSize="md" alignItems="center">
					<strong>WhatsApp</strong> ·
				</Text>
				<Link href="https://wa.me/5585997926510" isExternal color="teal.500">
					(85) 99792-6510 <Icon as={ExternalLinkIcon} />
				</Link>
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
				<Icon as={LinkedinIcon} color="#0e76a8" />
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
		</Card>
	);
};

export default CandidateInformation;
