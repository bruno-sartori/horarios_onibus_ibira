import 'Css/Qualidades.less';
import React from 'react';
import Bloco from 'Components/assets/Bloco';
import ImageTop from 'Components/assets/ImageTop';
import { Link } from 'react-router-dom';
import icon7 from 'Images/icons/icon7.png';
import icon11 from 'Images/icons/icon11.png';

const Corporativo = function() {
	return (
		<div style={{ backgroundColor: '#fff' }}>
			<ImageTop image="servicos">Planos<br />Corporativos</ImageTop>
			<div className="container-fluid qualidades-container">
				<div className="row">
					<div className="col-md-1 d-none d-md-block" />
					<div className="col-xs-12 col-md-10" style={{ paddingBottom: '50px' }}>
						<div className="row">
							<div className="col-12" id="qualidades-container">
								<h1>Soluções corporativas para sua<br />empresa e orgãos públicos.</h1>
							</div>
						</div>
						<div className="row">
							<br /><br /><br /><br />
							<div className="col-xs-12 col-md-6">
								<Bloco image={icon7} title="Link Dedicado" imgHeight="50px">
									Destinado a médias e grandes empresas que necessitam de um Link Internet exclusivo, com garantia
									de banda 100% para download e upload. Atendimento exclusivo 24x7. Sendo uma tecnologia totalmente
									dedicada aos interesses da sua Empresa.
								</Bloco>
							</div>
							<div className="col-xs-12 col-md-6">
								<Bloco image={icon11} title="Transporte" imgHeight="50px">
									Criado especialmente para interligar todas as unidades/filiais da sua empresa. Neste cenário o transporte de dados
									é totalmente privado e protegido por criptografia em um tunel Layer2. Disponibilizamos este serviço
									somente em nossa <Link to="/area-de-cobertura">Área de Cobertura</Link>, nas tecnologias Rádio e Fibra Óptica.
								</Bloco>
							</div>
							<br /><br /><br /><br />
						</div>
						<div className="row">
							<div className="col-sm-4" />
							<div className="col-sm-4">
								<br /><br /><br /><br />
								<center>
									<Link className="link-button large only-border gray" style={{ width: '100%', paddingTop: '10px' }} to="/fale-conosco/:scroll">
										<span className="italic medium-size">entrar em contato</span>
									</Link>
								</center>
								<br /><br />
							</div>
							<div className="col-sm-4" />
						</div>
					</div>

					<div className="col-md-1 d-none d-md-block" />
				</div>
			</div>
		</div>
	);
};

export default Corporativo;
