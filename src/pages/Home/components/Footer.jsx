import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';



const Footer = ({lang}) => {
  const currentYear = new Date().getFullYear();
const footer = lang.footer
  return (
    <footer className="bg-gray-800 montserrat text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl font-bold">Master Print</h1>
            <p className="text-gray-400 mt-2">
              {footer.logoText}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Xizmatlarimiz</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#90EE90] transition-colors">
                  {footer.service}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#90EE90] transition-colors">
                  {footer.designService}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#90EE90] transition-colors">
                  {footer.deliveryService}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{footer.social}</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#1" className="text-gray-400 hover:text-[#90EE90] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#2" className="text-gray-400 hover:text-[#90EE90] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#3" className="text-gray-400 hover:text-[#90EE90] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#4" className="text-gray-400 hover:text-[#90EE90] transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} {footer.safeText}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
