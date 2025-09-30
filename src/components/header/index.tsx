"use client"

import { Search } from "lucide-react"

import Gat from '../../assets/icons/Group.png'
import Logo from '../../assets/icons/Vector-logo.png'
import Menu from '../../assets/icons/menu_01.png'
import Conta from '../../assets/icons/conta.png'
import Notification from '../../assets/icons/notification.png'
import Cart from '../../assets/icons/cart.png'

export function Header() {
  return (
    <header className="relative">
      <div className="relative mx-auto bg-black text-white w-[92%]">
        <div className="flex items-center justify-between h-[40px] xl:h-[40px] gap-8">
          <div className="flex items-center flex-shrink-0 bg-[#efefef] h-[40px]">
            <a href="/" aria-label="Página Inicial GAT - Design para Gatos" className="mt-0 flex space-between px-4 mt-[20px]">
              <img src={Logo} className="w-[24px] h-[24.16px] mr-1" alt="Logo marca GAT" />
              <img src={Gat} className="w-[34.51px] h-[37.11px]" alt="Nome GAT" />
            </a>
          </div>

          <nav className="flex items-center gap-6 xl:gap-8" aria-label="Navegação de Produtos e Coleções">
            <a href="/produtos" className="flex items-center gap-2 text-sm xl:text-base hover:text-pink-400 transition-colors">
              <img src={Menu} alt="Ícone de Menu" />
              <span>produtos</span>
            </a>
            <a href="/colecoes" className="flex items-center gap-2 text-sm xl:text-base hover:text-pink-400 transition-colors">
              <img src={Menu} alt="Ícone de Menu" />
              <span>coleções</span>
            </a>
          </nav>

          <nav className="flex items-center gap-2 xl:gap-4 flex-1 justify-end" aria-label="Navegação Institucional e Wishlist">
            <a href="/blog" className="text-sm xl:text-base hover:text-pink-400 transition-colors whitespace-nowrap">
              blog
            </a>
            <a href="/lookbook" className="text-sm xl:text-base hover:text-pink-400 transition-colors whitespace-nowrap">
              lookbook
            </a>
            <a href="/sobre" className="text-sm xl:text-base hover:text-pink-400 transition-colors whitespace-nowrap">
              sobre a Gat
            </a>
            <a href="/wishlist" className="text-sm xl:text-base hover:text-pink-400 transition-colors whitespace-nowrap">
              wishlist
            </a>
          </nav>

          <div className="relative flex-shrink-0 w-64 xl:w-[213px]">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" aria-hidden="true" />
            <input
              type="text"
              placeholder="digite aqui o que procura"
              aria-label="Campo de busca de produtos"
              className="w-full bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 pr-10 h-9 xl:h-10 text-sm"
            />
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="/conta" aria-label="Minha Conta">
              <img src={Conta} alt="Ícone de Conta de Usuário" />
            </a>
            <div className="flex">
              <a href="/carrinho" aria-label="Carrinho de Compras">
                <img src={Cart} className="w-[17px] h-[16px]" alt="Ícone de Carrinho de Compras" />
              </a>
              <button aria-label="Notificações">
                <img src={Notification} className="w-[13px] h-[13px]" alt="Ícone de Notificações" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}