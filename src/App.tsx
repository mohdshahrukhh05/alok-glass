/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GlassWater, 
  Wine, 
  Coffee, 
  Utensils, 
  Sparkles, 
  ShieldCheck, 
  History, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Play
} from 'lucide-react';

const products = [
  {
    title: "Kitchen & Storage Jars",
    description: "Spice, jam, honey, and mason jars—kitchen containers for organized storage with secure, leak-proof lids.",
    icon: <Utensils className="w-6 h-6" />,
    image: "https://i0.wp.com/alokglass.com/wp-content/uploads/2025/07/image.jpg?w=800"
  },
  {
    title: "Liquor & Beverage Bottles",
    description: "Liquor, olive oil, milk, soda, ketchup, water, and chemical-grade containers for diverse liquid packaging.",
    icon: <Wine className="w-6 h-6" />,
    image: "https://picsum.photos/seed/glass-bottle-luxury/800/600"
  },
  {
    title: "Fragrance & Home Decór",
    description: "Round, hexagonal, and apothecary jars with screw-top brass, gold, dome, and bamboo lids.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://picsum.photos/seed/glass-fragrance/800/600"
  },
  {
    title: "Designer Tumblers & Glasses",
    description: "Elegant chai, coffee, cocktail, and juice glasses designed for everyday and luxury settings.",
    icon: <GlassWater className="w-6 h-6" />,
    image: "https://i0.wp.com/i.ytimg.com/vi/NZkqKo8flwo/maxresdefault.jpg?w=800"
  },
  {
    title: "Perfume & Cosmetic Bottles",
    description: "Perfume bottles, fragrance vials, roll-ons, and premium cosmetic packaging with bespoke designs.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://picsum.photos/seed/perfume-glass/800/600"
  },
  {
    title: "Dining & Kitchen Bowls",
    description: "Salad, serving, dessert, and sauce bowls — functional, elegant, and versatile. Perfect for daily use.",
    icon: <Utensils className="w-6 h-6" />,
    image: "https://i0.wp.com/i.ytimg.com/vi/RavrNpjCjxc/maxresdefault.jpg?w=800"
  }
];

const videos = [
  { 
    title: "Glass Jar Collection", 
    thumb: "https://i0.wp.com/alokglass.com/wp-content/uploads/2025/07/image.jpg?w=1200",
    url: "https://www.youtube.com/watch?v=--wlRkpHEEg"
  },
  { 
    title: "Candle Jar Catalogue", 
    thumb: "https://i0.wp.com/i.ytimg.com/vi/nBpkj1tisRQ/maxresdefault.jpg?w=1200",
    url: "https://www.youtube.com/watch?v=nBpkj1tisRQ"
  },
  { 
    title: "Whisky Glass Catalogue", 
    thumb: "https://i0.wp.com/i.ytimg.com/vi/NvoBnX8ItZ0/maxresdefault.jpg?w=1200",
    url: "https://www.youtube.com/watch?v=NvoBnX8ItZ0"
  },
  { 
    title: "Factory Tour", 
    thumb: "https://i0.wp.com/i.ytimg.com/vi/Phrsg9VhyIU/mqdefault.jpg?w=1200",
    url: "https://www.youtube.com/watch?v=Phrsg9VhyIU"
  },
  { 
    title: "Manufacturing Process", 
    thumb: "https://i0.wp.com/i.ytimg.com/vi/WGJnALHHiYg/mqdefault.jpg?w=1200",
    url: "https://www.youtube.com/watch?v=WGJnALHHiYg"
  },
  { 
    title: "Glass Printing", 
    thumb: "https://i0.wp.com/i.ytimg.com/vi/EyaDsj5jKS0/maxresdefault.jpg?w=1200",
    url: "https://www.youtube.com/watch?v=EyaDsj5jKS0"
  }
];

