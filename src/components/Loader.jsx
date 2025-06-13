import react from "react";

function StartLoader(props){
    return(
        <div className={"loaderContainer "+props.className}>
            <div className="loader"></div> 
        </div>
    )
}
export default StartLoader;