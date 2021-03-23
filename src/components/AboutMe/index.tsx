import { Text } from '@chakra-ui/react';
import Card from 'components/Card';
import React from 'react';

const AboutMe: React.FC = () => {
	return (
		<Card title="Sobre mim">
			<Text color="white">
				Olá… meu nome é <strong>Éricson</strong>, moro em{' '}
				<strong>Fortaleza - CE</strong>, curso de{' '}
				<strong>
					Ciência da Computação na UECE - Universidade Estadual do Ceará
				</strong>
				. Busco oportunidades para trabalhar em projetos desafiadores e com
				colegas que estejam dispostos a compartilhar conhecimento e aprender
				cada vez mais. Gosto de filmes/séries, Board Games e tudo mais
				relacionado à cultura Nerd.
			</Text>
		</Card>
	);
};

export default AboutMe;
