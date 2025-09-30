import ClassicImage from '../../assets/images/classic.png'
import Minimalism from '../../assets/images/minimalism.png'
import Maximalism from '../../assets/images/maximalism.png'
import Boho from '../../assets/images/boho.png'

export default function Categories() {
  return (
    <section className='w-full mt-10 py-10'>
        <h3 className='font-sora font-bold text-[18px] leading-none tracking-[8px] text-center'>NAVEGUE PELAS CATEGORIAS</h3>
        <div className='mt-6 flex flex-wrap items-center justify-around gap-6'>
          <div className='flex items-center rounded-[34px] border py-3 px-12 space-x-[10px] uppercase font-sora font-normal text-[20px] leading-none tracking-normal'>
            <img src={ClassicImage} className='mr-2'/>
            Clássico
          </div>
          <div className='flex items-center rounded-[29px] border py-3 px-6 space-x-[10px] uppercase font-sora font-normal text-[20px] leading-none tracking-normal'>
            <img src={Minimalism}  className='mr-2'/>
            Minimalismo
          </div>
          <div className='flex items-center rounded-[29px] border py-3 px-6 space-x-[10px] uppercase font-sora font-normal text-[20px] leading-none tracking-normal'>
            <img src={Maximalism}  className='mr-2'/>
            Maximalismo
          </div>
          <div className='flex items-center rounded-[29px] border py-3 px-16 space-x-[10px] uppercase font-sora font-normal text-[20px] leading-none tracking-normal'>
            <img src={Boho}  className='mr-2'/>
            Boho
          </div>
          <div className='rounded-[29px] border py-5 px-8 space-x-[10px] uppercase font-sora font-normal text-[20px] leading-none tracking-normal'>
            Ver tudo
          </div>
        </div>
      </section>
  )
}