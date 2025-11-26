import React from "react";
import HeadingBanner from "../../../components/ui/HeadingBanner";

const About: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-16">
      {/* Section Title */}
      <HeadingBanner title="About" subtitle="US" />

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
            alt="About Us"
            className="w-full h-[400px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-5 text-gray-700">
          <p>
            <span className="font-semibold text-gray-800">Forever</span> was
            born out of a passion for innovation and a desire to revolutionize
            the way people shop online. Our journey began with a simple idea: to
            provide a platform where customers can easily discover, explore, and
            purchase a wide range of products from the comfort of their homes.
          </p>

          <p>
            Since our inception, we’ve worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We’re dedicated to providing a
              seamless shopping experience that exceeds expectations—from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
