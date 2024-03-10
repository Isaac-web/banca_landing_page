import { TextArea } from './TextArea';
import { TextField } from './TextField';
import officeIcon from '../assets/images/office-icon.svg';
import clockIcon from '../assets/images/clock-icon.svg';
import mailIcon from '../assets/images/mail-icon.svg';
// import { useResizeObserver } from 'usehooks-ts';

const officeInfo = [
  {
    title: 'OFFICE',
    image: officeIcon,
    line1: '1550 Bryant Street STE 750,',
    line2: 'San Francisco, CA 94103',
  },
  {
    title: 'CONTACT',
    image: mailIcon,
    line1: 'support@banca.com,',
    line2: 'info@banca.com',
  },
  {
    title: 'OPEN HOURS',
    image: clockIcon,
    line1: 'Monday - Saturday: 9am - 7pm,',
    line2: 'Sunday: 12am — 6pm',
  },
];

const ContactSection = () => {
  return (
    <section className="h-screen relative w-full max-md:mb-[1200px]">
      <div className="w-1/3 h-full bg-red-600 absolute right-0 top-0 max-md:hidden -z-10" />
      <div className="max-w-7xl mx-auto flex max-md:flex-col py-16">
        <div className="flex-1 max-md:p-8">
          <div className="w-10 h-1 mb-6 bg-red-600 max-md:mx-auto" />

          <div className="mb-10">
            <h2 className="text-4xl font-semibold mb-6 max-md:text-center">
              Get in touch with us.
            </h2>
            <p className="text-xl text-gray-400 max-md:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
              <br className="max-md:hidden" /> elit, sed do eiusmod tempor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {officeInfo.map((info) => (
              <div className="col-span-2 sm:col-span-1 mb-10">
                <div className="flex items-center gap-x-3 mb-5">
                  <img src={info.image} />
                  <h5 className="text-xl font-semibold uppercase tracking-widest">
                    {info.title}
                  </h5>
                </div>

                <p className="text-lg text-gray-500">{info.line1}</p>
                <p className="text-lg text-gray-500">{info.line2}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full h-full bg-white px-10 border-[1px] border-gray-200 py-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1 max-md:col-span-2">
                <TextField label="Name" placeholder="What is your name?" />
              </div>
              <div className="col-span-1 max-md:col-span-2">
                <TextField label="Phone" placeholder="(123) 480-3540" />
              </div>
              <div className="col-span-1 max-md:col-span-2">
                <TextField label="Email" placeholder="What's your email?" />
              </div>
              <div className="col-span-1 max-md:col-span-2">
                <TextField
                  label="Service interested in"
                  placeholder="Ex. Auto Load"
                />
              </div>
              <div className="col-span-2">
                <TextArea
                  label="Service interested in"
                  placeholder="Ex. Auto Load"
                />
              </div>

              <div className="col-span-1 max-md:col-span-2">
                <button className="border-[1px] bg-red-600 text-white px-8 py-4 rounded-full text-xl font-normal">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
