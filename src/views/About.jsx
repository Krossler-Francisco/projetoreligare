import "./about.css"
import Users from './Users'

function About() {
  return (
    <div className='about'>
          <div className='home about-section-space'>
          <h1 className='about-h1 info-h1 fon'>Quem somos?</h1>
            <img className='info' width={200} src="https://images.vexels.com/media/users/3/252027/isolated/preview/7d8e277792f119b7d5f52dfb0b4ca11c-a-rgano-de-accidente-cerebrovascular-humano.png" alt="section-alt" />
            <p>O Projeto Religare é uma iniciativa de psicólogos de Ubatuba e região, com objetivo de expandir o atendimento de psicoterapia individual para o maior número de pessoas, tendo seu enfoque em um serviço de extrema qualidade, com fim social, prezando por pessoas que muitas vezes se veem diante da necessidade de um tratamento psicológico, mas que carecem de recursos para fazê-lo.</p>
          </div>
          <div className='home about-section-space'>
            <h1 className='info-h1 fon' >Como funciona?</h1>
            <img className="img-info-space " width={200} src="https://static.vecteezy.com/system/resources/thumbnails/012/658/228/small/psychological-counseling-concept-psychological-assistance-service-online-png.png" alt="section-alt2" />
            <p>Para ser atendido(a) pelo Projeto Religare, primeiro deve ser preenchido o formulário inicial (presente aqui em nosso site e também na bio de nosso <a className="about-link" translate="no" href="https://www.instagram.com/projetoreligare.psi/" target="_blank" rel="noopener noreferrer">Instagram</a>), onde a partir das informações lá obtidas, nossa equipe fará uma análise e o encaminharemos para uma conversa inicial, online e gratuita, com um dos psicólogos de nossa equipe, onde mais informações sobre a terapia, a questão de valores e horários, além de tirar possíveis dúvidas que você possa ter acerca do processo psicoterapêutico.</p>
          </div>
            <Users/>
    </div>
  )
}

export default About