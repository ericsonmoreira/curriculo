import { Stack, Image, Text, useMediaQuery } from '@chakra-ui/react';
import Card from 'components/Card';
import React from 'react';

const AboutMe: React.FC = () => {
	const [isLargerThan650] = useMediaQuery('(min-width: 650px)');

	return (
		<Card title="Sobre mim">
			<Stack
				display="flex"
				flexDir={isLargerThan650 ? 'row' : 'column'}
				alignItems="center"
			>
				<Image
					objectFit="fill"
					src="/foto.png"
					boxSize="150px"
					margin={2}
					alt="Éricson Rogério Moreira"
					borderRadius="full"
				/>
				<Text color="white">
					Me chamo <strong>Éricson</strong>, moro em{' '}
					<strong>Fortaleza - CE</strong>, curso de{' '}
					<strong>
						Ciência da Computação na UECE - Universidade Estadual do Ceará
					</strong>
					. Busco oportunidades para trabalhar em projetos desafiadores e com
					colegas que estejam dispostos a compartilhar conhecimento e aprender
					cada vez mais. Gosto de filmes/séries, Board Games e tudo mais
					relacionado à cultura Nerd.
				</Text>
			</Stack>
		</Card>
	);
};

export default AboutMe;
