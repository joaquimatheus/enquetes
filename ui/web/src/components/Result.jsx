function Result(props) {
    return (
        <div>
            <h4 className="head-enq">{props.title}</h4>
            {props.type_poll == 'yes_no' && (
                <>
                    <p>Sim: {props.votes.votes_yes}</p> 
                    <p>Nao: {props.votes.votes_no}</p> 
                </>
            )}
        </div>
    )
}

export default Result;
