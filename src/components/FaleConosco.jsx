import 'Css/Qualidades.less';
import React, { Component } from 'react';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import { isAndroid, isIOS } from 'react-device-detect';
import Bloco from 'Components/assets/Bloco';
import ImageTop from 'Components/assets/ImageTop';
import TextField from 'Components/form/TextField';
import Button from 'Components/form/Button';
import icon13 from 'Images/icons/icon13.png';
import icon14 from 'Images/icons/icon14.png';
import icon15 from 'Images/icons/icon15.png';

class FaleConosco extends Component {
	constructor(props) {
		super(props);

		this.getMap = (isAndroid)
			? 'geo:-21.0830673,-49.2386976'
			: (isIOS)
				? 'http://maps.apple.com/?ll=-21.0830673,-49.2386976'
				: 'https://www.google.com.br/maps/place/JDNet+Telecom/@-21.0830673,-49.2386976,17z/data=!3m1!4b1!4m5!3m4!1s0x94bc302ef85478fb:0x254bc1bc82aad5c4!8m2!3d-21.0830673!4d-49.2365089?hl=pt-BR';

		this.state = {
			nome: '',
			email: '',
			telefone: '',
			cidade: '',
			mensagem: ''
		};

		this.clearState = this.clearState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.location.pathname === '/fale-conosco/:scroll') { // eslint-disable-line
			$('html,body').animate({ scrollTop: $('#form').offset().top }, 'slow');
		}
	}

	handleSubmit() {
		const json = {
			nome: this.state.nome,
			email: this.state.email,
			telefone: this.state.telefone,
			cidade: this.state.cidade,
			mensagem: this.state.mensagem
		};

		$.ajax({
			type: 'POST',
			url: 'http://jdnet.com.br:21167/send-message',
			data: JSON.stringify(json),
			dataType: 'json',
			contentType: 'application/json',
			success: () => {
				toast.success('E-mail enviado com sucesso.');
				this.clearState();
			},
			error: () => {
				toast.error('Erro ao enviar o email.');
			}
		});
	}

	clearState() {
		this.setState({ nome: '', email: '', telefone: '', cidade: '', mensagem: ''	});

		$('#nome').val('');
		$('#email').val('');
		$('#telefone').val('');
		$('#cidade').val('');
		$('#mensagem').val('');
	}

	render() {
		return (
			<div style={{ backgroundColor: '#fff' }}>
				<ToastContainer />
				<ImageTop image="fale_conosco">Fale<br />Conosco</ImageTop>
				<div className="container-fluid  qualidades-container">
					<div className="row">
						<div className="col-md-1 d-none d-md-block" />
						<div className="col-xs-12 col-md-10" style={{ paddingBottom: '50px' }}>
							<div className="row">
								<div className="col-xs-12 col-md-4">
									<Bloco image={icon13} title="Endereço" titleClass="color-orange">
										<a href={this.getMap} target="_blank" style={{ color: '#777' }}>Rua Coronel Jonas G. Gonzaga, 1353-A,<br />15.860-000, Ibirá - SP</a>
									</Bloco>
								</div>
								<div className="col-xs-12 col-md-4">
									<Bloco image={icon14} title="Expediente e Atendimento Técnico" titleClass="color-orange">
										8h às 17h de segunda à sexta<br />8h às 12h aos sábados
									</Bloco>
								</div>
								<div className="col-xs-12 col-md-4">
									<Bloco image={icon15} title="Call Center" titleClass="color-orange">
										<a href="tel:((17) 3551-2121)" style={{ color: '#777' }}>(17) 3551-2121</a> - <a href="tel:(0800-771-0299)" style={{ color: '#777' }}>0800-771-0299</a><br />
										7h30 às 21h<br /> segunda à sábado e feriados
									</Bloco>
								</div>
							</div>
						</div>
						<div className="col-md-1 d-none d-md-block" />
					</div>
				</div>
				<div className="container-fluid background-dark-blue" style={{ paddingTop: '50px', paddingBottom: '100px' }} id="form">
					<form>
						<div className="row">
							<div className="col-md-1 d-none d-md-block" />
							<div className="col-xs-12 col-md-10">
								<div className="row">
									<div className="col-xs-12 col-md-6">
										<div className="row">
											<div className="col-12" style={{ paddingTop: '15px' }}>
												<TextField id="nome" type="text" name="nome" label="Nome" onChange={(value) => { this.setState({ nome: value }); }} />
											</div>
										</div>
										<div className="row">
											<div className="col-12" style={{ paddingTop: '15px' }}>
												<TextField id="email" type="email" name="email" label="E-mail" onChange={(value) => { this.setState({ email: value }); }} />
											</div>
										</div>
										<div className="row">
											<div className="col-12" style={{ paddingTop: '15px' }}>
												<TextField id="telefone" type="phone" name="telefone" label="Telefone" onChange={(value) => { this.setState({ telefone: value }); }} />
											</div>
										</div>
										<div className="row">
											<div className="col-12" style={{ paddingTop: '15px' }}>
												<TextField id="cidade" name="cidade" label="Cidade" onChange={(value) => { this.setState({ cidade: value }); }} />
											</div>
										</div>
									</div>
									<div className="col-xs-12 col-md-6" style={{ paddingTop: '15px' }}>
										<div className="row">
											<div className="col-12">
												<TextField id="mensagem" name="mensagem" label="Mensagem" multiline rows={10} onChange={(value) => { this.setState({ mensagem: value }); }} />
											</div>
										</div>
										<div className="row" style={{ marginTop: '15px' }}>
											<div className="col-xs-12 col-md-9" />
											<div className="col-xs-12 col-md-3">
												<Button type="button" onClick={this.handleSubmit} title="enviar" className="small only-border light-blue" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-1 d-none d-md-block" />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default FaleConosco;
