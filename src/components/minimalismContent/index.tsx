import MinimalistBanner from "../minimalistBanner";

export default function MinimalistContent() {
  return (
    <section className="relative flex justify-center overflow-x-hidden">
      <div className="relative w-full max-w-[1280px] 2xl:max-w-[1600px]">

        <div className="relative z-0">
          <MinimalistBanner />
        </div>

        <h3
          className="
            absolute z-20 font-sora font-bold text-white
            left-[82px] top-12 text-[50px] leading-[57px] tracking-normal
            xl:left-[350px] xl:top-12 xl:text-[50px] xl:leading-[57px]
            2xl:left-[350px] 2xl:top-14 2xl:text-[60px] 2xl:leading-[66px]
          "
        >
          MINIMA <br /> LISMO
        </h3>

        <p
          className="
            absolute z-20 font-sora font-normal tracking-normal text-[#000]
            w-[338px] left-96 top-[300px] text-[20px] leading-[30px]
            xl:w-[338px] xl:left-96 xl:top-[300px] xl:text-[20px] xl:leading-[30px]
            2xl:w-[400px] 2xl:left-[24rem] 2xl:top-[320px] 2xl:text-[22px] 2xl:leading-[32px]
          "
        >
          Also reality power discussion buy-in closest goto model. Have protocol at long practices
          low-hanging data most driver's.
        </p>

        <button
          className="
            absolute z-20 flex items-center space-x-[10px] rounded-[29px] border border-current uppercase text-[#000]
            left-96 top-[360px] px-6 py-3 font-sora font-light text-[20px] leading-[100%] tracking-normal
            hover:bg-white hover:text-black transition-colors
            xl:left-96 xl:top-[450px] xl:text-[20px]
            2xl:left-[24rem] 2xl:top-[490px] 2xl:text-[22px] 2xl:px-7 2xl:py-3.5
          "
        >
          <span className="uppercase">Explorar</span>
        </button>

        <div
          className="
            absolute z-20 bg-white flex items-center justify-center
            right-[66px] -top-[15px] w-[200px] h-[60px]
            xl:right-[200px] xl:-top-[15px]
            2xl:right-[500px] 2xl:-top-[10px] 2xl:w-[220px] 2xl:h-[64px]
          "
        >
          <button className="font-sora font-extralight text-sm uppercase underline">
            Ver todos
          </button>
        </div>
      </div>
    </section>
  )
}