const socialLinks = [
  { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61573026120811" },
  { Icon: Instagram, url: "https://www.instagram.com/official_alokglassworks/?hl=en" },
  { Icon: Linkedin, url: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" },
  { Icon: Youtube, url: "https://www.youtube.com/@AlokGlassWorks/featured" }
];

const stats = [
  { label: "Years of Excellence", value: "40+", icon: <History /> },
  { label: "Products in Range", value: "500+", icon: <Sparkles /> },
  { label: "Global Reach", value: "20+", icon: <Globe /> },
  { label: "Safety Standards", value: "100%", icon: <ShieldCheck /> }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-morphism' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-lg">
              <GlassWater className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-slate-900">ALOK GLASS</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Products', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors">
              Enquiry Now
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-serif font-bold">ALOK GLASS</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {['Home', 'About', 'Products', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-serif font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/glass-factory-industrial/1920/1080?blur=2" 
            alt="Glass Factory" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              Since 1980
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-6 text-slate-900">
              The Art of <br />
              <span className="italic text-slate-500">Glass Perfection</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Established in the 1980s, Alok Glass Works has evolved from a modest manufacturing unit into a global leader, blending traditional craftsmanship with cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium flex items-center gap-2 hover:bg-slate-800 transition-all group">
                Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://alokglass.com/wp-content/uploads/2025/04/Company-Profile.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border border-slate-200 rounded-full font-medium hover:bg-white transition-all flex items-center gap-2"
              >
                Download Brochure
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block w-1/2 h-[80%] glass-morphism rounded-l-[100px] overflow-hidden"
        >
          <img 
            src="https://picsum.photos/seed/glass-art-luxury/1200/1600" 
            alt="Glass Art" 
            className="w-full h-full object-cover opacity-80 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/glass-manufacturing-process/800/1000" 
                  alt="Glass Making" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-morphism rounded-3xl p-8 hidden md:block">
                <h3 className="text-4xl font-serif font-bold mb-2">40+</h3>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Years of Heritage</p>
                <div className="mt-6 h-1 w-12 bg-slate-900" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-900">Know about <br />Alok Glass Works</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Established in the 1980s, Alok Glass Works has evolved from a modest glass manufacturing unit into a recognized leader in the glass industry, known for exceptional craftsmanship and innovation.
                </p>
                <p>
                  At Alok Glass, we prioritize your safety by offering glass products free from harmful heavy metals like lead, arsenic, cadmium, and mercury. We go above and beyond to ensure our glassware is safe for food, beverages, and personal care.
                </p>
                <p>
                  We blend traditional craftsmanship with cutting-edge technology, producing glassware that meets the highest standards of durability, aesthetics, and functionality.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Safety First</h4>
                    <p className="text-sm text-slate-500">Lead & Arsenic Free</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <Sparkles className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Innovation</h4>
                    <p className="text-sm text-slate-500">Modern Technology</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-6">
                  {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-5xl font-serif font-bold mb-2">{stat.value}</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">Our Product Range</h2>
              <p className="text-slate-600">Discover top-quality products, handpicked for you. We manufacture and supply high-quality glass products for architectural, decorative, and industrial use.</p>
            </div>
            <button className="px-6 py-3 border border-slate-200 rounded-full font-medium hover:bg-white transition-all flex items-center gap-2">
              View Catalogue <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 p-3 glass-morphism rounded-xl">
                    {product.icon}
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-xl font-serif font-bold mb-3 text-slate-900">{product.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <button className="text-sm font-bold flex items-center gap-2 group/btn">
                    Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">Our Video Gallery</h2>
            <p className="text-slate-600">Take a virtual tour of our manufacturing process and explore our extensive collections through our curated video gallery.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <motion.a 
                key={idx}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer block"
              >
                <img 
                  src={video.thumb} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-slate-900 fill-slate-900 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-serif text-lg">{video.title}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Get in Touch</h2>
              <p className="text-slate-400 mb-12 max-w-md">Have a custom requirement or need a bulk quote? Our team is here to help you with the best glass solutions.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Call Us</p>
                    <p className="text-lg">+91 906-836-0184 | +91 703-787-7289</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Us</p>
                    <p className="text-lg">sales@alokglass.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Visit Us</p>
                    <p className="text-lg">Agra Road, Firozabad – 283203 (U.P.) India</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                {socialLinks.map(({ Icon, url }, idx) => (
                  <a 
                    key={idx} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-slate-50 p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" placeholder="Mohammad Shahrukh" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone Number</label>
                    <input type="tel" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" placeholder="+91 0000000000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" placeholder="example@mail.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Your Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Associates Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-12">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5'].map((logo, idx) => (
              <div key={idx} className="text-2xl font-serif font-bold text-slate-900">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-lg">
                <GlassWater className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-serif font-bold tracking-tight text-slate-900">ALOK GLASS</span>
            </div>
            
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Service</a>
              <a href="#" className="hover:text-slate-900">Sitemap</a>
            </div>

            <div className="text-sm text-slate-400">
              © 2026 Alok Glass Works. All rights reserved.
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-400 font-medium italic">
              Developed by <span className="text-slate-900 font-bold not-italic">Mohammad Shahrukh</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
