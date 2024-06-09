import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="w-full bg-[#f9f9f9] mt-[30px]">
            <div className="grid grid-cols-4 gap-x-5 pt-[40px] pb-[20px] w-[1186px] mx-auto">
                <div className="">
                    <div className="text-[40px] uppercase leading-[22px] text-center my-[30px] tracking-widest font-semibold">KICAP</div>
                    <ul>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">HỘ KINH DOANH KICAP</li>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">Chứng nhận ĐKKD số:<br></br> 01A8035150 do phòng TC-KH UBND quận Ba Đình cấp ngày 07/11/2023</li>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">38, ngõ 575 Kim Mã, Ba Đình, Hà Nội</li>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">0369161095</li>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">kicap.vn@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <div className="text-[12px] uppercase leading-[22px] mb-[15px] font-semibold">CHÍNH SÁCH KHÁCH HÀNG</div>
                    <ul>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">Chính sách bảo mật</li>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">Chính sách đổi trả</li>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">Chính sách vận chuyển</li>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">Chính sách thanh toán</li>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">Chính sách bảo hành</li>
                        <li className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">Chính sách kiểm toán</li>
                    </ul>
                </div>
                <div>
                    <div className="text-[12px] uppercase leading-[22px] mb-[15px] font-semibold">
                        ĐĂNG KÝ NHẬN TIN   
                    </div>
                    <p className="text-[12px] uppercase leading-[22px] font-[500px] mb-[15px]">Mua bàn phím cơ, keycap bộ, keycap lẻ, keycap resin. Bảo hành chính hãng. Ưu đãi khi mua online. Dịch vụ mods phím cơ uy tín, chất lượng.</p>
                    <input className="h-[40px] text-[12px] w-full px-[10px] outline-none bg-slate-300 border-2 mb-[10px]" placeholder="Email của bạn" type="text" />
                    <button className="w-full p-[5px] uppercase bg-black text-white">Đăng Ký</button>
                </div>
                
                <div className="text-[12px] uppercase leading-[22px] mb-[15px] font-semibold">
                    LIÊN KẾT MẠNG XÃ HỘI
                    <div className="flex pt-[15px]">
                        <FaFacebook className="w-[30px] h-[30px] text-blue-700" />
                        <FaYoutube className="w-[30px] h-[30px] mx-[15px] text-red-500" />
                        <FaInstagram className="w-[30px] h-[30px] text-purple-600"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="text-center flex justify-center items-center font-semibold py-[20px] border-t-2 bg-slate-200">
                 Copyright 2021 | Kicap | All Rights Reserved
            </div>
        </>
    )
}
export default Footer;