import NewsLetterImage from '../../assets/images/newsletter.png'

export default function NewsLetter() {
  return (
    <section className="flex justify-center bg-[#efefef]">
      <div className="w-full max-w-[1280px] 2xl:max-w-[1600px] px-4 xl:px-6 2xl:px-10 py-4 xl:py-0 flex border border-b-0 border-l-0 border-r-0">
        <div className="p-6 2xl:p-8 flex-shrink-0">
          <img
            src={NewsLetterImage}
            className="w-[460px] h-auto 2xl:w-[560px]"
            alt="Assine a newsletter para ganhar 10% na primeira compra"
          />
        </div>
        <div className="pb-6 pt-16 2xl:pt-20 flex-1 min-w-0">
          <h3 className="font-sora font-normal text-[50px] leading-none tracking-normal
                         2xl:text-[64px]">
            NewsLetter
          </h3>

          <div className="flex flex-col xl:flex-row mt-8 gap-8 xl:gap-10 2xl:gap-14">
            <div className="font-sora text-[14px] leading-[25px] tracking-normal
                            2xl:text-[16px] 2xl:leading-[28px]">
              <h5 className="font-bold uppercase">
                CADASTRE-SE E GANHE 10% OFF NA SUA PRIMEIRA COMPRA
              </h5>
              <p className="font-normal mt-4">
                Seja a primeira a receber lançamentos, novidades e promoções.
              </p>
            </div>

            <form className="w-full xl:w-[75%] xl:pl-10 2xl:pl-16 space-y-6 2xl:space-y-7">
              <label className="block">
                <span className="text-sm 2xl:text-base font-medium text-gray-700 uppercase tracking-wider">
                  NOME DO SEU PET
                </span>
                <input
                  type="text"
                  className="block w-full border-b border-black/50 bg-transparent
                             focus:outline-none focus:border-black
                             py-0 2xl:py-1"
                  aria-label="Nome do seu pet"
                />
              </label>

              <label className="block">
                <span className="text-sm 2xl:text-base font-medium text-gray-700 uppercase tracking-wider">
                  SEU EMAIL
                </span>
                <input
                  type="email"
                  className="block w-full border-b border-black/50 bg-transparent
                             focus:outline-none focus:border-black
                             py-0 2xl:py-1"
                  aria-label="Seu e-mail"
                />
              </label>

              <button
                type="submit"
                className="w-[188px] 2xl:w-[220px] text-center rounded-[29px] border border-black
                           uppercase font-sora font-normal text-[20px] 2xl:text-[22px]
                           leading-none tracking-normal mt-2 py-2 2xl:py-3
                           hover:bg-black hover:text-white transition-colors"
              >
                cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
