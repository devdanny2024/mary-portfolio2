import Image from 'next/image';
import {
  FaBars, FaHeartPulse, FaPlus, FaBandage, FaUsers,
  FaHouseMedical, FaBedPulse, FaHandHoldingHeart, FaPills,
  FaInstagram, FaWhatsapp, FaLinkedin, FaStar, FaCircleUser, FaFacebook
} from 'react-icons/fa6';
import React from 'react';

// Header Component
const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold main-text">
          <Image src="/logo_ola.png" alt="Olaitan Care Services Logo" width={70} height={10} />
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:main-text transition-colors">Home</a>
          <a href="#services" className="text-gray-600 hover:main-text transition-colors">Services</a>
          <a href="#about" className="text-gray-600 hover:main-text transition-colors">About</a>
          <a href="#testimonials" className="text-gray-600 hover:main-text transition-colors">Testimonials</a>
        </div>
        <a href="mailto:fakehindemaryolaitan@gmail.com" className="hidden md:block btn-primary px-6 py-2 rounded-full font-semibold">Contact Us</a>
        <button className="md:hidden text-2xl main-text">
          <FaBars />
        </button>
      </nav>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="main-bg text-white">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Expert, Personalized Nursing Care to Help You Thrive</h1>
          <p className="text-lg mb-8 text-gray-200">Olaitan Care Services provides expert, personalized nursing care that empowers individuals to thrive, offering flexible solutions in the comfort of their own homes and through global opportunities.</p>
          <a href="mailto:fakehindemaryolaitan@gmail.com" className="bg-white main-text px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block">Book a Consultation</a>
        </div>
        <div className="relative flex justify-center mt-10 md:mt-0">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white/50 shadow-2xl">
            <Image src="/images/Mary.jpg" alt="Fakehinde Mary Olaitan" width={320} height={320} className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-10 -left-2 md:-left-5 bg-white/30 p-3 rounded-lg backdrop-blur-sm animate-pulse">
            <span className="text-white text-2xl"><FaHeartPulse /></span>
          </div>
          <div className="absolute bottom-10 -right-2 md:-right-5 bg-white/30 p-4 rounded-full backdrop-blur-sm animate-pulse">
            <span className="text-white text-3xl"><FaPlus /></span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const servicesData: ServiceCardProps[] = [
  {
    icon: <span className="text-4xl main-text mb-4 mx-auto inline-block"><FaUsers /></span>,
    title: 'Personal Care',
    description: 'Dignified assistance with bathing, grooming, and dressing.',
  },
  {
    icon: <span className="text-4xl main-text mb-4 mx-auto inline-block"><FaHeartPulse /></span>,
    title: 'Vital Sign Monitoring',
    description: 'Regular and accurate monitoring of key health indicators.',
  },
  {
    icon: <span className="text-4xl main-text mb-4 mx-auto inline-block"><FaPills /></span>,
    title: 'Medication Management',
    description: 'Timely medication reminders and management to ensure adherence.',
  },
  {
    icon: <span className="text-4xl main-text mb-4 mx-auto inline-block"><FaBedPulse /></span>,
    title: 'Mobility Assistance',
    description: 'Support with movement and transfers to enhance safety and independence.',
  },
  {
    icon: <span className="text-4xl main-text mb-4 mx-auto inline-block"><FaHandHoldingHeart /></span>,
    title: 'Emotional Support & Companionship',
    description: 'Building genuine connections and providing a friendly, listening ear.',
  },
  {
    icon: <span className="text-4xl main-text mb-4 mx-auto inline-block"><FaBandage /></span>,
    title: 'Basic Life Support (CPR, First Aid)',
    description: 'Certified in BLS to respond effectively in emergency situations.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold section-title">Our Comprehensive Care Services</h2>
          <p className="text-lg section-subtitle mt-2">Serving Lagos, Ogun State, and Abuja with personalized home care.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.title} className="service-card">
              {service.icon}
              <h3 className="text-xl font-bold mb-2 section-title">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// MeetTheNurse Component
const MeetTheNurse = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <p className="main-text font-semibold">MEET YOUR CAREGIVER</p>
        <h2 className="text-4xl font-bold section-title mt-2">Fakehinde Mary Olaitan</h2>
        <p className="text-lg section-subtitle mt-2 max-w-3xl mx-auto">A dedicated and compassionate healthcare assistant with one year of experience providing personalized, one-on-one care that prioritizes your needs, schedule, and comfort.</p>
        <div className="flex justify-center mt-8">
          <Image src="/images/Mary.jpg" alt="Nurse Mary Olaitan" width={160} height={160} className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white" />
        </div>
        <div className="mt-8 max-w-3xl mx-auto text-left bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold section-title mb-4 text-center">My Story: The Power of Connection</h3>
            <p className="text-gray-600">"My journey in caregiving was profoundly shaped by my time with Mr. Yusuf, an elderly bedridden man. Beyond the clinical tasks, I discovered the immense power of companionship. We shared stories, laughter, and moments of quiet understanding. Seeing his spirits lift with each visit taught me that true care isn't just about managing health—it's about nurturing the human spirit. This experience is the heart of Olaitan Care Services; it’s about building genuine connections and making every individual feel valued and heard."</p>
        </div>
      </div>
    </section>
  );
};

