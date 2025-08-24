import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["9160000002", "8096333355"],
      action: "tel:9160000002",
      color: "from-green-400 to-green-600",
      hover: "from-green-400 to-green-600",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["dluxurio.in@gmail.com"],
      action: "mailto:dluxurio.in@gmail.com",
      color: "from-blue-400 to-blue-600",
      hover: "from-blue-400 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "Shivam Building, 3rd Floor",
        "Sriram Nagar, Botanical Garden Road",
        "Kondapur, Hyderabad - 500084",
      ],
      action: null,
      color: "from-pink-400 to-pink-600",
      hover: "from-pink-400 to-pink-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"],
      action: null,
      color: "from-yellow-400 to-yellow-600",
      hover: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-gray-900">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a consultation
            and let's bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group p-6 rounded-2xl shadow-md border border-gray-300 hover:border-gray-500 transition-all duration-500 flex flex-col items-center text-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755932707/download_8_yx8jwa.jpg')",
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon + Title */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg`}
                  >
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {info.title}
                  </h4>
                </div>

                {/* Details */}
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 text-sm">
                      {info.action && detailIndex === 0 ? (
                        <a
                          href={info.action}
                          className="hover:text-yellow-600 transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${info.hover} opacity-0 group-hover:opacity-20 blur-2xl transition duration-500`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
