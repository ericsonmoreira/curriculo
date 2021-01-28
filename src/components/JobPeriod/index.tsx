import { HStack, Icon, Tag, Text } from '@chakra-ui/react';
import { LogInIcon, LogOutIcon } from 'icons';
import React from 'react';

interface JobPeriodProps {
	start: string;
	end?: string;
	notEndLabel?: string;
}

const JobPeriod: React.FC<JobPeriodProps> = (props) => {
	const { start, end, notEndLabel } = props;
	return (
		<HStack>
			<HStack alignItems="center">
				<Icon as={LogInIcon} color="green.600" />
				<Text>{start}</Text>
			</HStack>
			{end ? (
				<HStack>
					<Icon as={LogOutIcon} color="red.600" />
					<Text>{end}</Text>
				</HStack>
			) : (
				<Tag borderRadius="full" colorScheme="blue">
					{notEndLabel ? notEndLabel : 'Atualmente'}
				</Tag>
			)}
		</HStack>
	);
};

export default JobPeriod;
