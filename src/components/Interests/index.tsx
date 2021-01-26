import { Badge, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';

const interestsData = [
	'JavascriptIcon',
	'TypeScript',
	'HTML',
	'CSS',
	'Python',
	'PostgreSQL',
	'DataScience',
	'REST',
	'Scrum',
	'DevOps',
	'CleanCode',
	'React',
	'ReactNative',
	'Frontend',
	'Backend',
	'FullStack',
];

const Interests: React.FC = () => {
	return (
		<Card>
			<Heading>Interesses</Heading>
			<Wrap>
				{interestsData.map((elem) => (
					<WrapItem key={elem}>
						<Badge variant="outline" colorScheme="green" fontSize="sm">
							#{elem}
						</Badge>
					</WrapItem>
				))}
			</Wrap>
		</Card>
	);
};

export default Interests;
