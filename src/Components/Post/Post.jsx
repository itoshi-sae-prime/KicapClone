import { useEffect, useState } from "react";
import axios from "axios";
import ListPost from "./ListPost/ListPost";
import TinTuc from "./TinTuc";
const Post = () => {
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
    <>
        <div className="text-center text-[30px] tracking-[7px] py-[40px]">SẢN PHẨM <strong>MỚI</strong></div>
        <ListPost />
        <div className="text-center text-[30px] tracking-[7px] py-[40px] uppercase">Bàn phím cơ <strong>Custom</strong></div>
        <ListPost /> 
        <div className="text-center text-[30px] tracking-[7px] py-[40px] uppercase">Bàn phím cơ <strong>KEYCAP SA OSIRIS</strong></div>
        <div className="flex justify-center items-center gap-x-5">
            <div className="px-[5px] w-[35%]">
                <img src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-hinh-anh-qua-dua-tet-png-trong-suot.png" alt="" />
            </div>
            {Producpic.slice(0,1).map((item) => (
                <div className="px-[5px] w-[30%] ">
                    <img className="h-[250px]" src={item.download_url} alt="" />
                    <div className="mt-[25px] text-center border-b-2">
                        <div className="uppercase text-[20px] font-semibold tracking-wider">{item.author}</div>
                        <div className="">666.666đ</div>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center text-[30px] tracking-[7px] py-[40px] uppercase">Bàn phím cơ <strong>Custom</strong></div>
        <ListPost />
        <div className="text-center text-[30px] tracking-[7px] py-[40px] uppercase">Tin tức<strong> KICAP</strong></div>
        <TinTuc />
    </>
  );
}
export default Post;