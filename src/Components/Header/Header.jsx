import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className='flex justify-evenly items-center pt-[20px] pb-[5px] mx-[30px] text-[14px]'>
                <div className='font-bold tracking-[2px] '>
                    <span>HOTLINE TƯ VẤN:</span>
                    <a className='font-bold' href="#123"> 0369161095</a>
                </div>
                <div className='text-[45px] font-bold tracking-[20px] pl-[50px]'>KICAP</div>
                <div className='flex justify-around items-center gap-x-3'>
                    <button className="hover:text-gray-400">
                        <button className='font-bold px-[15px] tracking-[2px]'><Link to="/login">TÀI KHOẢN</Link></button>
                    </button>
                    <div className='flex pl-[20px] pr-[10px] hover:text-gray-400'>
                        <button>
                            <div className='font-bold tracking-[2px] hover:text-gray-500}'>GIỎ HÀNG</div>
                        </button>
                        <button>
                            <i class="fa fa-shopping-cart pt-[0px] mx-[5px]" style={{
                                fontSize: "18px",
                            }} aria-hidden="true"> 0</i>
                        </button>  
                    </div>
                    <button className="hover:text-gray-400">
                        <i class="fa fa-search font-bold" style={{
                                fontSize: "18px",
                            }} aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header;