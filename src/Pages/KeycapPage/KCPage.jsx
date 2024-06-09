import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import ReactPaginate from 'react-paginate';
import axios from "axios";
export const KCPage = (props) => {
    // const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState({})
    const [picture, setPicture] = useState([]);
    const items = [1, 2, 3, 4, 5];
    const [totalUser, setTotaluser] = useState(0);
    const [listUser, setListUser] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [count, setCount] = useState(1);
    // const [blog, setBlog] = useState([]);
    // useEffect(() => {
    //     getBlog();
    // }, []);
    // const getBlog = async (page) => {
    //     await axios({
    //         method: 'GET',
    //         url: `https://picsum.photos/v2/list?page=${page}&limit=6`,
    //     }).then((res) => {
    //         console.log(res)
    //         setBlog(res.data)
    //         setTotaluser(6)
    //         setListUser(res.data)
    //         setPageNumber(8)
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    // };
    useEffect(() => {
        getPicture();
    }, []);
    const getPicture = async (page) => {
        await axios({
            method: 'GET',
            url: `https://picsum.photos/v2/list?page=${page}&limit=12`
        }).then((res) => {
            setPicture(res.data);
            setTotaluser(12)
            setListUser(res.data)
            setPageNumber(5)
        }).catch((err) => {
            console.log(err)
        });
    };

    const handlePageClick = (event) => {
        console.log("event.selected", event)
        getPicture(event.selected + 1);
    };

    const handleMuaHang = () => {
        alert(`Mua hàng thành công`);
        setCount(count + 1);
        console.log(count);
    };
    const handleToggle = (key) => {
        setOpens(prev => {
            return {
                ...prev,
                [key]: !prev[key]
            }
        })
    }

    return (
        <div>
            <div className="w-full h-[350px] grid place-items-center mb-[20px] pt-[7px]">
                <img className="w-full h-[350px] object-cover" src="https://bizweb.dktcdn.net/100/436/596/collections/n40pqa2hhof61.jpg?v=1631205634610" alt="" />
                <div className="w-[1140px] absolute text-white">
                    <h1 className="text-[26px] font-medium leading-[28px] tracking-widest mb-[10px]">KEYCAP BỘ</h1>
                    <p className="">
                        Những bộ keycaps độc đáo nhất giúp chiếc bàn phím của bạn trở lên khác biệt và đầy cảm hứng.</p>
                </div>
            </div>
            <div>
                <div className="w-[1140px] mx-auto flex gap-x-[10px]">
                    <div className="w-[25%] h-auto  rounded-[10px] p-[10px]">
                        <h1 className="text-[20px] tracking-[2px] font-medium leading-[30px] uppercase mb-[15px] mt-[5px]">Danh Mục</h1>
                        <ul className="border-b-2 pb-[25px]">
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Trang chủ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <div className="flex justify-between items-center">
                                    <a href="http://localhost:3000/">Keycap bộ</a>
                                    <div>
                                        <span className="cursor-pointer" onClick={() => handleToggle("keycap")}>{!opens?.keycap ? <IoMdAdd /> : <TfiLayoutLineSolid />}</span>
                                    </div>
                                </div>
                            </li>
                            {opens?.keycap && <div className="ml-[10px]">
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap Cherry</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap MOA</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap xuyên led</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap SA</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap XDA</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap OEM</a></li>
                            </div>}
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Mods Phím</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Pre-order</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Chuột</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px] relative">
                                <div className="flex justify-between items-center">
                                    <a href="http://localhost:3000/">Sản phẩm</a>
                                    <div>
                                        <span className="cursor-pointer" onClick={() => handleToggle("product")}>{!opens?.product ? <IoMdAdd /> : <TfiLayoutLineSolid />}</span>
                                    </div>
                                </div>
                                {
                                    opens?.product && <div className="ml-[10px]">
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap Cherry</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap MOA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap xuyên led</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap SA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap XDA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap OEM</a></li>
                                    </div>
                                }
                            </li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Blog</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <div className="flex justify-between items-center">
                                    <a href="http://localhost:3000/">Về Kicap</a>
                                    <div>
                                        <span className="cursor-pointer" onClick={() => handleToggle("aboutkicap")}>{!opens?.aboutkicap ? <IoMdAdd /> : <TfiLayoutLineSolid />}</span>
                                    </div>
                                </div>
                                {
                                    opens?.aboutkicap && <div className="ml-[10px]">
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap Cherry</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap MOA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap xuyên led</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap SA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap XDA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="#">Keycap OEM</a></li>
                                    </div>
                                }
                            </li>
                        </ul>
                        <h1 className="text-[20px] tracking-[2px] font-medium leading-[30px] uppercase mb-[5px] mt-[10px] pt-[25px]">Tìm theo</h1>
                        <h1 className="text-[18px] tracking-[2px] font-normal leading-[30px]">Trạng thái tồn kho</h1>
                        <ul className="pt-[10px]">
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Wu Liqi Keycap</a>
                            </li>
                        </ul>
                        <h1 className="text-[18px] tracking-[2px] font-normal leading-[30px] mt-[15px] mb-[15px]">Tags</h1>
                        <ul>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Doubleshot</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Doubleshot</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Doubleshot</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Doubleshot</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Doubleshot</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Doubleshot</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Doubleshot</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Doubleshot</a></li>
                        </ul>
                        <h1 className="text-[18px] tracking-[2px] font-normal leading-[30px] mt-[15px] mb-[15px]">Thương hiệu</h1>
                        <ul>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Wu Liqi Keycap</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Wu Liqi Keycap</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Wu Liqi Keycap</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Wu Liqi Keycap</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Wu Liqi Keycap</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Wu Liqi Keycap</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Wu Liqi Keycap</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Wu Liqi Keycap</a></li>
                        </ul>
                        <h1 className="text-[18px] tracking-[2px] font-normal leading-[30px] mt-[15px] mb-[15px]">Giá sản phẩm</h1>
                        <ul>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Giá dưới 100.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Giá dưới 100.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Giá dưới 100.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Giá dưới 100.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Giá dưới 100.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Giá dưới 100.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Giá dưới 100.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="#">Giá dưới 100.000đ</a></li>
                        </ul>
                    </div>
                    <div className="w-[75%] h-auto  rounded-[10px] p-[10px] mt-[5px]">
                        <div className="flex justify-start items-center">
                            <div className="pr-[20px]">Xếp theo: </div>
                            <div className="flex pr-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Tên A-Z</div>
                            </div>
                            <div className="flex px-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Tên Z-A</div>
                            </div>
                            <div className="flex px-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Hàng mới</div>
                            </div>
                            <div className="flex px-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Giá thấp tới cao</div>
                            </div>
                            <div className="flex px-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Giá cao xuống thấp</div>
                            </div>
                        </div>
                        <div className="w-full h-full mt-[20px]">
                            <div className="grid grid-cols-3 gap-x-[30px] gap-y-[10px] ">
                                {
                                    picture.map((item) => (
                                        <div className="mb-[30px] p-[5px] border-2">
                                            <a href="http://localhost:3000/keycap-bo/keycap-pbt">
                                                <img className="w-full h-[260px] object-cover" src={item.download_url} alt="" />
                                            </a>
                                            <div className="pt-[10px] text-center">
                                                <h1 className="text-[13px] font-semibold leading-[25px] tracking-widest">{item.author}</h1>
                                                <p className="text-[14px] tracking-[2px] font-normal leading-[25px] text-center">999.999d</p>
                                                <button className="w-full p-[10px] border border-1 bg-stone-300" onClick={handleMuaHang}>Mua hàng</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex justify-center items-center mt-[10px]">
                                <ReactPaginate
                                    nextLabel="next >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={2}
                                    pageCount={pageNumber}
                                    previousLabel="< previous"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    breakLabel="..."
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link"
                                    containerClassName="pagination"
                                    activeClassName="active"
                                    style={{ color: "black", cursor: "pointer" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}