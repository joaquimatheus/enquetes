import { useForm } from "react-hook-form";

import "../assets/form.css";

function FormPage() {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => console.log(data);

    const optionType = watch("options_type");

    return (
        <>
            <h1 className="head-enq" >Criar enquete!</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                                    {...register("time_end", {
                                        required: true
                                    })}
                                    className="options-sep"
                                    type="datetime-local"
                                />
                            </div>
                            <div className="form-group">
                                <label>Termino</label>
                                <input
                                    {...register("time_end", {
                                        required: true
                                    })}
                                    className="options-sep"
                                    type="datetime-local"
                                />
                            </div>
                        </div>
                        <input className="btn-submit"type="submit" />
                    </>
                )}
            </form>
        </>
    );
}

export default FormPage;
