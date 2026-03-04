import { Link } from 'react-router-dom';
import { Cookie, Settings, AlertCircle, CheckCircle, XCircle, Info, Shield, ChevronRight } from 'lucide-react';

export default function CookiePolicy() {
  const lastUpdated = "March 15, 2024";

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.',
      examples: ['Session cookies', 'Security cookies', 'Load balancing cookies'],
      required: true,
      color: 'blue'
    },
    {
      name: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization. They remember your preferences and choices to improve your experience.',
      examples: ['Language preferences', 'Region selection', 'Saved searches'],
      required: false,
      color: 'green'
    },
    {
      name: 'Analytics Cookies',
      icon: Info,
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page visits', 'Click tracking', 'Time spent on site'],
      required: false,
      color: 'purple'
    },
    {
      name: 'Marketing Cookies',
      icon: AlertCircle,
      description: 'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.',
      examples: ['Ad impressions', 'Campaign tracking', 'Social media sharing'],
      required: false,
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-2xl mb-6">
            <Cookie className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            How we use cookies to improve your browsing experience
          </p>
          <p className="text-white/70 mt-4">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Summary */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Quick Summary</h2>
            <p className="text-gray-600">
              We use cookies to enhance your experience on our website. You can control your cookie preferences at any time. Essential cookies are always enabled as they're necessary for the website to function.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide valuable information to website owners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use on the Century Education Consultancy website.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies for various purposes, including:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {[
                  'To keep you logged in to your account',
                  'To remember your preferences',
                  'To analyze how you use our website',
                  'To personalize your experience',
                  'To improve website performance',
                  'To deliver relevant advertisements',
                ].map((purpose, index) => (
                  <div key={index} className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Types of Cookies We Use</h2>
              
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
                return (
                  <div key={index} className={`border-l-4 border-${cookie.color}-500 bg-${cookie.color}-50/30 p-6 rounded-r-xl`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 bg-${cookie.color}-100 rounded-lg`}>
                          <Icon className={`h-6 w-6 text-${cookie.color}-600`} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{cookie.name}</h3>
                      </div>
                      {cookie.required ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          Required
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                          Optional
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4">{cookie.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Examples include:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example, idx) => (
                          <span key={idx} className={`bg-${cookie.color}-100 text-${cookie.color}-700 px-3 py-1 rounded-full text-sm`}>
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cookie Duration */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Cookie Duration</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies can be categorized based on how long they remain on your device:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Session Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    These temporary cookies are deleted from your device when you close your browser. They help us track your activities during a single browsing session.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Persistent Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    These cookies remain on your device for a set period or until you delete them. They help us remember your preferences for future visits.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. These may include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {[
                  { name: 'Google Analytics', purpose: 'Analytics' },
                  { name: 'Facebook Pixel', purpose: 'Marketing' },
                  { name: 'LinkedIn Insights', purpose: 'Marketing' },
                  { name: 'YouTube', purpose: 'Video Embed' },
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="font-medium text-gray-900">{service.name}</div>
                    <div className="text-xs text-gray-500">{service.purpose}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                These third parties may use cookies for their own purposes. We recommend reviewing their privacy policies for more information.
              </p>
            </div>

            {/* Managing Cookies */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
              </p>
              
              <div className="space-y-6 mt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Browser Settings</h3>
                    <p className="text-gray-600 text-sm">
                      Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete specific cookies. However, please note that disabling cookies may affect your ability to use certain features of our website.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Chrome', 'Firefox', 'Safari', 'Edge'].map((browser) => (
                        <span key={browser} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {browser}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Opt-Out Tools</h3>
                    <p className="text-gray-600 text-sm">
                      You can opt out of certain third-party cookies through industry opt-out tools such as:
                    </p>
                    <div className="mt-3 space-y-2">
                      <a href="#" className="text-blue-600 hover:text-blue-700 text-sm block">• Your Online Choices (EU)</a>
                      <a href="#" className="text-blue-600 hover:text-blue-700 text-sm block">• Network Advertising Initiative (US)</a>
                      <a href="#" className="text-blue-600 hover:text-blue-700 text-sm block">• Digital Advertising Alliance (US)</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Consent */}
            <div className="space-y-4 bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Cookie Consent</h3>
              </div>
              <p className="text-gray-600">
                When you first visit our website, you will see a cookie banner asking for your consent. You can:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Accept all cookies</li>
                <li>Customize your preferences</li>
                <li>Reject non-essential cookies</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            {/* Updates to Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any updates will be posted on this page with an updated revision date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold">Have Questions About Cookies?</h2>
              <p className="text-white/90">
                If you have any questions about our use of cookies, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all"
                >
                  <span>Contact Us</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/privacy-policy"
                  className="inline-flex items-center justify-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all"
                >
                  <Shield className="h-4 w-4" />
                  <span>View Privacy Policy</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}