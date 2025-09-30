import Prize from '../../assets/icons/prize.png'
import BenefitCarousel from '../../components/benefitCarousel'

export default function Benefits() {
  return (
    <div className="flex flex-col justify-center items-center mt-[-8px]">
      <div className="w-[90%] h-1 bg-[#000] text-white flex px-6 py-1 xl:px-12 xl:py-1 2xl:px-16 2xl:py-1"></div>
      <div className="flex justify-center">
        <div className="w-[90%] h-[238px] bg-[#DE5A53] text-white flex px-6 py-6 xl:px-12 xl:py-8 2xl:px-16 2xl:py-10">
          <div
            className="border border-white/80 flex-shrink-0
                      basis-[315px] xl:basis-[360px] 2xl:basis-[420px]
                      flex items-center gap-4 px-4"
          >
            <div className="leading-none">
              <div className="font-extralight text-[120px] xl:text-[150px] 2xl:text-[180px] leading-[100%] tracking-[0] [text-box-trim:both] [text-box-edge:cap]">
                10
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 xl:gap-4">
              <div className="font-sora font-bold text-[24px] xl:text-[30px] 2xl:text-[34px] leading-[100%]">
                Benefício Principal
              </div>
              <div className="font-sora font-light text-[12px] xl:text-[14px] 2xl:text-[16px] leading-[120%]">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col border border-white/80 border-l-0 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 divide-x divide-y divide-white/80 border-b-0 border-white/80">
              {[1, 2, 3].map((i) => (
                <div key={i} className="min-h-[120px] xl:min-h-[115px] py-3 px-4">
                  <div className="flex items-start gap-2">
                    <img src={Prize} className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
                    <span className="font-sora font-bold text-[18px] xl:text-[22px] leading-[110%]">
                      Benefício Secundário
                    </span>
                  </div>
                  <p className="font-sora font-light text-[12px] xl:text-[14px] leading-[130%] mt-2">
                    Lorem ipsum dolor sit amet, consectetur al muad’ib.
                  </p>
                </div>
              ))}
            </div>

            <div className="flex-1 border-t border-white/80 border-b-0">
              <BenefitCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}