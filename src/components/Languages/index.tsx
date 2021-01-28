import { List, ListIcon, ListItem, Tag } from '@chakra-ui/react';
import Card from 'components/Card';
import { CheckCircleIcon } from 'icons';
import React from 'react';

interface Language {
	name: string;
	status: string;
}

const languagesData: Language[] = [
	{
		name: 'Português',
		status: 'Nativo',
	},
	{
		name: 'Inglês',
		status: 'Intermediário',
	},
];

const Languages: React.FC = () => {
	return (
		<Card title="Línguas">
			<List spacing={3}>
				{languagesData.map((elem, index) => (
					<ListItem key={index}>
						<ListIcon as={CheckCircleIcon} color="green.500" />
						{elem.name}
						<Tag borderRadius="full" colorScheme="blue" marginLeft={2}>
							{elem.status}
						</Tag>
					</ListItem>
				))}
			</List>
		</Card>
	);
};

export default Languages;
