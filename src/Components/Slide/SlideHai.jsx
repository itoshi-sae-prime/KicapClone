import Slider from "react-slick";
import { SamplePrevArrow } from "./SamplePrevArrow";
import { useEffect, useState } from "react";
import axios from "axios";
export const SlideHai = () => {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        try {
            const getPicture = async () => {
                await axios({
                    method: 'GET',
                    url: `https://picsum.photos/v2/list?page=1&limit=3`,
                }).then((res) => {
                    console.log(res.data)
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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: <SamplePrevArrow />,
        // nextArrow: <SampleNextArrow />
        
      };
    return(
        <div className="w-full mx-auto h-[600px] mb-[20px]" >
        {/* <Slider className="flex grid-cols-3 " {...settings}>
          <div className="w-full h-[570px]">
            <img className="w-full h-full object-cover" src="" alt="" />
          </div>
          <div className="w-full h-[570px]">
            <img className="w-full h-full object-cover" src="" alt="" />
          </div>
          <div className="w-full h-[570px]">
            <img className="w-full h-full object-cover" src="" alt="" />
          </div>
        </Slider> */}
        
          <Slider className="flex grid-cols-3" {...settings}>
          {
            picture.slice(0,3).map((item) => (
                <div className="w-full h-[620px]">
                    <img className="w-full h-full object-cover" src={item.download_url} alt="" />
                </div>
            ))
          }
          </Slider>
      </div>
    )
}