// Trust & Credibility Component
const Trust = () => {
    return (
        <section className="secondary-bg py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold section-title mb-8">Your Trusted Partner in Health</h2>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    <div className="text-center">
                        <div className="bg-white p-4 rounded-full inline-block shadow-md">
                           <Image src="/images/babcock.png" alt="Babcock University Logo" width={60} height={60} />
                        </div>
                        <p className="mt-2 font-semibold text-gray-700">Healthcare Assistant Certificate</p>
                        <p className="text-sm text-gray-500">Babcock University</p>
                    </div>
                     <div className="text-center">
                        <div className="bg-white p-4 rounded-full inline-block shadow-md">
                           <Image src="/images/bls.png" alt="BLS Logo" width={60} height={60} />
                        </div>
                        <p className="mt-2 font-semibold text-gray-700">Basic Life Support (BLS)</p>
                         <p className="text-sm text-gray-500">Certified Provider</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// CTA Component
const CTA = () => {
  return (
    <section className="main-bg">
      <div className="container mx-auto px-6 py-16 text-center text-white">
          <h2 className="text-4xl font-bold leading-tight">Ready for Compassionate, Personalized Care?</h2>
          <p className="text-lg mt-4 mb-8 max-w-2xl mx-auto">Let's discuss how Olaitan Care Services can support you or your loved ones. I offer flexible short-term, long-term, and even international travel assignments to meet your unique needs.</p>
          <a href="mailto:fakehindemaryolaitan@gmail.com" className="bg-white main-text px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block">Book a Free Consultation</a>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold section-title">Experience & Testimonials</h2>
          <p className="text-lg section-subtitle mt-2">Putting your needs first, whenever and wherever you need it.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100 text-gray-400">
                <span className="text-5xl"><FaCircleUser /></span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">The Yusuf Family</h4>
                <div className="text-yellow-400 flex items-center"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              </div>
            </div>
            <p className="text-gray-600">"Mary's care for our father, Mr. Yusuf, was more than just professional; it was deeply compassionate. Her visits became the highlight of his day. She didn't just manage his health needs; she brought joy and connection back into his life. We are forever grateful."</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
               <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100 text-gray-400">
                <span className="text-5xl"><FaCircleUser /></span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Anonymous Client</h4>
                <div className="text-yellow-400 flex items-center"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              </div>
            </div>
            <p className="text-gray-600">"The best nursing service I've ever used. They are reliable, compassionate, and truly dedicated to their patients' well-being. Highly recommended for anyone needing personalized home care."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="main-bg text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
           <Image src="/logo_ola.png" alt="Olaitan Care Services Logo" width={200} height={50} />
          <p className="text-gray-300 mt-4">Expert, personalized nursing care that empowers individuals to thrive.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Me</h3>
          <p className="text-gray-300">
            <a href="mailto:fakehindemaryolaitan@gmail.com" className="hover:text-white">fakehindemaryolaitan@gmail.com</a>
          </p>
          <p className="text-gray-300">
             <a href="https://wa.me/2347034979753" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp: +234 703 497 9753</a>
          </p>
           <p className="text-gray-300">Lagos, Ogun State, Abuja</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/share/1Bk1NtMDpm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:opacity-75"><FaFacebook /></a>
            <a href="https://www.instagram.com/olaitan_care_services?igsh=ZGlsaWxjenp2NWg1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:opacity-75"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/fakehinde-mary-57b9591b5/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-12 border-t border-white/20 pt-6">
        <p>&copy; {new Date().getFullYear()} Olaitan Care Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component (Home Page)
export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <MeetTheNurse />
      <Trust />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}