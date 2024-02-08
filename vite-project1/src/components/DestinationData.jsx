import './DestinationStyles.css'

const DestinationData = (props) => {
    return ( 
        <div className={props.className}>
            <div className={props.textClass}>
            <h2>
                {props.heading}
            </h2>
            <p>
            {props.text}
            </p>
            </div>
            <div className="image">
                <img src={props.image1} alt="image" />
                <img src={props.image2} alt="image" />
            </div>
        </div>

     );
}
 
export default DestinationData;