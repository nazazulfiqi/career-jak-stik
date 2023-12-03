import { TBottomNavProps } from "./section";
import { MouseEventHandler, ReactNode } from "react";

type TNavbarItem = {
  name: string;
  link: string;
};

export type TPopUpProps = {
  avatar?: string;
  listStyle?: string;
  userData: {
    full_name: string;
    email: string;
    avatar: string;
  };
  items: Array<{
    name: string;
    icon: ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
  }>;
};

export type TPopUpAllFeaturesProps = {
  listStyle?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  features: Array<{
    name: string;
    link: string;
    icon: ReactNode;
  }>;
};

export type TNavbarProps = {
  navItems?: Array<TNavbarItem>;
  navItemStyle?: string;
  logo: string;
  logoStyle?: string;
  showBottomNav?: boolean;
  button?: ReactNode;
  withSearch?: boolean;
  topNavLinks?: { name: string; href: string }[];
  mobileMenuItems: {
    name: string;
    icon: ReactNode;
    href: string;
  }[];
  // avatar?: string;
  userData?: {
    full_name?: string;
    email?: string;
    avatar?: string;
  };
} & TPopUpProps &
  TBottomNavProps &
  TPopUpAllFeaturesProps;
