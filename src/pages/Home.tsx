import { ArrowRight, CheckCircle2, Globe, GraduationCap, Award, Users, BookOpen, Star, TrendingUp, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    { icon: Award, text: '15+ Years Experience', color: 'from-blue-500 to-blue-600' },
    { icon: Shield, text: '99% Visa Success', color: 'from-green-500 to-green-600' },
    { icon: Users, text: '10,000+ Students', color: 'from-purple-500 to-purple-600' },
    { icon: Globe, text: '50+ Countries', color: 'from-pink-500 to-pink-600' },
  ];

  const services = [
    { 
      name: 'B.Tech Programs', 
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      description: 'Top engineering universities worldwide',
      courses: ['Computer Science', 'Mechanical', 'Electrical']
    },
    { 
      name: 'MBBS Abroad', 
      icon: GraduationCap,
      color: 'from-red-500 to-pink-500',
      description: 'WHO approved medical programs',
      courses: ['General Medicine', 'Surgery', 'Pediatrics']
    },
    { 
      name: 'Pharmacy', 
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      description: 'International pharmacy degrees',
      courses: ['PharmD', 'M.Pharm', 'Clinical Research']
    },
    { 
      name: 'Management', 
      icon: TrendingUp,
      color: 'from-purple-500 to-indigo-500',
      description: 'Top business schools globally',
      courses: ['MBA', 'Executive MBA', 'Specialized Masters']
    },
  ];

  const stats = [
    { value: '500+', label: 'University Partners', icon: Star },
    { value: '50+', label: 'Countries', icon: Globe },
    { value: '99%', label: 'Success Rate', icon: TrendingUp },
    { value: '24/7', label: 'Student Support', icon: Clock },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
                <Globe className="h-5 w-5" />
                <span className="font-medium">Your Gateway to Global Education</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Study Abroad with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Confidence
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Expert guidance for B.Tech, MBBS, Pharmacy, and Management programs.
                We help you secure admissions in top universities worldwide with personalized support.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm p-3 rounded-xl">
                      <div className={`bg-gradient-to-r ${feature.color} p-2 rounded-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="font-semibold text-lg">Get Free Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all border-2 border-blue-600 font-semibold text-lg hover:shadow-xl"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>

            {/* Right Content - Image with Stats */}
            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/7944080/pexels-photo-7944080.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students studying abroad"
                  className="rounded-2xl shadow-2xl"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 animate-float">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Award className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">99%</div>
                      <div className="text-sm text-gray-600">Visa Success Rate</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 animate-float animation-delay-2000">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">10k+</div>
                      <div className="text-sm text-gray-600">Happy Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Preview Grid */}
          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Programs
              </h2>
              <p className="text-xl text-gray-600">Choose from our most sought-after courses</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    to="/services"
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.courses.map((course, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform group-hover:rotate-3">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}