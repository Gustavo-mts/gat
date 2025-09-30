import Banner1 from '../assets/images/banner-minimalism-1.png'
import Circle from '../assets/images/circle.png'
import Retangle from '../assets/images/Rectangle-minimalism.png'
import Banner2 from '../assets/images/banner-minimalism-2.png'


export default function MinimalistBanner() {
  return (
    <div className='flex'>
      <div className='z-10'>
        <img src={Banner1} />
      </div>
      <div className='ml-[-120px] mt-[90px] z-0'>
        <img src={Circle} />
      </div>
      <div className='ml-[-880px] mt-[80px]'>
        <img src={Retangle} />
      </div>
      <div className='ml-[-80px] mt-[220px] z-10'>
        <img src={Banner2} />
      </div>
    </div>
  )
}