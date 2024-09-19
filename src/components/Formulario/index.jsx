import { useEffect, useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {

    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);

    useEffect(() => {
        console.log("Peso: " + peso);
        console.log("Kilograma: "+altura); 
    }, [peso, altura])


    const limparDadosDeEntrada = () => {
        setAltura = '';
        setPeso = '';
    }

    const calculaImc = () => {
        const resultado = peso/(altura * altura);
        console.log (`IMC: ${resultado.toFixed(2)}`);
    }

    return(
        <header>
            <div className="container">
                <h1 className={styles.header}>Calculadora IMC</h1>
                <form className={styles.formulario}>
                    <label>Digite sua Altura: </label>
                    <input type="number" placeholder="Digite sua altura (1.50)" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
                    <label>Digite o seu Peso: </label>
                    <input type="number" placeholder="Digite seu peso (70.7)" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
                    <button className={styles.button} type="button" onClick={calculaImc} >Calcular Imc</button>
                    <button type="button" onClick={limparDadosDeEntrada}>Limpar Campos</button>
                </form>
            </div>
        </header>
    )
}

export default Formulario;