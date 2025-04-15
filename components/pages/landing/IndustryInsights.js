// pages/landing/IndustryInsights.js
import Image from "next/image";
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
  weight: '400',
});

const insights = [
  {
    img: "/assets/1.jpg", // put your own images in /public/images
    title: (
      <>
        THE IMPACT OF CLOUD ERP ON{" "}
        <span className="text-orange-600 font-400">SAUDI ARABIAN</span> BUSINESSES
      </>
    ),
    desc:
      "Cloud ERP is reshaping Saudi businesses with real-time data, lower costs, and scalable solutions—empowering companies to grow in line with Vision 2030 goals.",
  },
  {
    img: "/assets/2.jpg",
    title: (
      <>
        TOP 5 ERP TRENDS DRIVING SAUDI BUSINESS{" "}
        <span className="text-orange-600 font-400">GROWTH</span>
      </>
    ),
    desc:
      "Saudi businesses are embracing smarter ERP tools. From AI to mobile access, these top trends are helping teams work faster, make better decisions, and grow with Vision 2030 in sight.",
  },
  {
    img: "/assets/3.jpg",
    title: (
      <>
        ERP TOOLS <span className="text-orange-600 font-400">SIMPLIFY</span> VAT FOR
        SAUDI BUSINESSES
      </>
    ),
    desc:
      "ERP systems help Saudi businesses manage VAT more efficiently by automating calculations, improving reporting accuracy, and ensuring compliance with ZATCA regulations.",
  },
];

export default function IndustryInsights() {
  return (
    <section className="py-12 px-4 bg-white" >
      <div className=" mx-auto">
        <div  data-aos="fade-up" data-aos-duration="500">
            <h2 className={`${bebas.className} text-[96px] leading-none text-black `} >
              <span className="text-orange-600 py-0">INDUSTRY</span> INSIGHTS
            </h2>
            <p className="text-gray-600 text-[20px] mb-5 ">
              Explore our recent posts on ERP trends.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden ">
              <div  data-aos="flip-left" data-aos-duration="500" data-aos-delay="500" className="relative h-[499px] ">
                <Image
                  src={item.img}
                  alt="Insight"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-md object-cover"
                />
              </div>
              <div  data-aos="fade-up" data-aos-duration="500" className="p-4">
                <h3 className={`${bebas.className} text-[46px] leading-none text-black`} >{item.title}</h3>
                <p className="text-sm text-gray-600 leading-[1.7] mt-5 text-[20px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
