import logo from '../assets/images/logo.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

const Header = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between px-5 mb-10 py-5 lg:hidden">
        <img src={logo} alt="Logo" />

        <button className="w-10 h-10 text-white bg-red-600 rounded-full flex flex-col justify-center items-center gap-1">
          <div className="w-5 h-[2px] bg-white" />
          <div className="w-5 h-[2px] bg-white" />
          <div className="w-5 h-[2px] bg-white" />
        </button>
      </nav>

      <nav className="w-full flex justify-between items-center container mx-auto max-w-7xl h-28 z-50 max-lg:hidden">
        <div className="w-1/2 flex items-center">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-6 ml-12 text-xl font-normal">
            <a href="#home" className="active:text-red-500">
              Home
            </a>
            <a
              href="#pages"
              className="flex items-center  ml-10 text-xlfont-normal"
            >
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  Open
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-5 shadow-lg rounded-lg gap-5 flex flex-col bg-white border-2">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem className="px-5 py-2 outline-none hover:text-red-500 cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-5 py-2 outline-none hover:text-red-500 cursor-pointer">
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-5 py-2 outline-none hover:text-red-500 cursor-pointer">
                    Team
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-5 py-2 outline-none hover:text-red-500 cursor-pointer">
                    Subscription
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </a>

            <a
              href="#service"
              className="flex items-center  ml-10 text-xl font-normal"
            >
              Service
            </a>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          {/* <div>Right</div> */}
          <button className="px-10 py-4 bg-white text-red-600 text-lg font-bold rounded-full">
            Open Account
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
