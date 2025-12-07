import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

// Define the Contact data type
interface ContactProps {
  address: string;
  phoneNo: string;
  email: string;
}

const Contact: React.FC = () => {
  const contactInfo: ContactProps = CONTACT;

  const contactItems = [
    {
      icon: HiLocationMarker,
      label: "Location",
      value: contactInfo.address,
      href: null,
      color: "text-orange-400",
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: contactInfo.phoneNo,
      href: `tel:${contactInfo.phoneNo}`,
      color: "text-orange-400",
    },
    {
      icon: HiMail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "text-orange-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-b border-neutral-900 pb-20"
      id="contact"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl sm:text-5xl text-center font-thin mb-16 pt-16"
      >
        Get in{" "}
        <span className="bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
          Touch
        </span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 h-full">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className={`${item.color} mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={32} />
                </motion.div>
                <h3 className="text-gray-300 font-semibold mb-2">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-orange-300 transition-colors duration-300 break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-400">{item.value}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
