import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const Slide = () => {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        try {
            const getPicture = async () => {
                await axios({
                    method: 'GET',
                    url: `https://picsum.photos/v2/list?page=2&limit=3`,
                }).then((res) => {
                    setPicture(res.data)
                }).catch((err) => {
                    console.log(err)
                });
            };
            getPicture();
        }
        catch (err) {
            console.log(err);
        }
    }, []);
    return (
        <>
            <div className="pt-[7px] relative">
                <Swiper className="w-full h-[750px]" grabCursor={"true"} spaceBetween={0} slidePrevtClass={"auto"}>
                    {picture.map((item) => (
                        <SwiperSlide>
                            <img src={item.download_url} className="object-cover" alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center absolute z-10 bottom-[2px]">
                        <button className="p-[10px] bg-slate-400 rounded-[25px] mr-[2px]">
                            <GrFormPrevious />
                        </button>
                        <button className="p-[10px] bg-slate-400 rounded-[25px] ml-[2px]">
                            <MdNavigateNext />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Slide;