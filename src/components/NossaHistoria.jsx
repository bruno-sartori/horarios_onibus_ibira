import 'Css/NossaHistoria.less';
import React from 'react';
import { Link } from 'react-router-dom';
import ImageTop from 'Components/assets/ImageTop';
import equipe from 'Images/equipe.jpg';

const NossaHistoria = function() {
	return (
		<div>
			<ImageTop image="nossa-historia">Conheça<br />Nossa História</ImageTop>
			<div className="container-fluid nossa-historia" style={{ background: '#fff' }}>
				<div className="row">
					<div className="col-md-1 d-none d-md-block" />
					<div className="col-xs-12 col-md-10" style={{ paddingTop: '70px' }}>
						<div className="row">
							<div className="col-xs-12 col-md-6">
								<p>
									Nossa jornada começou em dezembro de 2001, com  objetivo inicial de oferecer internet discada
									aos moradores da cidade de Ibirá. Na época, não existia nenhum provedor de Acesso Local,
									então a JDnet proporcionou aos moradores da cidade acesso discado local sem a necessidade de
									desembolsarem valores altos com acesso discado interurbano.
								</p><br /><br />
								<p>
									Com o passar dos anos fomos também a primeira empresa a prover acesso à internet banda larga,
									por antenas de rádio transmissão. Foi quando rompemos nossas fronteiras expandindo a área de
									cobertura para cidades e áreas rurais vizinhas.
								</p><br /><br />
							</div>
							<div className="col-xs-12 col-md-6">
								<p>
									Em 2018, fizemos um grande investimento em tecnologia e começamos a fornecer internet fibra óptica
									em Ibirá e Termas de Ibirá. Isso proporcionou uma internet com muito mais qualidade, velocidade e preço acessível.
								</p><br /><br />
								<p>
									Atualmente atendemos várias cidades e áreas rurais da região de Ibirá.<br />Conheça nossa <Link to="/area-de-cobertura">Área de Cobertura</Link>.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<center><img src={equipe} alt="Equipe JDNet" style={{ width: '100%' }} /></center>
							</div>
						</div>
					</div>
					<div className="col-md-1 d-none d-md-block" />
				</div>
				<div className="row" style={{ marginTop: '80px', paddingBottom: '40px' }}>
					<div className="col-md-1 d-none d-md-block" />
					<div className="col-xs-12 col-md-10">
						<div className="row">
							<div className="col-xs-12 col-md-4">
								<div className="showme valores">
									<h1 className="large-size color-orange bold">Missão</h1>
									<p>Prover a nosso cliente tecnologia para conectar-se à internet com qualidade a qualquer momento, amparada em gestão por processos.</p>
								</div>
							</div>
							<div className="col-xs-12 col-md-4">
								<div className="showme valores">
									<h1 className="large-size color-orange bold">Visão</h1>
									<p>Estar entre as melhores empresas de acesso à internet na região noroeste do Estado de São Paulo.</p>
								</div>
							</div>
							<div className="col-xs-12 col-md-4">
								<div className="showme valores">
									<h1 className="large-size color-orange bold">Valores</h1>
									<p>Comprometimento, respeito, confiança, integridade, liderança. Compromisso com nossos clientes, colaboradores, fornecedores e parceiros.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-1 d-none d-md-block" />
				</div>
			</div>
		</div>
	);
};

export default NossaHistoria;
