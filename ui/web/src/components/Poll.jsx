import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Poll(props) {
    const [typePoll, setTypePoll] = useState();

    const [poll, setPoll] = useState();
    const [votes, setVotes] = useState();
    const [options, setOptions] = useState();

    const { register, handleSubmit } = useForm();

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const fetchData = async () => {
            const pollData = await axios
                .get(`http://localhost:4000/api/v1/polls/${id}`)
                .then((res) => {
                    return res.data.data;
                })
                .catch((err) => console.error(err));

            const { option_id } = pollData;

            const optionsData = await axios
                .get(`http://localhost:4000/api/v1/options/${option_id}`)
                .then((res) => {
                    return res.data.data;
                })
                .catch((err) => console.error(err));

            const { id_votes } = optionsData;

            const votesData = await axios
                .get(`http://localhost:4000/api/v1/votes/${id_votes}`)
                .then((res) => {
                    return res.data.data;
                })
                .catch((err) => console.error(err));

            console.log('pollD', pollData);
            console.log('optionsD', optionsData);
            console.log('votesD', votesData);

            setPoll(pollData);
            setOptions(optionsData);
            setVotes(votesData);
        };
        fetchData();
    }, [axios, id]);

    console.log('poll', poll);
    console.log('options', options);
    console.log('votes', votes);

    const insertVote = async (data, votes) => {
        const { option } = data;
        console.log(votes);
        console.log(option);
        
        setVotes({...votes, [option]: votes[option] += 1}) 

        const insertVote = await axios.put(`http://localhost:4000/api/v1/votes/${votes.id}`, {changes: votes})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const onSubmit = async (data) => {
        insertVote(data, votes) 
    }

    return (
        <div className="container-inner">
            <form onSubmit={handleSubmit(onSubmit)}id="enq" className="box">
                <div>
                    {poll && poll.type_poll == 'yes_no' && (
                        <>
                            <h4 className="head-enq">{poll.title}</h4>
                            <div className="form-group">
                                <input
                                    {...register("option")}
                                    type="radio"
                                    value="votes_yes"
                                />
                                <label>{options.yes_option}</label>
                                <p>votos: {votes.votes_yes}</p>
                            </div>
                            <div className="form-group">
                                <input
                                    {...register("option")}
                                    type="radio"
                                    value="votes_no"
                                />
                                <label>{options.no_option}</label>
                                <p>votos: {votes.votes_no}</p>
                            </div>
                        </>
                    )}
                    {poll && poll.type_poll == 'name_dynamically' && (
                        <>
                            <h4 className="head-eqn">{poll.title}</h4> 
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_dynamic_1"
                                />
                                <label>{options.name_dynamic_1}</label>
                                <p>votos: {votes.votes_dynamic_1}</p>
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_dynamic_2"
                                />
                                <label>{options.name_dynamic_2}</label>
                                <p>votos: {votes.votes_dynamic_2}</p>
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_dynamic_3"
                                />
                                <label>{options.name_dynamic_3}</label>
                                <p>votos: {votes.votes_dynamic_3}</p>
                            </div>
                        </>
                    )}
                    {poll && poll.type_poll == "rating" && (
                        <>
                            <h4 className="head-enq">{poll.title}</h4>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_rating_1"
                                />
                                <label>{options.name_rating_1}</label>
                                <p>votos: {votes.votes_rating_1}</p>
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_rating_2"
                                />
                                <label>{options.name_rating_2}</label>
                                <p>votos: {votes.votes_rating_2}</p>
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_rating_3"
                                />
                                <label>{options.name_rating_3}</label>
                                <p>votos: {votes.votes_rating_3}</p>
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_rating_4"
                                />
                                <label>{options.name_rating_4}</label>
                                <p>votos: {votes.votes_rating_4}</p>
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_rating_5"
                                />
                                <label>{options.name_rating_5}</label>
                                <p>votos: {votes.votes_rating_5}</p>
                            </div>
                        </>
                    )}
                </div>
                <button className="btn-enq">Votar</button>
                <button className="btn-enq">Resultado</button>
            </form>
        </div>
    );
}

export default Poll;
