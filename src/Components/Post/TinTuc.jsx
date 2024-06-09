import { useEffect, useState } from "react";
import axios from "axios";
const TinTuc = () => {
    const [Producpic,setProductPic] = useState([]);
    useEffect(() => {
        const getProducPic = async () => {
            try {
                await axios({
                    method: 'GET',
                    url: `https://picsum.photos/v2/list?page=1&limit=4`,
                }).then((res) => {
                    setProductPic(res.data)
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err)
                });
            } catch (error) {
                console.log(error);
            }
        
        };
        getProducPic();
    },[]);
    return (
        <div className="flex justify-start items-start">
            {Producpic.map((item) => (
                <div className="px-[5px] w-[30%] ">
                    <img className="h-[250px]" src={item.download_url} alt="" />
                    <div className="mt-[20px]">
                        <a href="#" className="uppercase text-[13px] font-semibold tracking-[3px]">HƯỚNG DẪN SỬ DỤNG XINMENG X98 PRO</a>
                        <div className="text-[13px]">Xinmeng X98 Pro là một trong những chiếc bàn phím ngon nhất ở phân khúc giá chỉ 1 triệu. Với thiết kế ...</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TinTuc;