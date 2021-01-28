import { Text } from '@chakra-ui/react';
import Card from 'components/Card';
import React from 'react';

interface IProfessionalExperience {
	title: string;
	office: string;
	pediod: {
		start: string;
		end: string;
	};
	assignments: string;
}

const proExData: IProfessionalExperience[] = [
	{
		title: 'Fundação Cearense de Pesquisa e Cultura - FUNCAP',
		office: 'Estagiário',
		assignments:
			'Auxiliar no desenvolvimento de testes automatizados, no desenvolvimento de aplicações em C/C++ e Java. Planejar e executar planos de manutenção preventiva e acompanhamento de testes de programas e plano de testes.',
		pediod: {
			start: '09/2010',
			end: '09/2011',
		},
	},
	{
		title: 'Banco do Brasil',
		office: 'Escriturário',
		assignments:
			'Atuar na comercialização de produtos e serviços bancários, atendimento ao público, atuar no caixa, manter contato com clientes e prestar informações aos clientes e usuários.',
		pediod: {
			start: '11/2013',
			end: '09/2018',
		},
	},
	{
		title: 'Escola de Saúde Pública do Ceará - ESP',
		office: 'Bolsista',
		assignments:
			'Participar da equipe de desenvolvimento como programador Frontend usando ReactJS em um projeto de registro clínico de informações hospitalares de pacientes com Covid-19 (ResCovid) em um hospital de referência do Ceará.',
		pediod: {
			start: '06/2020',
			end: '11/2020',
		},
	},
	{
		title: 'FFIT - Inovação e Tecnologia',
		office: 'Estagiário',
		assignments:
			'Participar como programador Frontend do time de desenvolvimento de sistema web utilizando ReactJS.',
		pediod: {
			start: '11/2020',
			end: 'Atual',
		},
	},
];

const ProfessionalExperiences: React.FC = () => {
	return (
		<Card title="Experiências Profissionais">
			{proExData.map((elem, index) => (
				<Text key={index}>{elem.title}</Text>
			))}
		</Card>
	);
};

export default ProfessionalExperiences;
