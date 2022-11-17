import { useState } from "react"

const FeedbackItem = ()  => {

    //Estados: persisten información a traves del ciclo de vida
    // de un único componente

    //Estados iniciales
    const [ rating, setRating ] = useState(2)
    const [text, setText] = useState("Mejorar curso, mejores recursos.")

    const cambiarNota=()=>{
        //Cambiar estado a rating
        //Parámetro para el valor anterior
        setRating((prev)=>{
            return prev + 1
        }) 
    }
    const disminuir=()=>{
        //Cambiar estado a rating
        //Parámetro para el valor anterior
        setRating((prev)=>{
            return prev - 1
        }) 
    }

    return(
        <div className="card">
            <div className="num-display">
                {rating}
            </div>
            <div className="text-display">
                {text}
                <button onClick={ cambiarNota }>
                    Cambiar nota
                </button>
                <button onClick={ disminuir}>
                    disminuir nota
                </button>
            </div>
        </div>
    )
}

export default FeedbackItem