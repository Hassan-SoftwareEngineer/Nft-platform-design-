import { ShowcaseCardProps } from "@/components/custom/ShowcaseCard/types";
import { ShowcaseProps } from "./types";
import { BiSolidWallet } from "react-icons/bi";
import { LuShapes } from "react-icons/lu";
import { BrowseByCardProps } from "@/components/custom/BrowseByCard/types";
const showcaseGallery : ShowcaseProps [] = [
    {
        image : "https://img.freepik.com/free-photo/colorful-male-lion-studio_23-2150813135.jpg?ga=GA1.1.64973450.1737396896&w=740",
        title : "Colorful male lion"
    },
    {
        image : "https://img.freepik.com/free-photo/ferocious-tiger-studio_23-2150875505.jpg?ga=GA1.1.64973450.1737396896&w=740",
        title : "Ferocious tiger"
    },
    {
        image : "https://img.freepik.com/free-photo/cyberpunk-illustration-with-neon-colors-futuristic-technology_23-2151672054.jpg?ga=GA1.1.64973450.1737396896&w=740",
        title : "illustration-with-neon-colors"
    },
    {
        image : "https://img.freepik.com/premium-photo/panther-animal-portrait-colorful-wildlife-painting_1266954-2232.jpg?ga=GA1.1.64973450.1737396896&w=740",
        title : "man-with-futuristic-glasses"
    },
    {
        image : "https://img.freepik.com/free-photo/cyberpunk-illustration-with-neon-colors-futuristic-technology_23-2151672059.jpg?ga=GA1.1.64973450.1737396896&w=740",
        title : "neon-colors-futuristic-technology"
    },
    {
        image : "https://img.freepik.com/free-photo/fantasy-eye-illustration_23-2151675249.jpg?ga=GA1.1.64973450.1737396896&w=740",
        title : "fantasy-eye-illustration"
    },
];
 const showCaseCards : ShowcaseCardProps [] = [
    {
        Icon : BiSolidWallet,
        title : "Set up your wallet",
        content : "Use Trust Wallet, Metamask or any wallet to connect to the app.You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos."
    },
    {
        Icon : LuShapes,
        title : "Create your collection",
        content : "Upload your NFTs and set a title, description and price.You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos."
    },
 ];

 export const browseByCategories : BrowseByCardProps [] = [
    {
        image : "https://img.freepik.com/free-photo/fantasy-scene-with-surreal-elements-mystical-atmosphere_23-2151254526.jpg?ga=GA1.1.64973450.1737396896&semt=ais_hybrid&w=740",
        title : "Art",
        path : "#"
    },
    {
        image : "https://img.freepik.com/premium-photo/cyberpunk-portrait-with-glowing-eyes_1371000-1252.jpg?ga=GA1.1.64973450.1737396896&semt=ais_hybrid&w=740",
        title : "Music",
        path : "#"
    },
    {
        image : "https://img.freepik.com/premium-photo/psychedelic-man-futuristic-abstract-portrait-colors_494741-132738.jpg?ga=GA1.1.64973450.1737396896&semt=ais_hybrid&w=740",
        title : "Utility",
        path : "#"
    }
 ] 

 export { showcaseGallery, showCaseCards };