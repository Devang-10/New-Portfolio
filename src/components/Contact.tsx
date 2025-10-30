import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div className="grid max-w-6xl gap-12 mx-auto md:grid-cols-2">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-800">
                Let's Talk
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 text-white transition-transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-800">Email</h4>
                  <a
                    href="mailto:devangjain1221@gmail.com"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    devangjain1221@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 text-white transition-transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-800">Phone</h4>
                  <a
                    href="tel:+919999999999"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    +91 7828377910
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 text-white transition-transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">
                    Jabalpur, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Devang-10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-gray-700 transition-all duration-300 transform bg-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/devangjain10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-gray-700 transition-all duration-300 transform bg-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-semibold text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-semibold text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center w-full gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
