
function Users() {
  return (
    <div className='home about-section-space'>
      <h1 className='info-h1'>Nossos Psicólogos</h1>
      <div className="user-section">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="Psicólogo 1" className="user-image left" />
        <div className="user-info">
          <h2>Ricardo Falleiros</h2>
          <p>
          Ricardo é especialista em terapia cognitivo-comportamental e tem mais de 10 anos de experiência em ajudar pessoas a superarem seus desafios emocionais e psicológicos. Ele tem uma abordagem acolhedora e empática, trabalhando com foco no bem-estar emocional dos pacientes.
          </p>
        </div>
      </div>

      <div className="user-section">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="Psicólogo 3" className="user-image left" />
        <div className="user-info">
          <h2>Samuel</h2>
          <p>
            O Psicólogo 2 é especialista em terapia de casal e individual, com mais de 12 anos de experiência. Ele acredita no poder da comunicação e do autoconhecimento para melhorar as relações pessoais e profissionais, ajudando casais e indivíduos a alcançar maior harmonia em suas vidas.
          </p>
        </div>
      </div>

      {/* Terceiro Psicólogo */}
      <div className="user-section">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="Psicólogo 3" className="user-image left" />
        <div className="user-info">
          <h2>Giovanni</h2>
          <p>
            O Psicólogo 3 é especialista em terapia de casal e individual, com mais de 12 anos de experiência. Ele acredita no poder da comunicação e do autoconhecimento para melhorar as relações pessoais e profissionais, ajudando casais e indivíduos a alcançar maior harmonia em suas vidas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Users;
