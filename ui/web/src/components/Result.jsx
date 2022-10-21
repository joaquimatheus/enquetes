function Result(props) {
    return (
        <div>
            <h1>props.title</h1>
            {props.type_poll == 'yes_no' && (
                <>
                    <p>votos: {props.votes.votes_yes}</p> 
                    <p>votos: {props.votes.votes_no}</p> 
                </>
            )}
        </div>
    )
}

export default Result;
