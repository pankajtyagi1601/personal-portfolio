import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";

// Define the Contact data type
interface ContactProps {
  address: string;
  phoneNo: string;
  email: string;
}

const Contact: React.FC = () => {
  const { themeColor } = useTheme();
  const contactInfo: ContactProps = CONTACT;

  const contactItems = [
    {
      icon: HiLocationMarker,
      label: "Location",
      value: contactInfo.address,
      href: null,
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: contactInfo.phoneNo,
      href: `tel:${contactInfo.phoneNo}`,
    },
    {
      icon: HiMail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
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
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor})`,
            WebkitBackgroundClip: "text",
          }}
        >
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
            <div
              className="bg-linear-to-br from-neutral-900/50 to-neutral-800/30 border rounded-2xl p-6 transition-all duration-300 h-full"
              style={{ borderColor: `${themeColor}33` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${themeColor}66`;
                e.currentTarget.style.boxShadow = `0 20px 25px -5px ${themeColor}1a, 0 10px 10px -5px ${themeColor}1a`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${themeColor}33`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="mb-4"
                  style={{ color: themeColor }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon size={32} />
                </motion.div>
                <h3 className="text-gray-300 font-semibold mb-2">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-400 transition-colors duration-300 break-all"
                    style={{ color: "inherit" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = themeColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgb(156 163 175)";
                    }}
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
