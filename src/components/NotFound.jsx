import 'Css/NossaHistoria.less';
import React from 'react';
import ImageTop from 'Components/assets/ImageTop';

const NotFound = function() {
	return (
		<div>
			<ImageTop image="nossa-historia">404 <br />Página não encontrada.</ImageTop>
			<div className="container-fluid nossa-historia" style={{ background: '#fff' }}>
				<div className="row" style={{ height: '30vh' }}>
					<div className="col-md-1 d-none d-md-block" />
					<div className="col-xs-12 col-md-10" style={{ paddingTop: '70px', textAlign: 'center' }}>
						<div className="row">
							<div className="col-xs-12 col-md-12">
								<p style={{ fontWeight: '800', fontSize: '20px' }}>
									A página que você está procurando não existe ou foi movida para um novo endereço.<br />
									Verifique o endereço e tente novamente.
								</p>
							</div>
						</div>

						<br />
						<br />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
