import heroImage from '../assets/images/hero_image.jpg';

const HeroText = () => {
  return (
    <div className="min-h-[60vh] h-auto xl:px-0">
      <div className="h-1 w-20 bg-red-500 mb-8" />

      <section className="flex flex-col justify-start">
        <div>
          <h1 className="text-5xl font-bold mb-8">
            Helping your business grow to the next level.
          </h1>
        </div>

        <div className="mb-10">
          <h4 className="text-2xl font-normal text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            pharetra at velit dolor fames.
          </h4>
        </div>

        <div className="flex gap-5 max-lg:flex-col ">
          <button className="w-52 max-lg:w-full h-16 rounded-full text-xl font-semibold text-white bg-red-600">
            Open Account
          </button>
          <button className="w-52 max-lg:w-full h-16 rounded-full text-xl font-semibold border-[1px] border-red-600 text-red-600">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <section className="-mb-[100vh] lg:hidden">
        <div className="px-8 h-[100vh] ">
          <HeroText />
        </div>
        <div
          className="mt-12 h-[60vh] w-full"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
      </section>

      <section className="w-full  max-md:h-[105vh] lg:relative -top-28 -z-10 flex justify-center max-lg:flex-col max-sm:h-[20em] max-lg:hidden">
        <div className="absolute w-full mx-auto max-w-7xl h-screen max-sm:mt-[60vh]">
          <div className="w-[50%] max-lg:w-full flex pt-20 lg:pt-52">
            <HeroText />
          </div>
        </div>

        <div className="w-[54%] max-lg:w-full flex items-center pt-20 lg:pt-52" />
        <div
          className="w-[46%] max-lg:w-full h-screen max-lg:min-h-screen bg-contain md:bg-cover float-right"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </section>
    </>
  );
};

export default HeroSection;
