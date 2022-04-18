import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-ponter ${classProps}`}>{title}</li>;
};
const Navbar = () => {
  const [toggleManu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between item-center p-4">
      <div className=" md:flex-[0.5] flex-initial justify-center items-center">
        <img src={Logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavbarItem title={item} key={item + index} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 cursor-pointer hover:bg-[#2456bd] rounded">Login</li>
      </ul>
      <div className="flex relative">
        {toggleManu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleManu)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleManu)}
          />
        )}
        {toggleManu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vW] h-screen shadow-2xl md:hidden list-none flex 
          flex-col justify-start items-end  rounded-md blue-glassmorphism text-white animate-slide-in cursor-pointer"
          >
            <li className="text-xl x-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
              <NavbarItem title={item} key={item + index} classProps="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
