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

    const insertVote = async (data, voteId) => {
        const getVotes = await axios.get(`http://localhost:4000/api/v1/votes/${voteId}`)
            .then(res => { return res.data.data })
            .catch(err => console.log(err))

        const { option } = data;

        const newVote = getVotes[option] += 1;

        // const insertVote = await axios.post(`http://localhost:4000/api/v1/votes/${}`)
    }

    const onSubmit = async (data) => {
        insertVote(data, votes.id) 
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
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_rating_2"
                                />
                                <label>{options.name_rating_2}</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_rating_3"
                                />
                                <label>{options.name_rating_3}</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_rating_4"
                                />
                                <label>{options.name_rating_4}</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    {...register('option')}
                                    type="radio"
                                    value="votes_rating_5"
                                />
                                <label>{options.name_rating_5}</label>
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
