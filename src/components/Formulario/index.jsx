import styles from './Formulario.module.css';

const Formulario = () => {
    return(
        <header>
            <div className="container">
                <h1 className={styles.header}>Calculadora IMC</h1>
                <form className={styles.formulario}>
                    <label>Digite sua Altura: </label>
                    <input type="number" placeholder="Digite sua altura (1.50)" />
                    <label>Digite o seu Peso: </label>
                    <input type="number" placeholder="Digite seu peso (70.7)" />
                    <button className={styles.button} type="button">Calcular Imc</button>
                    <button type="button">Limpar Campos</button>
                </form>
            </div>
        </header>
    )
}

export default Formulario;