import { Link } from 'react-router-dom';
import { FileText, Scale, AlertCircle, CheckCircle, HelpCircle, BookOpen, ChevronRight, Gavel } from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = "March 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-2xl mb-6">
            <Scale className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
          <p className="text-white/70 mt-4">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Agreement Summary */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-r-2xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700">
                  By accessing or using Century Education Consultancy's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
            {/* 1. Acceptance of Terms */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-600 leading-relaxed pl-14">
                These Terms of Service constitute a legally binding agreement between you ("Client," "You," or "Your") and Century Education Consultancy ("Company," "We," "Us," or "Our") governing your use of our website, services, and products.
              </p>
              <p className="text-gray-600 leading-relaxed pl-14">
                By accessing our website, submitting applications, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>

            {/* 2. Services Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Services Description</h2>
              </div>
              <p className="text-gray-600 leading-relaxed pl-14">
                Century Education Consultancy provides educational consulting services including but not limited to:
              </p>
              <ul className="list-disc pl-20 space-y-2 text-gray-600">
                <li>University selection and application assistance</li>
                <li>Visa counseling and documentation support</li>
                <li>Test preparation guidance (IELTS, TOEFL, GRE, GMAT)</li>
                <li>Scholarship and financial aid information</li>
                <li>Pre-departure orientation</li>
                <li>Career counseling and program selection</li>
              </ul>
              <p className="text-gray-600 leading-relaxed pl-14 mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our services without prior notice.
              </p>
            </div>

            {/* 3. User Obligations */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">User Obligations</h2>
              </div>
              <div className="pl-14 space-y-4">
                <p className="text-gray-600">As a user of our services, you agree to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Provide accurate and complete information',
                    'Maintain the confidentiality of your account',
                    'Notify us of any unauthorized use',
                    'Comply with all applicable laws',
                    'Not engage in fraudulent activities',
                    'Respect intellectual property rights',
                    'Not misuse our services',
                    'Cooperate with our counselors',
                  ].map((obligation, index) => (
                    <div key={index} className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{obligation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Fees and Payments */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">4</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Fees and Payments</h2>
              </div>
              <div className="pl-14 space-y-4">
                <p className="text-gray-600">
                  Our consultation fees are clearly communicated before service initiation. By proceeding with our services, you agree to pay all applicable fees as outlined in your service agreement.
                </p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-3">Payment Terms:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2 text-blue-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                      <span>All fees are non-refundable once services have been initiated</span>
                    </li>
                    <li className="flex items-start space-x-2 text-blue-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                      <span>Payment plans may be available for certain services</span>
                    </li>
                    <li className="flex items-start space-x-2 text-blue-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                      <span>We accept major credit cards, bank transfers, and digital payments</span>
                    </li>
                    <li className="flex items-start space-x-2 text-blue-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                      <span>Additional charges may apply for expedited services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Intellectual Property */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">5</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Intellectual Property</h2>
              </div>
              <p className="text-gray-600 leading-relaxed pl-14">
                All content on our website, including text, graphics, logos, images, software, and course materials, is the property of Century Education Consultancy and is protected by international copyright laws.
              </p>
              <p className="text-gray-600 leading-relaxed pl-14">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any content without our express written consent.
              </p>
            </div>

            {/* 6. Limitation of Liability */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">6</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              <div className="pl-14 space-y-4">
                <p className="text-gray-600">
                  To the maximum extent permitted by law, Century Education Consultancy shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Visa denials or university admission rejections</li>
                  <li>Delays caused by third-party institutions or government agencies</li>
                  <li>Errors in information provided by educational institutions</li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-4">
                  <p className="text-red-700 text-sm">
                    <strong>Note:</strong> We provide guidance based on our expertise but do not guarantee specific outcomes. Admission and visa decisions are ultimately made by educational institutions and government authorities.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Termination */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">7</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Termination</h2>
              </div>
              <p className="text-gray-600 leading-relaxed pl-14">
                We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </div>

            {/* 8. Governing Law */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold">8</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Governing Law</h2>
              </div>
              <p className="text-gray-600 leading-relaxed pl-14">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any legal actions arising out of or related to these Terms shall be brought exclusively in the courts of New York.
              </p>
            </div>

            {/* 9. Changes to Terms */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold">9</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Changes to Terms</h2>
              </div>
              <p className="text-gray-600 leading-relaxed pl-14">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page with an updated effective date. Your continued use of our services after such modifications constitutes your acceptance of the revised terms.
              </p>
            </div>

            {/* 10. Contact Information */}
            <div className="space-y-4 bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3">
                <HelpCircle className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Questions or Concerns?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact our legal department:
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transition-all"
                >
                  <span>Contact Support</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:legal@centuryedu.com"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  <FileText className="h-4 w-4" />
                  <span>legal@centuryedu.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}