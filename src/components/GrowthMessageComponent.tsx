import growthSectionImage from '../assets/images/growth-section-image.jpeg';

const GrowthMessageComponent = () => {
  return (
    <section className="ralative container max-w-7xl h-3/4 mx-auto flex flex-row max-md:flex-col justify-between items-center py-10">
      <div className="flex-1 relative mb-10">
        <div className="absolute top-8 -z-20 bg-gray-100 w-full h-[25em] max-md:h-[13em]" />
        <img src={growthSectionImage} className="w-[92%]" />
      </div>

      <div className="flex  items-start justify-center flex-1 gap-5 max-md:flex-col max-md:px-5">
        <div className="w-10 h-1 mt-3 bg-red-500" />
        <div className="w-8/12 max-md:w-full">
          <h2 className="text-3xl mb-5 font-semibold">
            We are here to help you{' '}
            <br className="max-md:hidden max-md:text-center" />
            grow faster.
          </h2>
          <p className="text-xl text-gray-500 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="border-[1px] border-red-500 text-red-500 px-8 py-4 rounded-full text-xl font-normal">
            About Banca
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrowthMessageComponent;
