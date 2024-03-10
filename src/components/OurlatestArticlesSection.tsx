import ArticleCard from './ArticleCard';
import carImage from '../assets/images/car.jpeg';
import homeImage from '../assets/images/home.jpeg';
import officeImage from '../assets/images/office.jpg';

const cards = [
  {
    title: '5 Tips to choose the right auto loan to buy your next dream car',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat lorem elit arcu.',
    image: carImage,
  },
  {
    title: 'When is the perfect moment to apply for a home loan',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat lorem elit arcu.',
    image: homeImage,
  },
  {
    title: 'How to request a credit line increasement to your bank',
    label:
      'Your business plan outlines what your business does and what you are trying.',
    image: officeImage,
  },
];

const OurlatestArticlesSection = () => {
  return (
    <section className="bg-gray-50 py-20 -z-40 max-md:px-8">
      <div className="flex justify-center items-center">
        <div className="" />
        <div>
          <h2 className="font-semibold text-center text-4xl mb-5">
            Our latest articles.
          </h2>
          <p className="text-xl text-gray-500 text-center mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{' '}
            <br className="max-md:hidden" />
            do eiusmod tempor incididunt ut labore et dolores.
          </p>
        </div>
      </div>

      <div className="container max-w-7xl m-auto">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
          {cards.map((c) => (
            <div className="col-span-1">
              <ArticleCard summary={c.label} title={c.title} image={c.image} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-4 rounded-full border-[1px] text-red-600 border-red-600 font-semibold text-xl">
          See All Articles
        </button>
      </div>

      <div className="mx-auto max-w-7xl my-10 h-[2px] w-full bg-gray-200" />
    </section>
  );
};

export default OurlatestArticlesSection;
