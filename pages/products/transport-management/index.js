import React from "react";

import Products1 from "../../../components/pages/landing/Products1";
import WhyChooseLubapro from "../../../components/pages/landing/WhyChooseLubapro";
import Cards from "../../../components/pages/landing/Cards";
import ManufacturingSuite from "../../../components/pages/landing/ManufacturingSuite";
import CardCarousel from "../../../components/pages/landing/imageCard";

const card = {
    titleBefore: "SIMPLIFY YOUR",
    highlight: "TRANSPORT ",
    titleAfter: "OPERATIONS",
    para: [
      "Seamless service with Lubapro—unifying trips, drivers, and fleet.",
    ],
    image: "/assets/containers.jpg",
  };
    
const cardData = [
  {
    title: "Unified Transport Operations",
    description:
      "Manage contracts, trips, and drivers from one centralized ERP platform.",
  },
  {
    title: "Driver Tools & Violation Handling",
    description:
      "Enable mobile trip updates and automate traffic fine assignments.",
  },
  {
    title: "Smart Billing & Invoicing",
    description:
      "Auto-generate invoices based on contracts, trips, and services delivered.",
  },
  {
    title: "Compliance & VAT Integration",
    description:
      "Stay ZATCA-compliant with built-in tax tools and audit reports.",
  },
  {
    title: "Fleet Maintenance & Monitoring",
    description:
      "Track vehicle health, fuel usage, and workshop activity seamlessly.",
  },
  {
    title: "Live Fleet Visibility",
    description:
        "Monitor fleet location, trip status, and deliveries in real time."
  },
];

const cardDatas = [
    {
      image: "/assets/cargo ship.jpg", // You can update the image path as needed
      titleBefore: "Unmatched",
      highlight: "Flexibility",
      titleAfter: "for Your Unique Workflow",
      para: [
        "Lubapro Smart Transport Suite is built to adapt to your unique operational processes with configurable modules designed for your specific needs.",
        "Tailor every aspect—from trip planning to compliance reporting—ensuring the system scales effortlessly whether you're a local operator or a major logistics provider.",
        "With dynamic adjustments and personalized settings, Lubapro evolves alongside your business, streamlining operations and empowering future growth.",
      ],
    },
    {
      image: "/assets/containers on port.jpg",
      titleBefore: "Future-Proof,",
      highlight: "Customizable",
      titleAfter: "Solutions",
      para: [
        "Our platform is engineered for scalability, growing seamlessly alongside your business.",
        "Deep customization lets you configure dashboards, automate processes, and fine-tune reporting to fit your evolving needs.",
        "Stay ahead in a dynamic market with an ERP solution that adapts to ever-changing operational and regulatory demands.",
      ],
    },
    {
      image: "/assets/containers on port 2.jpg",
      titleBefore: "Precision",
      highlight: "Tailoring",
      titleAfter: "for Optimal Efficiency",
      para: [
        "Lubapro empowers you to fine-tune your ERP with robust configuration settings that put you in control. Customize every module to align perfectly with your unique business model.",
        "Streamline routine tasks and integrate effortlessly across all transport operations. This ensures that every element of your ERP works harmoniously, reducing friction and boosting productivity.",
        "Experience a tailor-made solution that maximizes performance.",
      ],
    },
  ];
  
const features = [
  "Trip and Fleet Planning",
  "HR & Payroll Management",
  "Contract & Billing Management",
  "ZATCA-Compliant VAT Reporting",
  "Maintenance & Expense Oversight",
  "Analytics and Dashboards",
];
const ManufacturingSuiteImg = "/assets/cargo ship sideview.jpg"

const testimonials = [
  {
    name: "Anjali Verma",
    title: "Marketing Executive",
    stars: 3,
    text: "Good effort, but there's room for improvement in performance speed.",
    img: "/assets/anjali.jpg",
  },
  {
    name: "Deepak Raj",
    title: "Operations Manager",
    stars: 4,
    text: "A strong product with minor glitches, but support is responsive.",
    img: "/assets/deepak.jpg",
  },
  {
    name: "Ritika Sharma",
    title: "UI/UX Designer",
    stars: 5,
    text: "Absolutely love the interface! Smooth, clean, and user-friendly.",
    img: "/assets/anjali.jpg",
  },
  {
    name: "Karan Mehta",
    title: "Software Engineer",
    stars: 2,
    text: "It works, but had too many bugs on my first run. Needs polishing.",
    img: "/assets/deepak.jpg",
  },
  {
    name: "Priya Nair",
    title: "Product Manager",
    stars: 4,
    text: "Great value for the price. Would recommend with a few caveats.",
    img: "/assets/anjali.jpg",
  },
  {
    name: "Arjun Kapoor",
    title: "Business Analyst",
    stars: 5,
    text: "Exceeded expectations. Quick, intuitive, and well-supported.",
    img: "/assets/deepak.jpg",
  },
];

const IndexPage = () => {
  return (
    <div>
      <Products1 item={card} />
      <Cards items={cardData} />
      <CardCarousel cardItems={cardDatas} />
      <ManufacturingSuite features={features}
                          title = "Lubapro"
                          highlight = "Smart"
                          subtitle = "Transport Suite "
                          img={ManufacturingSuiteImg}
                          />
      <WhyChooseLubapro
                        headingBefore="Why"
                        highlight="Lubapro"
                        headingAfter="for Transport?"
                        testimonials={testimonials}
                        />

    </div>
  );
};

export default IndexPage;
