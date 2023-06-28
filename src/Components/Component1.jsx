import { Component } from "react"


const Component1 = (props) => {

    return (
     <article className="container_article">
        <h1> Galletas de la fortuna </h1>
        <div className="container">
            <p className="text"> {props.data.phrase} </p>
             
        </div>
  
        <div className="container-author">
            <h2> {props.data.author}</h2>
        </div>
     </article>
    )
}

export default Component1