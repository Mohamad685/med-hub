import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./InfoCarousal.css";
import { Pagination, Autoplay } from "swiper/modules";

export default function Carousel() {
	const [reverse, setReverse] = useState(false);

	const handleSwiperEnd = (swiper) => {
		if (swiper.isEnd) {
			setReverse(!reverse); // Toggle the direction
		}
	};
	return (
		<>
			<Swiper
				pagination={{ dynamicBullets: true }}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					reverseDirection: reverse,
				}}
				onReachEnd={handleSwiperEnd}
				modules={[Pagination, Autoplay]}
				className="mySwiper">
                    
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</>
	);
}
