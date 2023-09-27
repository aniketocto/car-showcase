import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";
import { it } from "node:test";

const Footer = () => {
  return (
    <footer className="f;ex flex-col text-black-100 mt-5 border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br /> All rights reserved &copy;
          </p>
        </div>
      </div>

      <div className="footer_links">
        {footerLinks.map((link) => (
          <div key={link.title} className="footer_link">
            <h3>{link.title}</h3>
            {link.links.map((item) => (
              <Link key={item.title} href={item.url} className="text-gray-500">
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between items-center mt-10 border-t border-gray-100   sm:px-16 px-6 py-10">
        <p>@2023 Carhub. All rights reserved.</p>
        <div className="footer_copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
