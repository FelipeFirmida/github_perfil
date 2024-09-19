import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

            if (media >= 7) {
                return (
                    <p>Olá {nome}, você foi aprovado</p>
                )
            } else {
                return (
                    <p>Olá {nome}, você não foi aprovado</p>
                )
            }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nora matéria A" onChange = {evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nora matéria B" onChange = {evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nora matéria C" onChange = {evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;