import { HStack, Tag, Text } from '@chakra-ui/react';
import Card from 'components/Card';
import React from 'react';

const Formation: React.FC = () => {
	return (
		<Card title="Formação">
			<HStack>
				<Text>Bacharelado em Ciência da Computação - UECE</Text>
				<Tag borderRadius="full" colorScheme="blue">
					Cursando
				</Tag>
			</HStack>
			<Text color="gray.600">[2019.2 - Atualmente]</Text>
		</Card>
	);
};

export default Formation;
