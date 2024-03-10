const HeroText = () => {
  return (
    <div className="min-h-[60vh] h-auto">
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

const HomeTest = () => {
  return (
    <section className="container max-w-7xl mx-auto">
      <div className="w-full relative">
        <section className="absolute top-0 left-0 w-full bg-orange-400  flex flex-col lg:flex-row">
          <div className="top-0 w-full lg:w-1/2 h-screen flex items-center pr-10">
            <HeroText />
          </div>
          <div className="w-full lg:w-1/2 h-screen bg-green-200">Right</div>
        </section>

        <section className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-screen flex items-center pr-10">
            <HeroText />
          </div>
          <div className="w-full lg:w-1/2 h-screen bg-yellow-200">Right</div>
        </section>
      </div>

      <div className="h-32 bg-green-300">Solution</div>
      <div className="h-32 bg-red-300">Growth</div>
      <div className="h-32 bg-yellow-300">LeadPrompt</div>
      <div className="h-32 bg-blue-300">GoalKickerStartSection</div>
      <div className="h-32 bg-purple-300">Credit Card</div>
      <div className="h-32 bg-cyan-300">Articles</div>
      <div className="h-32 bg-blue-900">Contact</div>
    </section>
  );
};

export default HomeTest;
