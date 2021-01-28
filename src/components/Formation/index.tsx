import { HStack, Text } from '@chakra-ui/react';
import Card from 'components/Card';
import JobPeriod from 'components/JobPeriod';
import React from 'react';

const Formation: React.FC = () => {
	return (
		<Card title="Formação">
			<HStack width="full" justify="space-between">
				<Text>Bacharelado em Ciência da Computação - UECE</Text>
				<JobPeriod start={'2019.2'} notEndLabel="Atualmente Cursando" />
			</HStack>
		</Card>
	);
};

export default Formation;
