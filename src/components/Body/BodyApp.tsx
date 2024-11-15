import Topic from "./DSATopic/Topic"
import "./bodyApp.css"

const BodyApp = () => {
  return (
    <>
        <div id="DiceRoller">
            <p>Dice</p>
        </div>

        <div id="Questions">
            <h1>DSA TOPICS</h1>
            <Topic />
        </div>
    </>
  )
}

export default BodyApp