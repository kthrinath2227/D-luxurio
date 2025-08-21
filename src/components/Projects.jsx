import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'hospitality', name: 'Hospitality' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Interior',
      category: 'residential',
      location: 'Jubilee Hills, Hyderabad',
      year: '2024',
      image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784020/download_gibnko.jpg',
      description: 'Complete interior transformation of a 5000 sq ft villa with contemporary luxury design'
    },
    {
      id: 2,
      title: 'Corporate Office Design',
      category: 'commercial',
      location: 'HITEC City, Hyderabad',
      year: '2024',
      image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784098/Academy_2_0_axzc3k.jpg',
      description: 'Modern office space design for a leading tech company with focus on productivity'
    },
    {
      id: 3,
      title: 'Boutique Hotel Interiors',
      category: 'hospitality',
      location: 'Banjara Hills, Hyderabad',
      year: '2023',
      image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784160/download_2_q15ack.jpg',
      description: 'Sophisticated hotel interior design blending comfort with contemporary aesthetics'
    },
    {
      id: 4,
      title: 'Modern Apartment',
      category: 'residential',
      location: 'Gachibowli, Hyderabad',
      year: '2023',
      image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784246/40_Minimalist_Apartment_Ideas_for_A_Stress-Free____tzg58d.jpg',
      description: 'Minimalist apartment design maximizing space and natural light'
    },
    {
      id: 5,
      title: 'Restaurant Interior',
      category: 'commercial',
      location: 'Kondapur, Hyderabad',
      year: '2023',
      image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784298/download_3_ffzw3z.jpg',
      description: 'Warm and inviting restaurant space with focus on customer experience'
    },
    {
      id: 6,
      title: 'Penthouse Design',
      category: 'residential',
      location: 'Film Nagar, Hyderabad',
      year: '2024',
      image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784361/Penthouse_Panorama__Elegant_Terrace_Roof_Styles_xjfbar.jpg',
      description: 'Exclusive penthouse design with panoramic city views and premium finishes'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (projectTitle) => {
    toast({
      title: "🚧 Project Details Coming Soon!",
      description: `Detailed case study for "${projectTitle}" will be available soon. Contact us to discuss similar projects!`,
      duration: 4000,
    });
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-gray-900">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of exceptional design projects that showcase 
            our commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleProjectClick(project.title)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover-lift"
              >
                <div className="relative overflow-hidden">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={`${project.title} - ${project.description}`}
                   src={project.image} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;