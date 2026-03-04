import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Stethoscope, Cpu, Pill, Briefcase, Plane, BookOpen, 
  ChevronRight, CheckCircle, Award, Users, Globe, Clock,
  GraduationCap, Building, FileText, MessageCircle
} from 'lucide-react';

const serviceDetails = {
  btech: {
    id: 'btech',
    icon: Cpu,
    title: 'B.Tech Programs',
    description: 'Pursue engineering degrees from top universities across USA, UK, Canada, and Australia.',
    longDescription: 'We offer comprehensive guidance for B.Tech admissions in prestigious engineering institutions worldwide. Our expert counselors help you choose the right specialization and university based on your academic profile and career goals.',
    features: [
      'Computer Science Engineering',
      'Mechanical Engineering',
      'Electrical Engineering',
      'Civil Engineering',
      'Electronics & Communication',
      'Biotechnology Engineering'
    ],
    universities: ['MIT', 'Stanford', 'Caltech', 'IIT', 'NUS', 'Toronto'],
    requirements: [
      '10+2 with Physics, Chemistry, Mathematics',
      'Minimum 60% aggregate',
      'IELTS/TOEFL scores',
      'SAT/ACT scores (optional)',
      'Letters of Recommendation',
      'Statement of Purpose'
    ],
    color: 'from-blue-500 to-cyan-500',
    duration: '4 Years',
    intake: 'Fall, Spring, Summer',
    careerPaths: ['Software Engineer', 'Data Scientist', 'Civil Engineer', 'Mechanical Engineer', 'Research Scientist']
  },
  mbbs: {
    id: 'mbbs',
    icon: Stethoscope,
    title: 'MBBS Programs',
    description: 'Direct admission to medical colleges in countries with WHO-approved medical programs.',
    longDescription: 'Secure your dream of becoming a doctor with our guided MBBS admissions process. We partner with top medical universities offering world-class education at affordable costs.',
    features: [
      'General Medicine',
      'Surgery',
      'Pediatrics',
      'Gynecology',
      'Cardiology',
      'Neurology'
    ],
    universities: ['Harvard Medical', 'Oxford Medical', 'Toronto Medical', 'Karolinska', 'Melbourne Medical'],
    requirements: [
      '10+2 with Physics, Chemistry, Biology',
      'Minimum 70% in PCB',
      'NEET qualification',
      'IELTS/TOEFL scores',
      'Medical fitness certificate',
      'Interview performance'
    ],
    color: 'from-red-500 to-pink-500',
    duration: '5-6 Years',
    intake: 'Fall intake only',
    careerPaths: ['General Physician', 'Surgeon', 'Pediatrician', 'Cardiologist', 'Medical Researcher']
  },
  pharmacy: {
    id: 'pharmacy',
    icon: Pill,
    title: 'Pharmacy Programs',
    description: 'Study PharmD and M.Pharm programs at internationally recognized pharmaceutical institutions.',
    longDescription: 'Join the growing pharmaceutical industry with degrees from top pharmacy schools. We guide you through admissions for B.Pharm, M.Pharm, and PharmD programs globally.',
    features: [
      'PharmD Programs',
      'M.Pharm',
      'Clinical Pharmacy',
      'Pharmaceutical Chemistry',
      'Pharmacology',
      'Pharmacy Practice'
    ],
    universities: ['Monash Pharmacy', 'Nottingham Pharmacy', 'Michigan Pharmacy', 'Sydney Pharmacy', 'Purdue'],
    requirements: [
      '10+2 with Physics, Chemistry, Biology/Mathematics',
      'Minimum 60% aggregate',
      'IELTS/TOEFL scores',
      'PCAT (for some universities)',
      'Interview'
    ],
    color: 'from-green-500 to-emerald-500',
    duration: '4-6 Years',
    intake: 'Fall, Spring',
    careerPaths: ['Clinical Pharmacist', 'Research Scientist', 'Pharmaceutical Manager', 'Regulatory Affairs', 'Drug Inspector']
  },
  management: {
    id: 'management',
    icon: Briefcase,
    title: 'Management Programs',
    description: 'Secure direct admission to MBA and management programs in prestigious business schools.',
    longDescription: 'Transform your career with an MBA or specialized management degree from top business schools. We help you secure admissions to programs that match your professional goals.',
    features: [
      'MBA Programs',
      'Executive MBA',
      'Specialized Masters',
      'Business Analytics',
      'Finance',
      'Marketing'
    ],
    universities: ['Harvard Business', 'Stanford GSB', 'Wharton', 'INSEAD', 'London Business School', 'Rotman'],
    requirements: [
      'Bachelor\'s degree',
      'Minimum 2 years work experience (MBA)',
      'GMAT/GRE scores',
      'IELTS/TOEFL scores',
      'Essays and LORs',
      'Interview'
    ],
    color: 'from-purple-500 to-indigo-500',
    duration: '1-2 Years',
    intake: 'Fall, Spring, Winter',
    careerPaths: ['Management Consultant', 'Investment Banker', 'Product Manager', 'Marketing Director', 'Entrepreneur']
  }
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<keyof typeof serviceDetails>('btech');
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (serviceDetails[id as keyof typeof serviceDetails]) {
        setSelectedService(id as keyof typeof serviceDetails);
        
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location]);

  const handleServiceClick = (serviceId: keyof typeof serviceDetails) => {
    setSelectedService(serviceId);
    
    // Update URL hash without page reload
    window.history.pushState(null, '', `#${serviceId}`);
    
    // Smooth scroll to service details
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const service = serviceDetails[selectedService];
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive support for your international education journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {Object.entries(serviceDetails).map(([key, service]) => {
              const ServiceIcon = service.icon;
              return (
                <button
                  key={key}
                  onClick={() => handleServiceClick(key as keyof typeof serviceDetails)}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-left ${
                    selectedService === key ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                  }`}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <ServiceIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Details with ID */}
          <div id={service.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden scroll-mt-24">
            <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur">
                  <Icon className="h-12 w-12" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
                  <p className="text-white/90 text-lg">{service.longDescription}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600">{service.duration}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <GraduationCap className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Intake</div>
                  <div className="text-gray-600">{service.intake}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <Building className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Universities</div>
                  <div className="text-gray-600">100+ Partners</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <Award className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Success Rate</div>
                  <div className="text-gray-600">98%</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Features</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className={`h-6 w-6 text-${service.color.split('-')[1]}-500 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h3>
                  <ul className="space-y-4">
                    {service.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FileText className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Top Universities */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Partner Universities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {service.universities.map((uni, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-lg transition-all">
                      <div className="font-semibold text-gray-900">{uni}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h3>
                <div className="flex flex-wrap gap-3">
                  {service.careerPaths.map((career, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all font-semibold text-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Get Free Consultation for {service.title}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}