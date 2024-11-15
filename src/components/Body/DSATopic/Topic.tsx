import "./topic.css"
import { IoIosArrowForward } from "react-icons/io";

const Topic = () => {
  const Data = [" Array", " LinkedList", " Doubly LinkedList", " Stack", " Queue", " Binary Tree"];
  return (
    Data.map( (item, ind) => (
        <div id="Questions-div" key={ind}>
            <h1>{ind+1}. {item}</h1>
            <IoIosArrowForward size={"36px"}/>
        </div>
    ))
  )
}

export default Topic