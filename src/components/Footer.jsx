import React from "react";
import Section from "./Section";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const socials = [
    {
      id: "0",
      title: "WhatsApp",
      iconUrl: <FaWhatsapp size={16} />,
      url: "#",
    },
    {
      id: "1",
      title: "Instagram",
      iconUrl: <FaInstagram size={16} />,
      url: "#",
    },
    {
      id: "2",
      title: "Facebook",
      iconUrl: <FaFacebook size={16} />,
      url: "#",
    },
  ];

  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              {item.iconUrl}
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
