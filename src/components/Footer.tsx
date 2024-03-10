import logo from '../assets/images/logo.svg';
import facebookIcon from '../assets/images/facebook-icon.svg';
import twitterIcon from '../assets/images/twitter.svg';
import instagramIcon from '../assets/images/instagram-icon.svg';
import linkedInIcon from '../assets/images/linkedIn-icon.svg';

import mailIcon from '../assets/images/mail-icon.svg';
import telephoneIcon from '../assets/images/telephone.svg';
import locationIcon from '../assets/images/location.svg';

const socialMediaHandles = [
  { icon: facebookIcon },
  { icon: twitterIcon },
  { icon: instagramIcon },
  { icon: linkedInIcon },
];

const menu = [
  {
    label: 'Home V1',
    link: '#',
  },
  {
    label: 'Home V2',
    link: '#',
  },
  {
    label: 'Service',
    link: '#',
  },
  {
    label: 'About us',
    link: '#',
  },
  {
    label: 'Blog',
    link: '#',
  },
  {
    label: 'Contact Us',
    link: '#',
  },
];

const contact = [
  {
    label: 'support@banca.com',
    link: '#',
    icon: mailIcon,
  },
  {
    label: '+1 (415) 374-7356',
    link: '#',
    icon: telephoneIcon,
  },
  {
    label: '1550 Bryant Street STE 750, ',
    link: '#',
    icon: locationIcon,
  },
];

const utilityPages = [
  {
    label: 'Storyguide',
    link: '#',
  },
  {
    label: '404 Not Found',
    link: '#',
  },
  {
    label: 'Password Protected',
    link: '#',
  },
  {
    label: 'Licennses',
    link: '#',
  },
  {
    label: 'Start Here',
    link: '#',
  },
  {
    label: 'Changelog',
    link: '#',
  },
];

const Footer = () => {
  return (
    <footer className=" h-[20vh] w-full">
      <div className="h-[1px] w-full bg-gray-300 mx-auto" />

      <div className="max-w-7xl m-auto py-10 max-md:px-5">
        <div className="grid grid-cols-3">
          <div className="col-span-1 max-md:col-span-3">
            <img src={logo} className="mb-6 max-md:mx-auto" />
            <div className="text-lg text-gray-400 mb-6 max-md:text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              voluptates.
            </div>

            <div className="flex gap-8 max-md:justify-center">
              {socialMediaHandles.map((handle) => (
                <img src={handle.icon} />
              ))}
            </div>
          </div>

          <div className="col-span-2 max-md:col-span-3 flex justify-end max-md:flex-col max-md:mt-16 gap-10">
            <div className="w-auto">
              <span className="font-semibold text-lg text-black block">
                Menu
              </span>
              <div className="w-full h-[2px] bg-gray-300 my-10" />
              <div>
                {menu.map((m) => (
                  <a
                    className="block py-2  pr-5 min-w-[10em] text-lg text-gray-500 hover:text-red-500"
                    href={m.link}
                  >
                    {m.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="w-auto min-w-[8em]">
              <span className="font-semibold text-lg text-black block">
                Contact Us
              </span>
              <div className="w-full h-[2px] bg-gray-300 my-10" />

              <div>
                {contact.map((m) => (
                  <a
                    className="block py-2  pr-5 text-lg text-gray-500 hover:text-red-500"
                    href={m.link}
                  >
                    <div className="flex gap-x-5">
                      <div>
                        <img src={m.icon} />
                      </div>
                      <div>
                        <p>{m.label}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="w-auto min-w-[13em]">
              <span className="font-semibold text-lg text-black block">
                Utility Pages
              </span>
              <div className="w-full h-[2px] bg-gray-300 my-10" />
              <div>
                {utilityPages.map((m) => (
                  <a
                    className="block py-2  pr-5 text-lg text-gray-500 hover:text-red-500"
                    href={m.link}
                  >
                    {m.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
