const countries = [
  {
    name: 'United States',
    flag: '🇺🇸',
    universities: '500+',
    image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: ['MIT', 'Stanford', 'Harvard', 'Yale'],
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    universities: '300+',
    image: 'https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: ['Oxford', 'Cambridge', 'Imperial', 'UCL'],
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    universities: '200+',
    image: 'https://images.pexels.com/photos/2613037/pexels-photo-2613037.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: ['Toronto', 'UBC', 'McGill', 'Waterloo'],
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    universities: '150+',
    image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: ['Melbourne', 'Sydney', 'ANU', 'UNSW'],
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    universities: '250+',
    image: 'https://images.pexels.com/photos/1768586/pexels-photo-1768586.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: ['TUM', 'LMU', 'Heidelberg', 'Berlin'],
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    universities: '100+',
    image: 'https://images.pexels.com/photos/2422464/pexels-photo-2422464.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: ['Trinity', 'UCD', 'NUI', 'DCU'],
  },
];

export default function Countries() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Study Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore world-class universities across popular study destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <h3 className="text-2xl font-bold">{country.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="text-blue-600 font-semibold text-lg">
                    {country.universities} Universities
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Universities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {country.popular.map((uni, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Explore Programs
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
