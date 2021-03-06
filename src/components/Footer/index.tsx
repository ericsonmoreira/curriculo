import { Box, Icon, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from 'icons';
import React from 'react';

const Footer: React.FC = () => {
	return (
		<Box width="full">
			<Text color="white">
				Este currículo pode ser encontrado em{' '}
				<Link
					href="https://ericsonmoreira-curriculo.netlify.app/"
					isExternal
					color="teal.500"
				>
					ericsonmoreira-curriculo.netlify.app/ <Icon as={ExternalLinkIcon} />
				</Link>
			</Text>
		</Box>
	);
};

export default Footer;
