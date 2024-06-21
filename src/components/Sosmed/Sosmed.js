import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export const icons = [
  { component: FaFacebookF, key: 'facebook' },
  { component: FaInstagram, key: 'instagram' },
  { component: FaTwitter, key: 'twitter' },
  { component: FaLinkedin, key: 'linkedin' },
  { component: FaTiktok, key: 'tiktok' },
  { component: FaYoutube, key: 'youtube' },
];

export const IconWrapper = ({ Icon }) => (
  <div className="bg-black w-20 h-20 rounded-md flex justify-center items-center hover:scale-105 transition-all cursor-pointer">
    <Icon size={50} color="white" />
  </div>
);