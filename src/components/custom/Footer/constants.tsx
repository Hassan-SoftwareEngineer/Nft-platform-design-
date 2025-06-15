import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { SocialLinkProps, UsefulLinkProps } from "./types";
import { FaLinkedinIn } from "react-icons/fa6";

 const socialLinks : SocialLinkProps [] = [
    {
       Icon : FaFacebookF,
      path : "#"  
    },
    {
       Icon : FaInstagram,
      path : "#"  
    },
    {
       Icon : FaTwitter,
      path : "#"  
    },
    {
       Icon : FaLinkedinIn,
      path : "#"  
    },
]

const usefulLinks : UsefulLinkProps [] = [
  {
    mainHeading : "Marketplace",
    links : [
      {title : "All NFTs", path : "#"},
      {title : "New", path : "#"},
      {title : "Arts", path : "#"},
    ]
  },
  {
    mainHeading : "Status",
    links : [
      {title : "Rankings", path : "#"},
      {title : "Activity", path : "#"},
    ]
  },
  {
    mainHeading : "Resources",
    links : [
      {title : "Help Center", path : "#"},
      {title : "Suggestions", path : "#"},
      {title : "Newsletter", path : "#"},
    ]
  },
  {
    mainHeading : "Company",
    links : [
      {title : "About", path : "#"},
      {title : "Careers", path : "#"},
    ]
  }
];

export {socialLinks, usefulLinks};