
import { BrowserRouter, Router, Route, Link, NavLink } from "react-router-dom";
import React, { Component } from "react";
import Slider from "react-slick";

const Data1 = [
    {
        id: 1,
        name: "Trang Chủ",
    },
    {
        id: 1,
        name: "Keycap bộ",
    },
    {
        id: 1,
        name: "Mods phím",
    },
    {
        id: 1,
        name: "Chuột",
    },
    {
        id: 1,
        name: "Sản phẩm ",
    },
    {
        id: 1,
        name: "Blog",
    },
    {
        id: 1,
        name: "Về Kicap",
    },

]
const Navbar = () => {
    return (
        <div className="">
            <ul className="flex justify-center items-center tracking-[2px]" style={{
                margin: "20px !important",
                padding: "0px !important",
            }}>
                <li className="px-[22px] py-[15px] mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400"><Link to="/#">Trang Chủ</Link></li>
                <li className="item-navbar py-[15px] px-[22px] mx-[10px] text-[14px] uppercase font-semibold relative hover:text-gray-400">
                    <Link to="/keycap-bo">Keycap bộ</Link>
                    <ul className="navbar absolute w-[220px] left-[-10px] z-20 shadow-lg mt-[10px]">
                        <div className="grid grid-cols-1 gap-2">
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black"><a className="" href="#">Keycap Cherry</a></li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black"><a className="" href="#">Keycap MOA</a></li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black"><a className="" href="#">Keycap xuyên led</a></li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black"><a className="" href="#">Keycap SA</a></li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black"><a className="" href="#">Keycap XDA</a></li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black"><a className="" href="#">Keycap OEM</a></li>
                        </div>
                    </ul>
                </li>
                <li className="px-[22px] py-[15px] mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400"><Link to="/keycap-bo">MODS PHÍM</Link></li>
                <li className="px-[22px] py-[15px]mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400"><Link to="/keycap-bo">PRE-ORDER</Link></li>
                <li className="px-[22px] py-[15px] mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400"><Link to="/keycap-bo">CHUỘT</Link></li>
                <li className="item-navbar py-[15px] px-[22px] mx-[10px] text-[14px] uppercase font-semibold relative  z-[999px]">
                    <Link to="/keycap-bo">SẢN PHẨM</Link>
                    <div className="w-full">
                        <ul className=" navbar w-[1100px] max-h-[600px] absolute left-[-740px] mt-[10px] py-[20px] shadow-lg none z-20">
                            <div className="grid grid-cols-3 gap-x-3 hover:text-gray-800">
                                <div className="px-[20px]">
                                    <div className="font-semibold">KEYCAP BỘ</div>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold hover:text-black "><a href="#">Silent Plateau</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold"><a href="#">Japan Cloud</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold"><a href="#">Keycap Yogurt</a></li>
                                </div>
                                <div className="px-[20px]">
                                    <div className="font-semibold">KEYCAP LẺ</div>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold"><a href="#">PIKACHU ALU</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold hover:text-black"><a href="#">CARD VGA</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold hover:text-black"><a href="#">CỜ ĐẢNG BÚA LIỀM</a></li>
                                </div>
                                <div className="px-[20px]">
                                    <div className="font-semibold">CHUỘT</div>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold"><a href="#">Delux M800 Pro</a></li>
                                    
                                </div>
                                <div className="px-[20px] mt-[40px]">
                                    <div className="font-semibold">BÀN PHÍM CƠ</div>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold"><a href="#">Rainy75</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold hover:text-black"><a href="#">Infi75</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold hover:text-black"><a href="#">Xinmeng A66</a></li>
                                </div>
                                <div className="px-[20px] mt-[40px]">
                                    <div className="font-semibold">SWITCH</div>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold"><a href="#">HMX Ziwei</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold hover:text-black"><a href="#">Outemu silent peach</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold hover:text-black"><a href="#">Hyacinth V2U</a></li>
                                </div>
                                <div className="px-[20px] mt-[40px]">
                                    <div className="font-semibold">PHỤ KIỆN</div>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold"><a href="#">Túi đựng bàn phím</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold hover:text-black"><a href="#">Sản phẩm1</a></li>
                                    <li className="text-[12px] uppercase pt-[10px] font-semibold hover:text-black"><a href="#">Chổi quét phím</a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </li>
                <li to="/blog" className="px-[22px] py-[15px] mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="item-navbar px-[22px] py-[15px] mx-[10px] text-[14px] uppercase font-semibold relative hover:text-gray-400">
                    <a href="#">Về Kicap</a>
                    <ul className="navbar absolute w-[220px] left-[-10px] shadow-lg z-20 mt-[10px]">
                        <div className="grid grid-cols-1 gap-2">
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black">
                                <Link to="/gioi-thieu">Giới thiệu</Link>
                            </li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black">
                                <Link to="/lien-he" href="#">Liên hệ</Link>
                            </li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black">
                                <Link to="/chinh-sach-bao-hanh" href="#">Chính sách bảo hành</Link> 
                            </li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black">
                                <Link to="/chinh-sach-doi-tra" href="#">Chính sách đổi trả</Link>
                            </li>
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;