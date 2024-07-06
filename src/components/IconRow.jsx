function IconRow(props) {
    console.log(props)
    return (
        <div className="flex flex-row gap-6 justify-center ssm:justify-start h-6">
            <img src={props.firstImg} className="h-full"/>
            <img src={props.secondImg} className="h-full"/>
            <img src={props.thirdImg} className="h-full"/>
        </div>
    );
}

export default IconRow;