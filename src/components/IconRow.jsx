function IconRow(props) {
    console.log(props)
    return (
        <div className="flex flex-row gap-6 justify-center ssm:justify-start h-5">
            <img src={props.firstImg} className="h-full" alt="appImage"/>
            <img src={props.secondImg} className="h-full" alt="appImage"/>
            <img src={props.thirdImg} className="h-full" alt="appImage"/>
        </div>
    );
}

export default IconRow;