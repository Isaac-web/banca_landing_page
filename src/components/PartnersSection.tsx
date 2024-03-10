import agency from '../assets/images/partner-agency-logo.svg';
import application from '../assets/images/partner-application-logo.svg';
import venture from '../assets/images/partner-venture-logo.svg';
import business from '../assets/images/partner-business-logo.svg';

const parters = [
  {
    logo: agency,
  },
  {
    logo: application,
  },
  {
    logo: venture,
  },
  {
    logo: business,
  },
];

const PartnersSection = () => {
  return (
    <section className="lg:relative  max-md:static lg:-top-32 max-md:-top-52 max-md:mt-[100vh] ">
      <div className="w-11/12 max-lg:w-full bg-white min-h-40 lg:pl-32 lg:pr-16 max-md:px-10  items-center flex max-md:flex-col max-lg:gap-10 justify-between p-10">
        <div>
          <p className="uppercase text-2xl text-gray-400 font-thin">Partners</p>
        </div>

        <div className="flex gap-12 max-md:flex-col flex-wrap">
          {parters.map((p, index) => (
            <img key={index} src={p.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
