import { useEffect, useState } from 'react';
import styles from './CalculadoraIMC.module.css';

const CalculadoraIMC = () => {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null)
    const [classificacaoImc, setClassificacaoImc] = useState('');

    const calcularImc = () => {
        const imcCalculado = peso/(altura * altura);
        setImc(imcCalculado);

        let classificacaoImc;
        switch (true) {
            case imcCalculado < 18.5:
              classificacaoImc = 'Abaixo do peso';
              break;
            case imcCalculado >= 18.5 && imcCalculado < 25:
              classificacaoImc = 'Peso normal';
              break;
            case imcCalculado >= 25 && imcCalculado < 30:
              classificacaoImc = 'Sobrepeso';
              break;
            case imcCalculado >= 30:
              classificacaoImc = 'Obesidade';
              break;
            default:
              classificacaoImc = 'Valores inválidos';
          }
          setClassificacaoImc(classificacaoImc);        
    }

    const limparCampos = () => {
        setPeso('');
        setAltura('');
        setImc(null);
        setClassificacaoImc('');
    }

    return(
        <header>
            <div className="container">
                <h1 className={styles.header}>Calculadora IMC</h1>
                <form className={styles.formulario}>
                    <label>Digite sua Altura: </label>
                    <input type="number" value={altura} placeholder="Digite sua altura (1,50)" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
                    <label>Digite o seu Peso: </label>
                    <input type="number" value={peso} placeholder="Digite seu peso (70,7)" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
                    <button className={styles.button} type="button" onClick={calcularImc} >Calcular Imc</button>                    
                    <button type="button" onClick={limparCampos}>Limpar Campos</button>
                    {
                        imc && (
                            <div>
                                <p>Seu IMC é: {imc.toFixed(2)} </p>
                                <p>Classificação: {classificacaoImc} </p>
                            </div>
                        )
                    }
                </form>
            </div>
        </header>
    )
}

export default CalculadoraIMC;