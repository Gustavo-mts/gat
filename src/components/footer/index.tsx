import Gat from '../../assets/images/gat.png'
import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/mastercard.png'
import DinersClub from '../../assets/images/diners-club.png'
import Elo from '../../assets/images/elo.png'
import Hipercard from '../../assets/images/hipercard.png'
import AmericanExpress from '../../assets/images/american-express.png'
import Pix from '../../assets/images/pix.png'
import EmpresaCertificada from '../../assets/images/e-certificada.png'
import Opinioes from '../../assets/images/opinioes.png'
import Secure from '../../assets/images/secure.png'
import Instagram from '../../assets/images/_Instagram.png'
import Youtube from '../../assets/images/_YouTube.png'
import Linkedin from '../../assets/images/In.png'
import Facebook from '../../assets/images/facebook.png'

export default function Footer() {
  return (
    <section className="bg-[#efefef] flex flex-col justify-center items-center pt-6">
      <div className="w-[96%] min-h-[189px] flex border border-[#000]">
        <div className="w-1/5 bg-[#373737] flex justify-center items-center border-r border-[#000]">
          <img src={Gat} className="w-[75px] h-[101.12px]" />
        </div>

        <div className="w-2/5 border-r border-[#000]">
          <div className="flex justify-between p-2 font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase border-b border-[#000]">
            <span>Produtos</span>
            <span>Coleções</span>
            <span>Lookbook</span>
            <span>Sobre</span>
            <span>Wishlist</span>
            <span>Blog</span>
          </div>

          <div className="flex">
            <div className="w-[40%] p-4 border-r border-[#000]">
              <h5 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase mb-2">
                Formas de pagamento
              </h5>
              <div className="grid grid-cols-4 gap-1">
                <div><img src={Visa} /></div>
                <div><img src={MasterCard} /></div>
                <div><img src={DinersClub} /></div>
                <div><img src={Elo} /></div>
                <div><img src={Hipercard} /></div>
                <div><img src={AmericanExpress} /></div>
                <div><img src={Pix} /></div>
              </div>
            </div>

            <div className="flex-1 p-4">
              <h5 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase">
                Certificados e segurança
              </h5>
              <div className="mt-1 flex items-center gap-2">
                <div className="p-2">
                  <img src={EmpresaCertificada} />
                </div>
                <div className="p-2">
                  <img src={Opinioes} />
                </div>
                <div className="p-2">
                  <img src={Secure} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 flex">
          <div className="w-2/5 border-r border-[#000]">
            <div className="p-4">
              <h5 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase">Ajuda</h5>
              <ul className="font-sora font-normal text-[12px] leading-[25px] tracking-normal">
                <li>FAQ</li>
                <li>Sobre nossos produtos</li>
                <li>Trocas e devoluções</li>
                <li>Entregas</li>
                <li>Indique e ganhe</li>
                <li>Garantias</li>
              </ul>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-[#000]">
              <h5 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase">Contato</h5>
              <span className="block font-sora text-[12px] leading-[25px] tracking-normal">
                WhatsApp - (51) 9999-9999
              </span>
              <span className="block font-sora text-[12px] leading-[25px] tracking-normal">
                E-mail - ajuda@gat.com.br
              </span>
            </div>

            <div className="p-4">
              <h5 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase mb-1">
                Redes sociais
              </h5>
              <div className="flex items-center gap-4">
                <img src={Instagram} />
                <img src={Youtube} />
                <img src={Linkedin} />
                <img src={Facebook} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between w-[96%] font-sora font-normal text-[10px] leading-[25px] tracking-normal text-right py-4'>
        <div>
          <p>©2024, GAT. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
        <div>
          <p>GAT LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras Palmeiras | Cataguases - MG | CEP 36774-550</p>
        </div>
      </div>
    </section>
  )
}