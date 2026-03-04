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
    image: 'https://plus.unsplash.com/premium_photo-1682094917716-03b5d476060a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Dr. Ajay Miriyal',
    role: 'Medical Advisor',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Prof. Venkat Katikala',
    role: 'Academic Director',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Prof. Immadisetti Suresh',
    role: 'Visa Specialist',
    experience: '12+ Years',
    image: 'https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=JepBOGOGiPwRF2z0pwiADeUZhsk6eFt4eKliWjzDGHo='
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

      {/* Main Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Shaping Futures{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Building Dreams
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of excellence in overseas education consulting, we have helped
                thousands of students achieve their dreams of studying abroad.
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
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl text-center shadow hover:shadow-xl transition">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-xl mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Meet Our Leadership Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                        {member.experience}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">
                      Dedicated to helping students achieve their international education dreams.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
            >
              Book Free Consultation
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}