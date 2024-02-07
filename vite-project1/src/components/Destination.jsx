import './DestinationStyles.css'
import DestinationData from './DestinationData'

const Destination = () => {
    return ( 
        <div className="destination">
            <h1>Popular Destiantion</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
           
        <DestinationData/>

        </div>
     );
}
 
export default Destination;