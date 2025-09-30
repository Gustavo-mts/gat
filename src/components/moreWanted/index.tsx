import Elipse from '../../assets/icons/Ellipse 9.png'
import Chart from '../../assets/images/image 5.png'
import Variacao from '../../assets/images/variacoes.png'

export default function MostWanted() {
  return (
    <div className="flex justify-center py-6">
      <div className="flex items-start
                      gap-4 xl:gap-6 2xl:gap-10
                      4xl:px-12
                      w-full max-w-[1400px] 2xl:max-w-[1600px]">

        <div className="
            w-[330px] h-[401px]
            xl:w-[380px] xl:h-[430px]
            2xl:w-[420px] 2xl:h-[460px]
            relative
          ">
          <div>
            <img src={Elipse} className="
              w-auto h-auto
              max-w-[85%] xl:max-w-[90%] 2xl:max-w-[95%]
            " />
          </div>

          <div className="
              font-sora font-bold uppercase
              text-[70px] leading-[74px]
              xl:text-[78px] xl:leading-[82px]
              2xl:text-[92px] 2xl:leading-[96px]
              tracking-normal
              -mt-[110px] ml-6
            ">
            Queri <br /> dinho <span className="font-normal">deles</span>
          </div>

          <button className="
              flex items-center space-x-[10px]
              rounded-[29px] border border-current uppercase
              px-6 py-3 ml-6 mt-8
              text-[20px] leading-[100%]
              xl:text-[20px]
              2xl:text-[22px]
            ">
            <span className="font-sora font-light">Ver tudo</span>
          </button>
        </div>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="
              w-[310px] h-[436px] mt-8
              xl:w-[340px] xl:h-[480px]
              2xl:w-[380px] 2xl:h-[520px]
              flex flex-col
            "
          >
            <div className="flex flex-col items-end pr-2 xl:pr-4">
              <div className="
                  flex items-center space-x-[10px]
                  py-[7px] px-2 mt-[10px] w-fit
                  bg-[#4DA1B1] uppercase text-white
                  text-[10px] leading-none
                  xl:text-[11px] 2xl:text-[12px]
                ">
                <div className="font-sora font-bold">
                  10%<span className="font-normal">off</span>
                </div>
              </div>
              <div className="
                  flex items-center space-x-[10px]
                  py-[7px] px-2 mt-1 w-fit
                  bg-[#E5675D] uppercase text-white
                  text-[10px] leading-none
                  xl:text-[11px] 2xl:text-[12px]
                ">
                <span className="font-sora font-bold">Lançamento</span>
              </div>
            </div>

            <div className="w-full flex justify-center my-12 xl:my-10 2xl:my-10">
              <img
                src={Chart}
                className="max-w-[85%] xl:max-w-[88%] 2xl:max-w-[90%] h-auto object-contain"
              />
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-end">
                <div className="font-sora leading-none tracking-normal">
                  <span className="font-bold text-base xl:text-[17px] 2xl:text-[18px] uppercase">
                    Toca tunel <br /> módulos
                  </span>
                  <div className="font-light text-[12px] xl:text-[13px] 2xl:text-[14px] mt-1">
                    <span className="line-through mr-1">R$00,00</span>
                    <span className="font-bold">R$0000,00</span>
                  </div>
                </div>
                <div className="pr-2">
                  <img src={Variacao} className="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
