import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, Mail, Phone, FileText, ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "March 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-2xl mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect and handle your data.
          </p>
          <p className="text-white/70 mt-4">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Eye, label: 'Information We Collect', link: '#information' },
                { icon: Database, label: 'How We Use Data', link: '#usage' },
                { icon: Lock, label: 'Data Security', link: '#security' },
                { icon: Mail, label: 'Contact Us', link: '#contact' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <item.icon className="h-6 w-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-700 text-center">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At Century Education Consultancy, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div id="information" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Personal Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Fill out a consultation form on our website</li>
                  <li>Register for our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us via email, phone, or WhatsApp</li>
                  <li>Apply for educational programs through our platform</li>
                </ul>
                <p className="text-gray-600 mt-2">This information may include:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Educational background and academic records</li>
                  <li>Passport and visa-related information</li>
                  <li>Financial information for scholarship applications</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>IP address and browser type</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div id="usage" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {[
                  'To provide and maintain our services',
                  'To process your applications and inquiries',
                  'To communicate with you about your applications',
                  'To send you updates and promotional materials',
                  'To improve our website and services',
                  'To comply with legal obligations',
                  'To prevent fraud and enhance security',
                  'To analyze usage patterns and trends',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                    <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Security */}
            <div id="security" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-4">
                <h3 className="font-semibold text-blue-800 mb-3">Our Security Measures Include:</h3>
                <ul className="space-y-2">
                  {[
                    'SSL/TLS encryption for data transmission',
                    'Regular security assessments',
                    'Limited access to personal information',
                    'Secure data storage systems',
                    'Regular backups and disaster recovery plans',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 text-blue-700">
                      <Lock className="h-4 w-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Third-Party Disclosure */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Third-Party Disclosure</h2>
              <p className="text-gray-600 leading-relaxed">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Educational institutions you apply to</li>
                <li>Visa processing agencies and embassies</li>
                <li>Payment processors for fee transactions</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do not sell, trade, or rent your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Cookies Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
              <Link to="/cookie-policy" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn more about our Cookie Policy
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Right to access your personal data',
                  'Right to rectify inaccurate data',
                  'Right to erasure (right to be forgotten)',
                  'Right to restrict processing',
                  'Right to data portability',
                  'Right to object to processing',
                  'Right to withdraw consent',
                  'Right to lodge a complaint',
                ].map((right, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{right}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            {/* Contact Information */}
            <div id="contact" className="space-y-4 scroll-mt-24 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">privacy@centuryedu.com</p>
                    <p className="text-gray-600">support@centuryedu.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                    <p className="text-gray-600">+1 (234) 567-8901</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transition-all"
                >
                  <span>Contact Our Privacy Officer</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}