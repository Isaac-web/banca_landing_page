import SolutionCard from './SolutionCard';
import moneyboxIcon from '../assets/images/savings.svg';
import creditCardIcon from '../assets/images/credit-card.svg';
// import autoLoanIcon from '../assets/images/auto-loans.svg';
// import homeLoanIcon from '../assets/images/home-loans.svg';
// import investmentIcon from '../assets/images/investment.svg';

const cards = [
  {
    title: 'Check Your Account',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat.',
    buttonLabel: 'Open Account',
    buttonLink: '#',
    imageUrl: creditCardIcon,
  },
  {
    title: 'Savings Account',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat.',
    buttonLabel: 'Start Saving',
    buttonLink: '#',
    imageUrl: moneyboxIcon,
  },
  {
    title: 'Credit Cards',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat.',
    buttonLabel: 'Request Credit Card',
    buttonLink: '#',
    imageUrl: creditCardIcon,
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-16 bg-slate-50 relative lg:-top-24 max-md:px-8">
      <div className="container max-w-7xl mx-auto mb-16">
        <div className="flex flex-col items-center mb-12">
          <div className="h-1 w-20 bg-red-600 mb-5" />
          <h2 className="text-left md:text-center text-4xl font-semibold">
            Solutions for every <br className="max-md:hidden" /> business need.
          </h2>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
          {cards.map((c, index) => (
            <div className="col-span-1" key={index}>
              <SolutionCard
                title={c.title}
                text={c.text}
                buttonLabel={c.buttonLabel}
                buttonLink={c.buttonLink}
                imageUrl={c.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container max-w-7xl m-auto flex flex-col justify-center items-center gap-5">
        <h3 className="text-3xl font-semibold max-md:text-center">
          Need a personalized solution?
        </h3>
        <p className="text-xl text-center text-gray-400 mb-5">
          Get in touch with us, and we will help you to create the right{' '}
          <br className="max-md:hidden" />
          one for your business or personal needs.
        </p>

        <button className="text-xl font-semibold text-white px-8 py-5 rounded-full bg-red-600 hover:opacity-80 transition-all">
          Customize your plan{' '}
        </button>
      </div>
    </section>
  );
};

export default SolutionsSection;
