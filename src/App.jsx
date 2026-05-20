import './App.css'

// Components
import CardLink from './components/CardLink'

// Icons
import { CgDesktop } from "react-icons/cg";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function App() {
  const info = [
    {
      icon: CgDesktop,
      iconColor: '#094DD8',
      color: '#094DD8',
      title: 'Meu site | Portfólio',
      desc: 'Conheça meus projetos',
      link: 'https://ed-matheus-portfolio.vercel.app/'
    },
    {
      icon: FaBehance,
      iconColor: '#0E1423',
      color: '#f7f9f7',
      title: 'Portfólio de Design',
      desc: 'Projetos visuais e identidade',
      link: 'https://www.behance.net/edmatheus_design'
    },
    {
      icon: FaWhatsapp,
      iconColor: '#14AF50',
      color: '#14AF50',
      title: 'WhatsApp',
      desc: 'Fale comigo diretamente',
      link: ''
    },
    {
      icon: FaRegEnvelope,
      iconColor: '#F08901',
      color: '#F08901',
      title: 'E-mail',
      desc: 'Entre em contato por e-mail',
      link: ''
    }
  ]

  // console.log(info)

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-[url(./gpt-background.png)] bg-no-repeat bg-cover bg-center'>
      {/* Meu avatar */}
      <div className='rounded-full overflow-hidden border border-blue-600 shadow-[0_0px_20px_0px_rgba(21,93,252,0.6)] w-22 h-22 mb-2'>
        <img
          src="./avatar.jpg"
          alt="foto do Matheus"
          className='w-100 h-25'
        />
      </div>

      {/* @edmatheuss.web */}
      <span className='text-[#f7f9f7] text-xl'>
        @edmatheuss
        <span className='text-blue-500'>.web</span>
      </span>

      <div className='border border-blue-600 w-10 my-4'></div>

      <div className='flex flex-col justify-center items-center gap-3 mb-10'>
        <h3 className='text-blue-500 font-medium'>Tecnólogo em Design de Mídias Digitais</h3>
        <p className='text-[#f7f9f7] text-sm w-75'>
          Uno a criatividade do Design Digital com a precisão
          do desenvolvimento web para impulsionar o seu negócio.
        </p>
      </div>

      <div className='flex flex-col gap-2.5'>
        {info.map((link, index) => (
          <CardLink
            key={index}
            icon={link.icon}
            iconColor={link.iconColor}
            color={link.color}
            title={link.title}
            desc={link.desc}
            link={link.link}
          />
        ))}
      </div>

    </div>
  )
}

export default App
