import { useEffect, useState } from "react";
import axios from "axios";
const ListPost = () => {
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
            <div className="flex">
                {Producpic.map((item) => (
                    <div className="px-[5px] w-[30%] ">
                        <img className="h-[250px] object-cover" src={item.download_url} alt="" />
                        <div className="mt-[25px] text-center border-b-2">
                            <div className="uppercase text-[18px] font-semibold tracking-widest">{item.author}</div>
                            <div className="">666.666đ</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mx-auto pt-[40px] flex justify-center items-center">
                <button className="w-[300px] h-[50px] uppercase bg-black text-white">Xem tất cả sản phẩm mới</button>
            </div>
        </>
    );
}
export default ListPost;