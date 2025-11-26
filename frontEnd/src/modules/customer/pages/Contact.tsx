import React from "react";
import HeadingBanner from "../../../components/ui/HeadingBanner";

const Contact: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <HeadingBanner title="CONTACT" subtitle="US" />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
            alt="Contact"
            className="w-full h-[400px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Store Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Our Store
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              54709 Williams Station <br />
              Suite 350, Washington, USA
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Tel: (415) 555-0132 <br />
              Email: admin@forever.com
            </p>
          </div>

          {/* Careers Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Careers at Forever
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-gray-800 text-gray-800 px-5 py-2 text-sm rounded hover:bg-gray-800 hover:text-white transition-all">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
