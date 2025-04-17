import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
});

export default function WhyChooseLubapro({testimonials=[]}) {
    
  
    const getStars = (count) => {
      const full = "⭐".repeat(count);
      const empty = "☆".repeat(5 - count);
      return full + empty;
    };
  
    return (
      <div className="bg-white rounded-xl p-6 sm:p-10 shadow-md flex flex-col items-center ">
        <h2 className={`${bebas.className} text-3xl sm:text-4xl md:text-[80px] font-bold text-center mb-10 text-black`} >
          WHY MANUFACTURERS CHOOSE <span className="text-orange-600">LUBAPRO?</span>
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1100px]">
          {Array(3)
            .fill(testimonials[0])
            .concat(Array(3).fill(testimonials[1]))
            .map((testimonial, index) => (
              <div
                key={index}
                className="h-[220px] rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col justify-between transition-transform hover:scale-[1.01] bg-white"
              >
                <div className="text-yellow-500 mb-2 text-sm">
                  {getStars(testimonial.stars)}
                </div>
                <p className=" text-[#514F6E] mb-4 text-[17px] leading-[28px] tracking-normal">{testimonial.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#2B2B5F]">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  