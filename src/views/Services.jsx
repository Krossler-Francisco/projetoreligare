import "./about.css"

function Services() {
  return (
    <div className='about'>
      <div className='home about-section-space'>
        <h1 className='about-h1 info-h1'>Atendimento Psicológico  </h1>
        <img className='info-h1' width={200} src="https://static.vecteezy.com/system/resources/thumbnails/024/484/985/small/woman-military-soldier-with-psychologist-helping-to-get-rid-psychological-problems-received-in-army-png.png" alt="" />
        <p>O Projeto Religare oferece psicoterapia individual de alta qualidade, com o objetivo de atender pessoas de Ubatuba e Região que necessitam de apoio psicológico, mas não possuem os recursos necessários. Nosso foco está em proporcionar um atendimento acolhedor e eficaz, com uma abordagem humanizada, prezando pelo bem-estar emocional dos nossos pacientes.</p>
      </div>
      <div className='home about-section-space'>
        <h1 className='info-h1'>Palestras e Seminários sobre Saúde Mental</h1>
        <img width={200} src="https://img.freepik.com/vector-gratis/ilustracion-concepto-charla-publica_114360-27597.jpg" alt="" />
        <p>Além da psicoterapia, o Projeto Religare também oferece palestras com foco em saúde mental, abordando temas relevantes e ajudando a comunidade a lidar melhor com as questões psicológicas do dia a dia. As palestras são uma forma de disseminar informações sobre saúde emocional, cuidados com a mente e como buscar ajuda quando necessário.</p>
      </div>
    </div>
  )
}

export default Services
