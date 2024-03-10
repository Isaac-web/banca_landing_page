import GoalKickstartCard from './GoalKickstartCard';
import studentImage from '../assets/images/students-image.jpeg';
import localBusinessOwnerImage from '../assets/images/local-business-owners.jpg';
import entrepreneurImage from '../assets/images/entrepreneurs.jpg';

const cards = [
  {
    label: 'Students',
    title: 'Open and account & grow your credit store',
    image: studentImage,
  },
  {
    label: 'Local business owners',
    title: 'Get a flexible loan to start your business',
    image: localBusinessOwnerImage,
  },
  {
    label: 'Entrepreneurs',
    title: 'Obtain credit to take grow your company',
    image: entrepreneurImage,
  },
];

const GoalKickstartSection = () => {
  return (
    <section>
      <div className="flex justify-center items-center pt-20">
        <div className="" />
        <div>
          <h2 className="font-semibold text-center text-4xl mb-5">
            What is your next goal?
          </h2>
          <p className="text-xl text-gray-500 text-center mb-10">
            We know how hard is it to start something new, that’s why we have{' '}
            <br className="max-md:hidden" />
            the perfect plan for you.
          </p>
        </div>
      </div>

      <div className="container max-w-7xl m-auto">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
          {cards.map((c) => (
            <div className="col-span-1">
              <GoalKickstartCard
                label={c.label}
                title={c.title}
                image={c.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-8 py-4 rounded-full bg-red-600 text-white font-semibold text-xl">
          Open Account
        </button>
      </div>

      <div className="mx-auto max-w-7xl my-10 h-[2px] w-full bg-gray-200" />
    </section>
  );
};

export default GoalKickstartSection;
