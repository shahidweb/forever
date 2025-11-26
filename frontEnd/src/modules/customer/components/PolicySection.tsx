import { RefreshCcw, BadgeCheck, Headphones } from "lucide-react";
import type { JSX } from "react";

interface PolicyItem {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const PolicySection: React.FC = () => {
  const policies: PolicyItem[] = [
    {
      id: 1,
      icon: <RefreshCcw className="w-10 h-10 text-black mb-3" />,
      title: "Easy Exchange Policy",
      description: "We offer hassle free exchange policy",
    },
    {
      id: 2,
      icon: <BadgeCheck className="w-10 h-10 text-black mb-3" />,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy",
    },
    {
      id: 3,
      icon: <Headphones className="w-10 h-10 text-black mb-3" />,
      title: "Best customer support",
      description: "We provide 24/7 customer support",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="py-8 border-t border-b border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {policies.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            {item.icon}
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicySection;
