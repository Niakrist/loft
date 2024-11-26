import React from "react";
import ArrowSlide from "./icons/ArrowSlide";
import Bedroom from "./icons/Bedroom";
import CartIcon from "./icons/CartIcon";
import Childrensroom from "./icons/Childrensroom";
import Closet from "./icons/Closet";
import DeliveryIcon from "./icons/DeliveryIcon";
import Etc from "./icons/Etc";
import Kitchen from "./icons/Kitchen";
import Livingroom from "./icons/Livingroom";
import LogoIcon from "./icons/LogoIcon";
import Office from "./icons/Office";
import Phone from "./icons/Phone";
import ProfileIcon from "./icons/ProfileIcon";
import SearchIcon from "./icons/SearchIcon";
import WishListIcon from "./icons/WishListIcon";

const Icon = ({ name, className }) => {
  const icons = {
    phone: <Phone className={className} />,
    delivery: <DeliveryIcon className={className} />,
    logo: <LogoIcon className={className} />,
    cart: <CartIcon className={className} />,
    profile: <ProfileIcon className={className} />,
    search: <SearchIcon className={className} />,
    wishList: <WishListIcon className={className} />,
    kitchen: <Kitchen className={className} />,
    bedroom: <Bedroom className={className} />,
    livingroom: <Livingroom className={className} />,
    closet: <Closet className={className} />,
    office: <Office className={className} />,
    childrensroom: <Childrensroom className={className} />,
    etc: <Etc className={className} />,
    arrowSlide: <ArrowSlide className={className} />,
  };

  return icons[name];
};

export default Icon;
