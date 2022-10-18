import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Poll(props) {
    const [typePoll, setTypePoll] = useState();

    const [poll, setPoll] = useState();
    const [votes, setVotes] = useState();
    const [options, setOptions] = useState();

    const { register, onChange } = useForm();

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

    console.log(poll);
    console.log(options);
    console.log(votes);

    return (
        <div className="container-inner">
            <form id="enq" className="box">
                {poll && (
                    <>
                        <h4 className="head-enq">{poll.title}</h4>
                        <div className="form-group">
                            <input
                                {...register("option")}
                                type="radio"
                                value="yes_vote"
                            />
                            <label>{options.yes_option}</label>
                            <div className="form-group"></div>
                            <input
                                {...register("option")}
                                type="radio"
                                value="no_vote"
                            />
                            <label>{options.no_option}</label>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default Poll;
