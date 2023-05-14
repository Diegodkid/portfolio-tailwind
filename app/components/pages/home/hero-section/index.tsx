import { Button } from "@/app/components/button"
import { TecBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandInstagram, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com.br',
    icon: <TbBrandGithub />
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandLinkedin />
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandInstagram />
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandWhatsapp />
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-[#38bdd6]">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Diego Santos</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eveniet ipsum, reiciendis error aliquid nisi maxime ducimus, recusandae aut possimus maiores sapiente! Commodi illo soluta, qui laudantium praesentium labore sit.</p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            { Array.from({ length: 5}).map((_, index) => (
              <TecBadge name="Next-js"/>
            ))}
          </div>

          <div className="w-max mt-6 lg:mt-8 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button>
              Entre em contato
              <HiArrowNarrowRight />
            </Button>

            <div className="text-2xl text-gray-100 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a 
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-[#37cbc1] transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image 
          width={420}
          height={404}
          src='/images/hero.png'
          alt="Foto de perfil do Diego Santos"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] mb-6 lg:mb-0 rounded-b-3xl object-cover"
        />
      </div>
    </section>
  )
}