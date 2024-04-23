import {useState} from 'react';

export default function FormDiInserimento({popolaAlunni}){
    const [codiceFiscale, setCodiceFiscale] = useState("");
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [eta, setEta] = useState("");

    async function salvaAlunno(){
        await fetch('http://localhost:8080/alunni', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                CodiceFiscale: codiceFiscale,
                Nome: nome, 
                Cognome: cognome,
                Eta: eta
            })
        });
        popolaAlunni();
    }

    function cambioCodiceFiscale(event){
        setCodiceFiscale(event.target.value);
    }
    function cambioNome(event){
        setNome(event.target.value);
    }
    function cambioCognome(event){
        setCognome(event.target.value);
    }
    function cambioEta(event){
        setEta(event.target.value);
    }

    return (
        <div>
            <h1> Form di Inserimento </h1>
            <div> 
                <label>Codice Fiscale: </label>
                <input type='text' onChange={cambioCodiceFiscale} /> 
            </div>
            <div> 
                <label>Nome: </label>
                <input type='text' onChange={cambioNome} /> 
            </div>
            <div> 
                <label>Cognome: </label>
                <input type='text' onChange={cambioCognome} /> 
            </div>
            <div> 
                <label>Età: </label>
                <input type='number' onChange={cambioEta} /> 
            </div>
            <div>
                <button onClick={salvaAlunno}> Salva </button>
            </div>
        </div>
    )
}