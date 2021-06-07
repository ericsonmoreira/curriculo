import { Divider, HStack, Text, VStack } from '@chakra-ui/react';
import Card from 'components/Card';
import JobPeriod from 'components/JobPeriod';
import React from 'react';

export interface IProfessionalExperience {
	title: string;
	office: string;
	pediod: {
		start: string;
		end?: string;
	};
	assignments: string;
}

const proExData: IProfessionalExperience[] = [
	{
		title: 'ESP - Escola de Saúde Pública do CE',
		office: 'Desenvolvedor Pleno',
		assignments:
			'Além de usar meus conhecimentos como programador Frontend para o desenvolvimento de sistemas web utilizando React JS e React Native, também estou tendo oportunidades de me aventirar no mundo do Backend.',
		pediod: {
			start: '05/2021',
		},
	},
	{
		title: 'FFIT - Inovação e Tecnologia',
		office: 'Freelancer',
		assignments:
			'Participar como programador Frontend do time de desenvolvimento de sistema web utilizando React JS e React Native.',
		pediod: {
			start: '11/2020',
			end: '04/2021',
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
];

const ProfessionalExperiences: React.FC = () => {
	return (
		<Card title="Experiências Profissionais">
			<VStack color="white">
				{proExData.map((elem, index) => (
					<div key={index}>
						<VStack
							padding={2}
							divider={<Divider />}
							w="full"
							border="1px solid"
							borderColor="blue.200"
							rounded="md"
							alignItems="start"
						>
							<HStack justify="space-between" w="full">
								<Text as="strong" fontSize="xl">
									{elem.title}
								</Text>
								<JobPeriod start={elem.pediod.start} end={elem.pediod.end} />
							</HStack>
							<Text>
								<strong>Cargo: </strong>
								{elem.office}
							</Text>
							<Text>
								<strong>Atribuições: </strong>
								{elem.assignments}
							</Text>
						</VStack>
					</div>
				))}
			</VStack>
		</Card>
	);
};

export default ProfessionalExperiences;
