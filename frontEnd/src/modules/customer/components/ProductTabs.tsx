import React, { useEffect, useState } from "react";

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Description" | "Reviews">(
    "Description"
  );
  const [activeData, setActiveData] = useState<string[]>([]);

  const tabsData = [
    {
      id: 1,
      value: "Description",
      count: 0,
      data: [
        `An e-commerce website is an online platform that facilitates the
        buying and selling of products or services over the internet. It
        serves as a virtual marketplace where businesses and individuals
        can showcase their products, interact with customers, and conduct
        transactions without the need for a physical presence.`,
        `E-commerce websites typically display products or services along
        with detailed descriptions, images, prices, and any available
        variations (e.g., sizes, colors). Each product usually has its own
        dedicated page with relevant information.`,
      ],
    },
    {
      id: 2,
      value: "Reviews",
      count: 122,
      data: [
        `"★★★★☆ Based on 122 customer reviews"`,
        `“Great quality and fast delivery! The fabric feels premium. Definitely worth buying.”`,
        `“Loved the color and fit. Would recommend this to others.”`,
      ],
    },
  ];

  useEffect(() => {
    const data = tabsData.find((item) => item.value === activeTab);
    setActiveData(data?.data ? data.data : []);
  }, [activeTab]);

  return (
    <div className="mt-10 border border-gray-200 rounded-md">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200">
        {tabsData &&
          tabsData.map((item: any) => (
            <button
              key={item.id}
              className={`px-6 py-3 text-sm font-semibold transition-all cursor-pointer ${
                activeTab === item.value
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab(item.value)}
            >
              {item.value} {item.count > 0 && <span>({item.count})</span>}
            </button>
          ))}
      </div>

      {/* Tabs Content */}
      <div className="p-6 text-gray-600 text-sm leading-relaxed">
        {activeData && activeData.map((item) => <p className="mb-2" key={item}>{item}</p>)}
      </div>
    </div>
  );
};

export default ProductTabs;
