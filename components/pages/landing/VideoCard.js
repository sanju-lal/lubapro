import React from "react";

export default function VideoCard() {
  return (
    <div className="w-full rounded-[20px] overflow-hidden my-2 md:my-5">
      <video
        controls
        className="w-full h-[622px] object-cover rounded-[27px]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        <source src="assets/vdo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
