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

      {/* Main header content */}
      <div className="relative mx-auto bg-black text-white w-[92%]">
        <div className="flex items-center justify-between h-[40px] xl:h-[40px] gap-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 bg-[#efefef] h-[40px]">
            <div className="mt-0 flex space-between px-4 mt-[20px]">
              <img src={Logo} className="w-[24px] h-[24.16px] mr-1" />
              <img src={Gat} className="w-[34.51px] h-[37.11px]" />
            </div>
          </div>

          {/* Navigation - Left side */}
          <nav className="flex items-center gap-6 xl:gap-8">
            <button className="flex items-center gap-2 text-sm xl:text-base hover:text-pink-400 transition-colors">
              <img src={Menu} />
              <span>produtos</span>
            </button>
            <button className="flex items-center gap-2 text-sm xl:text-base hover:text-pink-400 transition-colors">
              <img src={Menu} />
              <span>coleções</span>
            </button>
          </nav>

          {/* Navigation - Right side */}
          <nav className="flex items-center gap-2 xl:gap-4 flex-1 justify-end">
            <a href="#" className="text-sm xl:text-base hover:text-pink-400 transition-colors whitespace-nowrap">
              blog
            </a>
            <a href="#" className="text-sm xl:text-base hover:text-pink-400 transition-colors whitespace-nowrap">
              lookbook
            </a>
            <a href="#" className="text-sm xl:text-base hover:text-pink-400 transition-colors whitespace-nowrap">
              sobre a Gat
            </a>
            <a href="#" className="text-sm xl:text-base hover:text-pink-400 transition-colors whitespace-nowrap">
              wishlist
            </a>
          </nav>

          {/* Search bar */}
          <div className="relative flex-shrink-0 w-64 xl:w-[213px]">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="digite aqui o que procura"
              className="w-full bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 pr-10 h-9 xl:h-10 text-sm"
            />
          </div>

          {/* User actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <img src={Conta} />
            <div className="flex">
              <img src={Cart} className="w-[17px] h-[16px]" />
              <img src={Notification} className="w-[13px] h-[13px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
