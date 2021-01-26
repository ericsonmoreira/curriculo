import { Text } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';

const AboutMe: React.FC = () => {
	return (
		<Card title="Sobre mim">
			<Text>
				Olá… Me chamo <strong>Éricson</strong>, moro em{' '}
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
