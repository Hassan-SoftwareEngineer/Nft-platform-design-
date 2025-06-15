import { StaticImageData } from "next/image";

export interface HeroCardProps {
    image : StaticImageData;
    alt : string;
    bgColor : string;
}