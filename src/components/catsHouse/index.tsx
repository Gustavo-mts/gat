export default function CatsHouse() {
  return (
    <section className="flex justify-center">
      {/* Wrapper com background e tamanho responsivo */}
      <div
        className="
          relative flex w-full
          bg-[url('/cats-banner.png')] bg-cover bg-center
          h-[660px] xl:h-[760px] 2xl:h-[820px]
          max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px]
        "
      >
        {/* PANE ESQUERDO (área do cenário com pins) */}
        <div
          className="
            relative
            basis-[69%]  /* ~880px de 1280px */
            h-full
          "
        >
          {/* Pins (posições em % do pane esquerdo; escalam naturalmente) */}
          <div className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[50%] left-[30.9%] -translate-y-1/2 rounded-full bg-white">
            1
          </div>

          <div className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[54.5%] left-[50%] -translate-y-1/2 rounded-full bg-white">
            2
          </div>

          <div className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[10.6%] left-[61.4%] -translate-y-1/2 rounded-full bg-white">
            3
          </div>

          <div className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[22.7%] left-[89.8%] -translate-y-1/2 rounded-full bg-white">
            4
          </div>

          <div className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[50%] left-[98.9%] -translate-y-1/2 rounded-full bg-white">
            5
          </div>
        </div>

        {/* PANE DIREITO (cartão) */}
        <div className="flex items-start justify-start h-full ml-16">
          <div
            className="
              mt-6 mr-6
              w-[282px] h-[322px]
              xl:w-[320px] xl:h-[360px]
              2xl:w-[360px] 2xl:h-[400px]
              border bg-white p-8
            "
          >
            <h3
              className="
                font-sora font-bold
                text-[30px] leading-none
                xl:text-[32px] 2xl:text-[36px]
              "
            >
              Lorem Ipsum Dolor Sit
            </h3>

            <p
              className="
                font-sora font-light
                text-[14px] leading-snug mt-6
                xl:text-[15px] 2xl:text-[16px]
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <p
              className="
                font-sora font-light
                text-[14px] leading-snug mt-6
                xl:text-[15px] 2xl:text-[16px]
              "
            >
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>

            <button
              className="
                mt-6 rounded-[29px] border uppercase
                font-sora font-normal
                py-4 pl-8 pr-4 text-[17px]
                xl:text-[18px] 2xl:text-[19px]
              "
            >
              Ver seleção
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
