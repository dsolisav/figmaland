
// Component for social media icons row 
function IconRow(props) {
    
    return (
        // Main container for icon row. Href is set to the website of the UNAL Faculty of Engineering as placeholder.
        <div className="flex flex-row gap-6 justify-center ssm:justify-start h-5">
            <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank">
                <img src={props.firstImg} className="h-full" alt="appImage"/>
            </a>
            <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank">
                <img src={props.secondImg} className="h-full" alt="appImage"/>
            </a>
            <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank">
                <img src={props.thirdImg} className="h-full" alt="appImage"/>
            </a>
            
        </div>
    );
}

export default IconRow;