import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Result from './Result';

function Poll(props) {
    const [typePoll, setTypePoll] = useState();

    const [poll, setPoll] = useState();
    const [votes, setVotes] = useState();
    const [options, setOptions] = useState();
    const [result, showResult] = useState(false);

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

            setPoll(pollData);
            setOptions(optionsData);
            setVotes(votesData);
        };
        fetchData();
    }, [axios, id]);

    const insertVote = async (data, votes) => {
        const { option } = data;

        setVotes({ ...votes, [option]: (votes[option] += 1) });

        const insertVote = await axios
            .put(`http://localhost:4000/api/v1/votes/${votes.id}`, {
                changes: votes,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const onSubmit = async (data) => {
        insertVote(data, votes);
        showResult(!result)
    };

    const handleClick = (ev) => {
        console.log(result);
        showResult(!result);
    };

    return (
        <div className="container-inner">
            <form onSubmit={handleSubmit(onSubmit)} id="enq" className="box">
                <div>
                    {result == true && (
                        <Result 
                            title={poll.title} 
                            type_poll={poll.type_poll} 
                            votes={votes}
                        /> 
                    )}
                    {poll && result == false && poll.type_poll == "yes_no" && (
                        <>
                            <h4 className="head-enq">{poll.title}</h4>
                            <div className="form-group">
                                <input
                                    {...register("option")}
                                    type="radio"
                                    value="votes_yes"
                                />
                                <label>{options.yes_option}</label>
                            </div>
                            <div className="form-group">
                                <input
                                    {...register("option")}
                                    type="radio"
                                    value="votes_no"
                                />
                                <label>{options.no_option}</label>
                            </div>
                        </>
                    )}
                    {poll &&
                        result == false &&
                        poll.type_poll == "name_dynamically" && (
                            <>
                                <h4 className="head-eqn">{poll.title}</h4>
                                <div className="form-group">
                                    <input
                                        {...register("option")}
                                        type="radio"
                                        value="votes_dynamic_1"
                                    />
                                    <label>{options.name_dynamic_1}</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        {...register("option")}
                                        type="radio"
                                        value="votes_dynamic_2"
                                    />
                                    <label>{options.name_dynamic_2}</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        {...register("option")}
                                        type="radio"
                                        value="votes_dynamic_3"
                                    />
                                    <label>{options.name_dynamic_3}</label>
                                </div>
                            </>
                        )}
                    {poll && result == false && poll.type_poll == "rating" && (
                        <>
                            <h4 className="head-enq">{poll.title}</h4>
                            <div className="form-group">
                                <input
                                    {...register("option")}
                                    type="radio"
                                    value="votes_rating_1"
                                />
                                <label>{options.name_rating_1}</label>
                            </div>
                            <div className="form-group">
                                <input
                                    {...register("option")}
                                    type="radio"
                                    value="votes_rating_2"
                                />
                                <label>{options.name_rating_2}</label>
                            </div>
                            <div className="form-group">
                                <input
                                    {...register("option")}
                                    type="radio"
                                    value="votes_rating_3"
                                />
                                <label>{options.name_rating_3}</label>
                            </div>
                            <div className="form-group">
                                <input
                                    {...register("option")}
                                    type="radio"
                                    value="votes_rating_4"
                                />
                                <label>{options.name_rating_4}</label>
                            </div>
                            <div className="form-group">
                                <input
                                    {...register("option")}
                                    type="radio"
                                    value="votes_rating_5"
                                />
                                <label>{options.name_rating_5}</label>
                            </div>
                        </>
                    )}
                </div>
                {result == false && (
                    <>
                        <button onClick={handleSubmit} className="btn-enq">Votar</button>
                        <button onClick={handleClick} className="btn-enq">
                            Resultado
                        </button>
                    </>
                )}
                {result == true && (
                    <>
                        <button onClick={handleClick} className="btn-enq">
                            Voltar
                        </button>
                    </>
                )}
            </form>
        </div>
    );
}

export default Poll;
