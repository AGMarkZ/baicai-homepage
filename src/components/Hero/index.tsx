import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-black pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  瑪拉與樹
                </h1>
                <p className="mb-12 text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
                  但願使人有盼望的神 <br/>
                  因信將諸般的喜樂 <br/>
                  平安充滿你們的心 <br/>
                  使你們藉著聖靈的能力 <br/>
                  大有盼望<br/>
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://tv.baicai.dev/"
                    className="inline-block rounded-xs bg-green-600 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-green-700"
                  >
                    我愛看電視
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
