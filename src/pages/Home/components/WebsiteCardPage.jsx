

const WebsiteCardPage = ({theme,lang}) => {

  return (
    <div className={`w-full ${theme.background} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lang.websiteCardPage.cards.map((card, index) => (
            <div 
              key={index}
              className={`${theme.card} cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105`}
            >
              <div className="relative sm:mb-24 md:mb-0 h-48 bg-olive-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={card.image} alt={card.title} className="w-full mb-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className={` ${theme.text} montserrat  text-xl font-bold  mb-4`}>
                  {card.title}
                </h3>
                <p className={`${theme.secondaryText} montserrat text-sm leading-relaxed`}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteCardPage;