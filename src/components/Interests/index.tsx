import { Badge, Wrap, WrapItem } from '@chakra-ui/react';
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
		<Card title="Interesses">
			<Wrap>
				{interestsData.map((elem) => (
					<WrapItem key={elem}>
						<Badge colorScheme="green" fontSize="sm">
							#{elem}
						</Badge>
					</WrapItem>
				))}
			</Wrap>
		</Card>
	);
};

export default Interests;
