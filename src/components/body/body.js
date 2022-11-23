import Card from "../card/card";
import './body.css'

function Body({ characters }) {

    console.log(characters)

    return (
        <div className="body">
            {characters.map((element, index) => (
                <Card pokemon = {element}></Card>
            ))
            }
        </div>
    )
}

export default Body;