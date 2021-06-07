import { Badge, Wrap, WrapItem } from '@chakra-ui/react';
import Card from 'components/Card';
import React from 'react';

const interestsData = [
	'JavascriptIcon',
	'TypeScript',
	'HTML',
	'CSS',
	'Python',
  'Java',
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
