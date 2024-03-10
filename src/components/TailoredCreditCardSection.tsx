import creditCartImage from '../assets/images/credit-card-banca-template.svg';

const TailoredCreditCardSection = () => {
  return (
    <section className=" container max-w-7xl h-3/4 mx-auto flex flex-row max-md:flex-col justify-around items-center py-10 max-md:px-8">
      <div className="mb-10 flex-1">
        <div className="flex items-center justify-center">
          <img
            src={creditCartImage}
            alt="Credit Card Image"
            className="w-auto rounded-3xl"
          />
        </div>
      </div>

      <div className="flex flex-1  items-start justify-center gap-5 max-md:flex-col max-md:px-5">
        <div className="w-10 h-1 mt-3 bg-red-500" />
        <div className="w-8/12 max-md:w-full">
          <h2 className="text-3xl mb-5 font-semibold">
            Meet our new credit card
            <br className="max-md:hidden max-md:text-center" />
            made for you.
          </h2>
          <p className="text-xl text-gray-500 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="border-[1px] bg-red-600 text-white px-8 py-4 rounded-full text-xl font-normal">
            Open Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default TailoredCreditCardSection;
