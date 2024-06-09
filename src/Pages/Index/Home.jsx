
import Post from "../../Components/Post/Post";
import Slide from "../../Components/Slide/Slide";
import { SlideHai } from "../../Components/Slide/SlideHai";


const Home = () => {
    return (
        <div>
            <Slide />
            {/* <SlideHai />     */}
            <div className="container px-[175px] mx-auto">
                <Post />
            </div>
        </div>
    )
}
export default Home;    