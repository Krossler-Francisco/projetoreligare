import React from 'react'
import Users from './Users'

function About() {
  return (
    <div className='about'>
          <div className='home'>
            <img className='info-h1' width={200} src="https://images.vexels.com/media/users/3/252027/isolated/preview/7d8e277792f119b7d5f52dfb0b4ca11c-a-rgano-de-accidente-cerebrovascular-humano.png" alt="" />
            <h1 className='home-h1 info-h1' >Como comecou?</h1>
            <p>O projeto de terapia social tem como finalidade tornar a psicoterapia mais acessível a maior parte da população, alcançando pessoas que não poderiam pagar por um valor normalmente praticado.</p>
            <p>No projeto de psicoterapia social oferecemos um atendimento de qualidade, onde um paciente que pagaria o valor normal também teria.</p>
          </div>
          <div className='home'>
            <img width={200} src="https://static.vecteezy.com/system/resources/thumbnails/012/658/228/small/psychological-counseling-concept-psychological-assistance-service-online-png.png" alt="" />
            <h1 className='info-h1' >Como funciona?</h1>
            <p>Para entrar no projeto de terapia a valor social, o paciente passa por uma primeira sessão de triagem, onde conversará com uma psicóloga sobre sua demanda, a abordagem terapêutica utilizada, forma de pagamento e é feita uma avaliação socioeconômica. Desta maneira você conseguirá definir um valor que melhor cabe no seu orçamento junto com a psicóloga. Esta sessão de triagem tem um valor fixo de 50 reais.</p>
            <p>Após esta sessão você será encaminhado para iniciar seu processo terapêutico com sua psicóloga que te acompanhará até o final do processo.</p>
            <p>As sessões são feitas 1x por semana com duração de 50 min.</p>
            <Users/>
          </div>
        
    </div>
  )
}

export default About