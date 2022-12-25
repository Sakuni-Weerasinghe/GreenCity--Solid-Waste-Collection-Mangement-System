import { GoogleMap,useLoadScript,} from '@react-google-maps/api'
import "./map.css"

function Map() {

    return(

        <div>
        <GoogleMap zoom={10} mapContainerClassName="map-container"></GoogleMap>
        <h2>Map</h2>
        </div>
        
    )
}


const MapComponent = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyBG5QkkUNkZKW0JF4FGU4XXorWOzgTHHeM",
    });

    if(!isLoaded){
        return(
            <div className="preloader">
            </div>
        )
    } 
    return Map()
}

export default MapComponent
