import 'Css/AreaCobertura.less';
import React from 'react';
import ImageTop from 'Components/assets/ImageTop';
import cobertura from 'Images/cobertura.png';

const AreaCobertura = function() {
	return (
		<div>
			<ImageTop image="area-cobertura">Área de<br />Cobertura</ImageTop>
			<div className="container-fluid nossa-historia" style={{ background: '#fff' }}>
				<div className="row">
					<div className="col-md-1 d-none d-md-block" />
					<div className="col-xs-12 col-md-10" style={{ paddingTop: '70px', paddingBottom: '100px' }}>
						<div className="row">
							<div className="col-xs-12 col-md-4">
								<p>Pensando na qualidade do produto final entregue ao cliente, que busca excelência no serviço prestado, atendemos toda a região de Ibirá, cidades vizinhas e áreas rurais.</p><br /><br />
								<p>Toda ativação de internet é feita mediante agendamento e viabilidade técnica do local.</p>
							</div>
							<div className="col-xs-12 col-md-8 text-center">
								<img src={cobertura} alt="Área de Cobertura" style={{ width: '100%' }} />
							</div>
						</div>
					</div>
					<div className="col-md-1 d-none d-md-block" />
				</div>
			</div>
		</div>
	);
};

export default AreaCobertura;
