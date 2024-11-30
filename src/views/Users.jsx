
function Users() {
  return (
    <div className='home about-section-space'>
      <h1 className='info-h1'>Nossos Psicólogos</h1>
      <div className="user-section">
        <img src="./psi/1.jpg" alt="Psicólogo 1" className="user-image left" />
        <div className="user-info">
          <h2>Samuel Tomé</h2>
          <p>
          Sou psicólogo clínico, utilizo terapia cognitivo-comportamental, atuo no projeto Religare.
Sou membro da ABRAPSO Vale do Paraíba, busco conciliar o olhar psico-social no atendimento aos indivíduos dos mais diversos contextos ou classe social. Possuo formação em terapia cognitivo-comportamental e experiência em órgãos da assistência social e hospitalar.</p>
        </div>
      </div>

      <div className="user-section">
        <img src="./psi/2.jpg" alt="Psicólogo 3" className="user-image left" />
        <div className="user-info">
          <h2>Ricardo Falleiros</h2>
          <p>
          Sou Psicólogo Clínico, com ênfase em uma prática baseada em evidências, tendo por linha teórica a terapia Cognitivo-Comportamental. Atuo pelo Projeto Religare e na Clínica De Psicologia Giansante desde sua concepção, privilegiando um olhar científico e criterioso, adotando um tratamento para os transtornos mentais pautado em eficácia e efetividade, priorizando sempre  o vínculo terapêutico. Possuo formações na área de Desenvolvimento Humano, Psicopatologias e Prática Clínica.</p>
        </div>
      </div>

      {/* Terceiro Psicólogo */}
      <div className="user-section">
        <img src="./psi/3.jpg" alt="Psicólogo 3" className="user-image left" />
        <div className="user-info">
          <h2>Giovanni Ribeiro</h2>
          <p>
          Sou Psicologo Clínico, Terapeuta Cognitivo- Comportamental, atualmente atuando no Projeto Religare e na rede Pública - SUS - contratado pela Santa Casa de Ubatuba SP. Tenho um olhar Técnico e Social no que tange uma atenção criteriosa à Sociedade no objetivo de Prevenção à saúde e tratamento baseado em Evidências. Possuo formações na área de Desenvolvimento Humano e Lideranças. Possuo experiências na área de Psicologia Social.</p>
        </div>
      </div>
    </div>
  );
}

export default Users;
