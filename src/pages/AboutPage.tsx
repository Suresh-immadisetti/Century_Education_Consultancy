import { Award, Target, Users, Globe2, CheckCircle, Heart, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Users, value: '10,000+', label: 'Students Placed', color: 'from-blue-500 to-cyan-500' },
  { icon: Globe2, value: '50+', label: 'Countries', color: 'from-purple-500 to-pink-500' },
  { icon: Award, value: '500+', label: 'University Partners', color: 'from-green-500 to-emerald-500' },
  { icon: Target, value: '99%', label: 'Visa Success Rate', color: 'from-orange-500 to-red-500' },
];

const values = [
  {
    icon: Heart,
    title: 'Student First',
    description: 'We prioritize your dreams and goals above everything else.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Honest guidance with transparent processes and no hidden fees.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: TrendingUp,
    title: 'Excellence',
    description: 'Committed to providing the highest quality consultation services.',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Focused on achieving the best outcomes for every student.',
    color: 'from-purple-500 to-pink-500'
  }
];

const team = [
    {
    name: 'Prof. Bailadugu Prasad',
    role: 'Founder & CEO',
    experience: '20+ Years',
    image: 'https://www.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_27507898.htm#fromView=search&page=1&position=1&uuid=b72de1d9-e71f-4263-bfc5-b51e51243eda&query=+professionals'
  },
  {
    name: 'Dr. Ajay Miriyal',
    role: 'Founder & CEO',
    experience: '18+ Years',
    image: 'https://www.freepik.com/free-photo/young-doctor-getting-ready-work_25961233.htm#fromView=search&page=1&position=15&uuid=3a3062d7-ced9-4dad-bbc9-c6ba7cc3be77&query=doctor'
  },
  {
    name: 'Prof. Venkat Katikala',
    role: 'Academic Director',
    experience: '15+ Years',
    image: 'https://www.freepik.com/free-photo/man-working-night_5398817.htm#fromView=search&page=1&position=0&uuid=22ad72bd-e710-44e6-889e-59b3c309ec8f&query=software+engineer'
  },
  {
    name: 'Prof. Immadisetti Suresh',
    role: 'Visa Specialist',
    experience: '12+ Years',
    image: 'https://www.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_18133472.htm#fromView=search&page=1&position=1&uuid=f3d2341b-d9c8-4a13-b884-cd84a7a3382c&query=professinal'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Century Education
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner in overseas education for over 15 years
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Shaping Futures,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Building Dreams
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of excellence in overseas education consulting, we have helped
                thousands of students achieve their dreams of studying abroad. Our team of expert
                counselors provides personalized guidance throughout your educational journey.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in securing admissions for B.Tech, MBBS, Pharmacy, and Management
                programs in top universities worldwide. Our comprehensive services include
                university selection, application processing, visa assistance, and test preparation.
              </p>

              <div className="flex flex-wrap gap-4">
                {['ISO Certified', 'Expert Counselors', 'Free Consultation', '24/7 Support'].map((item) => (
                  <div key={item} className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Expert Counselors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl text-center transform hover:scale-105 transition-all hover:shadow-xl"
                >
                  <div className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Meet Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium bg-blue-600 inline-block px-3 py-1 rounded-full mb-2">
                        {member.experience}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">
                      Dedicated to helping students achieve their international education dreams.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who achieved their dreams with our guidance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all font-semibold text-lg"
            >
              <span>Book Free Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}