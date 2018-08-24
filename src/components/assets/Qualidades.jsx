import 'Css/Qualidades.less';
import React from 'react';
import Bloco from 'Components/assets/Bloco';
import LinkButton from 'Components/form/LinkButton';
import icon1 from 'Images/icons/icon1.png';
import icon2 from 'Images/icons/icon2.png';
import icon3 from 'Images/icons/icon3.png';
import icon4 from 'Images/icons/icon4.png';
import icon5 from 'Images/icons/icon5.png';
import icon6 from 'Images/icons/icon6.png';


const Qualidades = function() {
	return (
		<div className="container-fluid qualidades-container">
			<div className="row" style={{ paddingBottom: '10px' }}>
				<div className="col-md-1 d-none d-md-block" />
				<div className="col-xs-12 col-md-10">
					<div className="row">
						<div className="col-12" id="qualidades-container">
							<h1 className="extra-large-size">Sua internet com<br />muito mais velocidade</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-4 showme">
							<Bloco image={icon1} title="Wi-fi Grátis" imgHeight="50px">
								Tenha mobilidade dentro da sua casa, este serviço permite você utilizar notebooks, tablets, celulares smartphones ou outro dispositivo que tenha capacidade de se conectar a uma rede sem fio.
Com a nova internet da JDnet Fibra você não precisa se preocupar em comprar seu roteador, nosso receptor óptico ja vem com Wi-Fi embutido em um único aparelho.
							</Bloco>
						</div>
						<div className="col-xs-12 col-md-4 showme">
							<Bloco image={icon2} title="Internet Ilimitada" imgHeight="50px">
								A internet da JDnet tem navegação ilimitada! Isso mesmo: Ilimitada. A internet da JDnet não possui franquia por mês.
Você escolhe o plano da sua necessidade que você precisa navegar, e pronto! Sem interrupções ou surpresas durante o mês inteiro.

							</Bloco>
						</div>
						<div className="col-xs-12 col-md-4 showme">
							<Bloco image={icon3} title="Instalação e Manutenção Rápida" imgHeight="50px">
								Nossa equipe esta preparada para realizar sua instalação o mais rápido o possível e também quando você precisar de manutenção também estamos preparados.
Nossos técnicos possuem treinamentos e são certificados para lhe atender com segurança e profissionalismo.
							</Bloco>
						</div>
					</div>
					<div className="row second-container">
						<div className="col-xs-12 col-md-4 showme">
							<Bloco image={icon4} title="Maior Garantia de Banda Mínima" imgHeight="50px">
								Com a JDnet você não fica sem velocidade mínima! Aonde garantimos cerca de 40% em média da banda contratada em momentos críticos.
							</Bloco>
						</div>
						<div className="col-xs-12 col-md-4 showme">
							<Bloco image={icon5} title="Atendimento ao Cliente" imgHeight="50px">
								Possuímos um amplo horário de atendimento ao Cliente sem interrupções. Veja no final desta página nossos horários para o seu atendimento.
							</Bloco>
						</div>
						<div className="col-xs-12 col-md-4 showme">
							<Bloco image={icon6} title="Sem consulta de CPF" imgHeight="50px">
								Não realizamos consulta de CPF para você se tornar nosso Cliente.
							</Bloco>
						</div>
					</div>
				</div>
				<div className="col-md-1 d-none d-md-block">
					<LinkButton className="bordless showme dark-blue" href="#header" style={{ position: 'absolute', bottom: '35px' }}><span className="fa fa-chevron-up fa-3x" /></LinkButton>
				</div>
			</div>
		</div>
	);
};

export default Qualidades;
