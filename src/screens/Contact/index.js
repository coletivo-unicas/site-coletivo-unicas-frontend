import React from 'react';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import TextArea from '../../components/Form/TextArea';
import useForm from '../../Hooks/useFormInput';
import './style.css';

const Contact = () => {
  const name = useForm();
  const email = useForm('email');
  const [who, setWho] = React.useState('');
  const [contactReason, setContactReason] = React.useState('');
  const message = useForm();

  const whoOptions = [
    'Estudante/Ex-Estudante da Unicap',
    'Estudante fora da Unicap',
    'Empresa',
    'Instituição de Ensino',
    'Coletivo',
    'Outro',
  ];

  const contactReasonOptions = [
    'Convidar para Evento ou Projeto',
    'Estabelecer Parceria',
    'Participar do Coletivo',
    'Saber mais sobre evento/projeto promovido pelo coletivo',
    'Trocar uma ideia',
    'Dúvidas Gerais',
  ];

  function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && email.validate() && message.validate()) {
      console.log('Enviar');
      // TODO:fazer envio de email
    } else {
      console.log('Não Enviar');
      // TODO:mostrar erro
    }
  }

  //   function handleBlur({ target }) {
  //     validateEmail(target.value);
  //   }

  //   function handleChange({ target }) {
  //     if (error) {
  //       validateEmail(target.value);
  //     }
  //     setEmail(target.value);
  //   }

  //   function validateEmpty(value) {
  //     if (value.length === 0) {
  //       setError('Preencha o valor');
  //       return false;
  //     }
  //   }

  //   function validateEmail(value) {
  //     if (value.length === 0) {
  //       setError('Preencha o valor');
  //       return false;
  //     } else if (regexEmail.test(value)) {
  //       setError('Preencha um email válido');
  //       return false;
  //     } else {
  //       setError(null);
  //       return true;
  //     }
  //   }

  return (
    <div className="contact" id="contact">
      <h2 className="contact--title">Entre em contato com a gente</h2>
      <h6>Informações Gerais</h6>
      <p>
        Telefone: <a href="tel:+5581997730481">+55 (81) 99773-0481</a>
      </p>
      <p>
        Email:{' '}
        <a href="mailto:coletivounicas@gmail.com">coletivounicas@gmail.com</a>
      </p>
      Endereço:
      <p>
        <a
          href="https://goo.gl/maps/apVwmSeMBfyPVbq98"
          target="_blank"
          rel="noreferrer noopener"
        >
          {' '}
          R. do Príncipe, 526, CEP 50050-900
          <br />
          Boa Vista, Recife - Pernambuco
        </a>
      </p>
      <div className="container m-5">
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            id="name"
            type="text"
            placeholder="Nome"
            // onChange={handleChange}
            // onBlur={handleBlur}
            {...name}
          />

          <Input
            label="Email"
            id="email"
            type="text"
            placeholder="seuemail@exemplo.com"
            // onChange={handleChange}
            // onBlur={handleBlur}
            {...email}
          />

          <Select
            id="who"
            label="Eu sou..."
            options={whoOptions}
            value={who}
            setValue={setWho}
          />

          <Select
            id="contactReason"
            label="Motivo de Contato"
            options={contactReasonOptions}
            value={contactReason}
            setValue={setContactReason}
          />

          <TextArea
            label="Sua Mensagem:"
            id="message"
            placeholder="Deixe aqui sua mensagem que teremos o maior prazer em te responder!"
            rows="5"
            // value={message}
            // setValue={setMessage}
            // onChange={handleChange}
            // onBlur={handleBlur}
            {...message}
          />

          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
