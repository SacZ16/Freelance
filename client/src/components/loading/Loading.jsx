import "./Loading.css";
import loader from "../../assets/LoadingWine.gif"

export function Loading(){
    return (

        <div className="loadingContainer">
            <img src={loader} width={400} height={400} alt="not found" ></img>
        </div>
    )
}