import ElipseRed from '../../assets/images/Ellipse-red.png'
import RetanlgeCats from '../../assets/images/Rectangle-cats.png'

export default function About() {
  return (
    <section className="flex justify-center bg-[#efefef]">
      <div className="w-full h-[660px] xl:h-[660px] 2xl:h-[780px] max-w-[1280px] xl:max-w-[1280px] 2xl:max-w-[1600px] px-4 xl:px-6 2xl:px-10 flex">
        <div className="w-1/2 py-16 relative">
          <img
            src={ElipseRed}
            alt="Elemento decorativo vermelho"
            className="w-[272px] h-[272px] ml-72 xl:w-[272px] xl:h-[272px] xl:ml-72 2xl:w-[320px] 2xl:h-[320px] 2xl:ml-[22rem]"
          />

          <h1
            className="w-[396px] ml-52 mt-[-180px] font-sora font-normal text-[70px] leading-none tracking-normal xl:w-[396px] xl:ml-52 xl:mt-[-180px] xl:text-[70px] 2xl:w-[480px] 2xl:ml-[15rem] 2xl:mt-[-210px] 2xl:text-[86px]"
          >
            Decorar Arranhar &amp; Relaxar
          </h1>
        </div>

        <div className="w-1/2 flex flex-col justify-center">
          <img
            src={RetanlgeCats}
            alt="Foto de gatos relaxando em móveis modernos e arranhadores da GAT"
            className="w-[505px] h-[284.0625px] xl:w-[505px] xl:h-[284.0625px] 2xl:w-[600px] 2xl:h-[337.5px]"
          />

          <p
            className="font-sora font-normal text-[14px] leading-[25px] tracking-normal mt-12 xl:text-[14px] xl:leading-[25px] 2xl:text-[16px] 2xl:leading-[28px] 2xl:max-w-[640px]"
          >
            Hammer can low idea of. Lunch able design items needle here stop drive. / or devil pants
            game close. Prioritize out key view / vendor we've. 4-blocker gave shift ideal based post.
          </p>

          <a
            href="/sobre"
            className="w-[225px] rounded-[29px] border uppercase font-sora font-normal text-[17px] leading-none tracking-normal mt-6 py-4 pl-8 pr-4 xl:w-[225px] xl:text-[17px] 2xl:w-[260px] 2xl:text-[18px] 2xl:py-5 2xl:pl-9 2xl:pr-5 bg-white hover:bg-black hover:text-white transition-colors text-center"
            role="button"
          >
            MAIS SOBRE A GAT
          </a>
        </div>
      </div>
    </section>
  )
}