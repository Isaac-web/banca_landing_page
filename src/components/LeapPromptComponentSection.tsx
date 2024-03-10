import wavyBackground from '../assets/images/background-wave-banca-template.svg';

const LeapPromptComponentSection = () => {
  return (
    <section className="relative bg-gray-50 w-full h-[85vh] -z-20 flex items-center justify-center">
      <div className="absolute w-full h-1/2 top-0 left-0 bg-red-600 -z-10" />
      <div
        className="container max-w-5xl bg-white py-16 flex justify-center items-center"
        style={{
          backgroundImage: `url('${wavyBackground}')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col justify-center items-center grap-5">
          <div className="w-14 h-1 bg-red-600 mb-10 mt-5" />
          <div className="mb-10">
            <h2 className="text-4xl font-semibold text-center">
              Ready to make the leap?
            </h2>
            <h2 className="text-4xl font-semibold text-center">
              Let us help you.
            </h2>
          </div>

          <div className="flex justify-center items-center gap-5 max-md:flex-col">
            <button className="px-8 py-4 text-white text-xl font-semibold bg-red-600 rounded-full">
              Open account
            </button>
            <button className="px-8 py-4 text-red-600 text-xl font-semibold border-[1px] border-red-500 rounded-full ">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeapPromptComponentSection;
