import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

import "../assets/form.css";

function FormPage() {
    const { register, handleSubmit, watch } = useForm();
    const navigate = useNavigate();

    const navigateToPoll = (id) => {
        navigate(`/poll/${id}`);
    };

    async function createPolls(data) {
        const votesId = await axios
            .post("http://localhost:4000/api/v1/votes")
            .then((res) => {
                const { id } = res.data.data;
                return id;
            })
            .catch((err) => console.error(err));

        console.log("votesid_", votesId);

        data.id_votes = votesId;

        const optionsId = await axios
            .post("http://localhost:4000/api/v1/options", {
                id_votes: data.id_votes,
                name_dynamic_1: data.name_dynamic_1 || "",
                name_dynamic_2: data.name_dynamic_2 || "",
                name_dynamic_3: data.name_dynamic_3 || "",
                name_rating_1: data.name_rating_1 || "",
                name_rating_2: data.name_rating_2 || "",
                name_rating_3: data.name_rating_3 || "",
                name_rating_4: data.name_rating_4 || "",
                name_rating_5: data.name_rating_5 || "",
                yes_option: data.yes_option || "",
                no_option: data.no_option || "",
            })
            .then((res) => {
                const { id } = res.data.data;
                return id;
            })
            .catch((err) => console.error(err));

        data.option_id = optionsId;
        data.status = "not-init";

        console.log(data);

        const poll = await axios
            .post("http://localhost:4000/api/v1/polls", {
                option_id: data.option_id,
                title: data.title,
                time_start: data.time_start,
                time_end: data.time_end,
                status: "not-init",
            })
            .then((res) => {
                const { id } = res.data.data;
                return id;
            })
            .catch((err) => console.error(err));

        data.poll_id = poll;

        return data;
    }

    const onSubmit = async (data) => {
        console.log(data);
        const poll = await createPolls(data);
        const { poll_id } = poll;

        navigateToPoll(poll_id);
    };

    const optionType = watch("options_type");

    return (
        <>
            <h1 className="head-enq">Criar enquete!</h1>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="box">
                    <div className="form-group">
                        <label>Pergunta</label>
                        <input
                            type="text"
                            {...register("title", {
                                required: true,
                                maxLength: 150,
                            })}
                            placeholder="Escreva aqui a sua pergunta"
                        />
                    </div>
                </div>
                <div id="options" className="box">
                    <h4>Tipos de Alternativas</h4>
                    <div className="form-group">
                        <input
                            type="radio"
                            {...register("options_type")}
                            value="yes_no"
                        />
                        <label>Sim/Nao</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="radio"
                            {...register("options_type")}
                            value="name_dynamically"
                        />
                        <label>Texto</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="radio"
                            {...register("options_type")}
                            value="rating"
                        />
                        <label>Avaliação</label>
                    </div>
                </div>
                {optionType == "yes_no" && (
                    <div id="yes-no" className="box">
                        <h4>Alternativas</h4>
                        <div className="form-group">
                            <label>Opcao Afirmativa</label>
                            <input
                                type="text"
                                {...register("yes_option", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                className="options-sep"
                                placeholder="Escolha sua Alternativa Afirmativa"
                            />
                        </div>
                        <div className="form-group">
                            <label>Opcao Negativa</label>
                            <input
                                type="text"
                                {...register("no_option", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                placeholder="Escolha sua Alternativa Negativa"
                            />
                        </div>
                    </div>
                )}
                {optionType == "name_dynamically" && (
                    <div id="dynamically" className="box">
                        <h4>Alternativas</h4>
                        <div className="form-group">
                            <label>Opcao 1</label>
                            <input
                                type="text"
                                {...register("name_dynamic_1", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                className="options-sep"
                                placeholder="Escolha sua Alternativa"
                            />
                        </div>
                        <div className="form-group">
                            <label>Opcao 2</label>
                            <input
                                type="text"
                                {...register("name_dynamic_2", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                className="options-sep"
                                placeholder="Escolha sua Alternativa"
                            />
                        </div>
                        <div className="form-group">
                            <label>Opcao 3</label>
                            <input
                                type="text"
                                {...register("name_dynamic_3", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                placeholder="Escolha sua Alternativa"
                            />
                        </div>
                    </div>
                )}
                {optionType == "rating" && (
                    <div id="rating" className="box">
                        <h4>Alternativas</h4>
                        <div className="form-group">
                            <label>Avaliativa 1</label>
                            <input
                                type="text"
                                {...register("name_rating_1", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                className="options-sep"
                                placeholder="Escolha sua Alternativa"
                            />
                        </div>
                        <div className="form-group">
                            <label>Avaliativa 2</label>
                            <input
                                type="text"
                                {...register("name_rating_2", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                className="options-sep"
                                placeholder="Escolha sua Alternativa"
                            />
                        </div>
                        <div className="form-group">
                            <label>Avaliativa 3</label>
                            <input
                                type="text"
                                {...register("name_rating_3", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                className="options-sep"
                                placeholder="Escolha sua Alternativa"
                            />
                        </div>
                        <div className="form-group">
                            <label>Avaliativa 4</label>
                            <input
                                type="text"
                                {...register("name_rating_4", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                className="options-sep"
                                placeholder="Escolha sua Alternativa"
                            />
                        </div>
                        <div className="form-group">
                            <label>Avaliativa 5</label>
                            <input
                                type="text"
                                {...register("name_rating_5", {
                                    required: true,
                                    maxLength: 150,
                                })}
                                className="options-sep"
                                placeholder="Escolha sua Alternativa"
                            />
                        </div>
                    </div>
                )}
                {optionType && (
                    <>
                        <div className="box">
                            <div className="form-group">
                                <label>Inicio</label>
                                <input
                                    {...register("time_start", {
                                        required: true,
                                    })}
                                    className="options-sep"
                                    type="datetime-local"
                                />
                            </div>
                            <div className="form-group">
                                <label>Termino</label>
                                <input
                                    {...register("time_end", {
                                        required: true,
                                    })}
                                    className="options-sep"
                                    type="datetime-local"
                                />
                            </div>
                        </div>
                        <input className="btn-submit" type="submit" />
                    </>
                )}
            </form>
        </>
    );
}

export default FormPage;
