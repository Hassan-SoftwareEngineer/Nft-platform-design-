import { IconType } from "react-icons";

interface SocialLinkProps {
  Icon: IconType;
  path: string;
}

interface linkProps {
  title: string;
  path: string;
}

interface UsefulLinkProps {
  mainHeading: string;
  links: linkProps [];
}

export type { SocialLinkProps, UsefulLinkProps };
