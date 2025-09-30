export default function CatsHouse() {
  return (
    <section className="flex justify-center" aria-label="Produtos em destaque no ambiente GAT">
      <div
        className="
          relative flex w-full
          bg-[url('/cats-banner.png')] bg-cover bg-center
          h-[660px] xl:h-[760px] 2xl:h-[820px]
          max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px]
        "
      >
        <img
          src="/cats-banner.png"
          alt="Banner de ambiente decorado com casinhas e arranhadores minimalistas para gatos"
          style={{ display: 'none' }}
        />

        <div
          className="
            relative
            basis-[69%]
            h-full
          "
        >
          <a href="/produto/1" aria-label="Ver produto 1" className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[50%] left-[30.9%] -translate-y-1/2 rounded-full bg-white">
            1
          </a>

          <a href="/produto/2" aria-label="Ver produto 2" className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[54.5%] left-[50%] -translate-y-1/2 rounded-full bg-white">
            2
          </a>

          <a href="/produto/3" aria-label="Ver produto 3" className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[10.6%] left-[61.4%] -translate-y-1/2 rounded-full bg-white">
            3
          </a>

          <a href="/produto/4" aria-label="Ver produto 4" className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[22.7%] left-[89.8%] -translate-y-1/2 rounded-full bg-white">
            4
          </a>

          <a href="/produto/5" aria-label="Ver produto 5" className="absolute inline-flex items-center justify-center w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] top-[50%] left-[98.9%] -translate-y-1/2 rounded-full bg-white">
            5
          </a>
        </div>

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

            <a
              href="/selecao-de-produtos"
              className="mt-6 rounded-[29px] border uppercase font-sora font-normal py-4 pl-8 pr-4 text-[17px] xl:text-[18px] 2xl:text-[19px] inline-block text-center"
              role="button"
            >
              Ver seleção
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}