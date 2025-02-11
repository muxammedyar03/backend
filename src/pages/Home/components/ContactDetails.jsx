import { useScrollAnimation } from "../gsapAnimation/gsap";

const ContactDetails = ({theme,lang}) => {
  const elementsRef = useScrollAnimation();

  return (
    <div className={` montserrat max-h-[800px] w_screen`} >
      <h1 ref={elementsRef} className="title_text montserrat text-center">{lang.contactDetails.titlePage}</h1>
      <div className="w-full h-[600px] flex mt-14 flex-col lg:flex-row items-center justify-between p-6 gap-6">
        <div className="lg:w-1/2 w-full lg:h-full h-[400px] p-6">
          <iframe
            className="w-full h-full rounded-lg border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94174.2187281228!2d59.5214286757371!3d42.471472563932416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a36ea33d7cf%3A0x8454c68babd0b936!2z0J3Rg9C60YPRgSwg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQsNGA0LDQutCw0LvQv9Cw0LrRgdGC0LDQvSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1736620507828!5m2!1sru!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h2 className="text-3xl montserrat text-center lg:hidden font-bold mb-4 text-blue-600">
          {lang.contactDetails.contactTitle}
        </h2>
        <div ref={elementsRef} className="lg:w-1/2 w-full h-full flex flex-col items-start justify-start p-6">
          <h2 className="text-3xl hidden lg:inline-block font-bold mb-4 text-blue-600">
            {lang.contactDetails.contactTitle}
          </h2>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center py-2 border-b">
              <div className={`${theme.text} font-semibold text-[#1c2768]`}>{lang.contactDetails.adress}:</div>
              <div className={theme.secondaryText}>Qoraqalpoqiston, Nukus</div>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div className={`${theme.text} font-semibold text-[#1c2768]`}>{lang.contactDetails.phone}:</div>
              <div className={theme.secondaryText}>+998 90 123-45-67</div>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div className={`${theme.text} font-semibold text-[#1c2768]`}>{lang.contactDetails.telegram}:</div>
              <div>
                <a
                  href="https://t.me/yourtelegram"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @yourtelegram
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div className={`${theme.text} font-semibold text-[#1c2768]`}>{lang.contactDetails.email}:</div>
              <div>
                <a
                  href="mailto:info@example.com"
                  className="text-blue-500 hover:underline"
                >
                  info@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
