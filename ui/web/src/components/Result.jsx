import axios from 'axios';
import { useState, useEffect } from 'react';

function Result({ votes, title, type_poll }) {
    const [allVotes, setAllVotes] = useState()

    let { votes_yes, votes_no, all_votes } = votes;

    useEffect(() => {
        async function countVotes(id, ...votes) {
            let sum = 0;
            const arr = votes;

            arr.map(el => {
                sum += el

                console.log(sum)
            })

            await axios.put(`http://localhost:4000/api/v1/votes/${id}`, {
                changes: { all_votes: sum }
            })
                .then(res => console.log(res))
                .catch(err => console.error(err))

            setAllVotes(sum)
        }

        if(type_poll = 'yes_no') {
            countVotes(votes.id, votes_yes, votes_no)
        }

    }, [allVotes])

    return (
        <div>
            <h4 className="head-enq">{title}</h4>
            {type_poll == 'yes_no' && (
                <>
                    <div>
                        <p>Sim: {votes_yes}</p> 
                        <p>Nao: {votes_no}</p> 
                    </div>
                    
                    <div>
                        <p>Total de votos: {allVotes}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Result;
