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
          <a href="/">
            <img src={Gat} className="w-[75px] h-[101.12px]" alt="Logotipo GAT - Design para Gatos" />
          </a>
        </div>

        <div className="w-2/5 border-r border-[#000]">
          <nav className="flex justify-between p-2 font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase border-b border-[#000]">
            <a href="/produtos">Produtos</a>
            <a href="/colecoes">Coleções</a>
            <a href="/lookbook">Lookbook</a>
            <a href="/sobre">Sobre</a>
            <a href="/wishlist">Wishlist</a>
            <a href="/blog">Blog</a>
          </nav>

          <div className="flex">
            <div className="w-[40%] p-4 border-r border-[#000]">
              <h6 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase mb-2">
                Formas de pagamento
              </h6>
              <div className="grid grid-cols-4 gap-1" role="img" aria-label="Aceitamos Visa, MasterCard, Diners Club, Elo, Hipercard, American Express e Pix.">
                <div><img src={Visa} alt="Bandeira Visa" /></div>
                <div><img src={MasterCard} alt="Bandeira MasterCard" /></div>
                <div><img src={DinersClub} alt="Bandeira Diners Club" /></div>
                <div><img src={Elo} alt="Bandeira Elo" /></div>
                <div><img src={Hipercard} alt="Bandeira Hipercard" /></div>
                <div><img src={AmericanExpress} alt="Bandeira American Express" /></div>
                <div><img src={Pix} alt="Pagamento via Pix" /></div>
              </div>
            </div>

            <div className="flex-1 p-4">
              <h6 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase">
                Certificados e segurança
              </h6>
              <div className="mt-1 flex items-center gap-2">
                <div className="p-2">
                  <img src={EmpresaCertificada} alt="Certificado Empresa Certificada" />
                </div>
                <div className="p-2">
                  <img src={Opinioes} alt="Selo Opinioes Verificadas" />
                </div>
                <div className="p-2">
                  <img src={Secure} alt="Selo de Site Seguro" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 flex">
          <div className="w-2/5 border-r border-[#000]">
            <div className="p-4">
              <h6 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase">Ajuda</h6>
              <nav aria-label="Links de Ajuda e Suporte">
                <ul className="font-sora font-normal text-[12px] leading-[25px] tracking-normal">
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/sobre-produtos">Sobre nossos produtos</a></li>
                  <li><a href="/trocas-devolucoes">Trocas e devoluções</a></li>
                  <li><a href="/entregas">Entregas</a></li>
                  <li><a href="/indique-ganhe">Indique e ganhe</a></li>
                  <li><a href="/garantias">Garantias</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-[#000]">
              <h6 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase">Contato</h6>
              <a href="https://wa.me/555199999999" target="_blank" rel="noopener noreferrer" className="block font-sora text-[12px] leading-[25px] tracking-normal">
                WhatsApp - (51) 9999-9999
              </a>
              <a href="mailto:ajuda@gat.com.br" className="block font-sora text-[12px] leading-[25px] tracking-normal">
                E-mail - ajuda@gat.com.br
              </a>
            </div>

            <div className="p-4">
              <h6 className="font-sora font-bold text-[12px] leading-[25px] tracking-normal uppercase mb-1">
                Redes sociais
              </h6>
              <div className="flex items-center gap-4">
                <a href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram GAT" /></a>
                <a href="URL_YOUTUBE" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="YouTube GAT" /></a>
                <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="LinkedIn GAT" /></a>
                <a href="URL_FACEBOOK" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook GAT" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between w-[96%] font-sora font-normal text-[10px] leading-[25px] tracking-normal text-right py-4'>
        <div>
          <p>©2024, GAT. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
        <address>
          <p>GAT LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras Palmeiras | Cataguases - MG | CEP 36774-550</p>
        </address>
      </div>
    </section>
  )
}