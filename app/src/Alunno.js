import {useState} from 'react';

export default function Alunno({alunno, popolaAlunni}){
    const [inCancellazione, setInCancellazione] = useState(false);
    const [richiestaConferma, setRichiestaConferma] = useState(false);
    const [richiestaUpdate, setRichiestaUpdate] = useState(false);
    const [nome, setNome] = useState(alunno.Nome);
    const [cognome, setCognome] = useState(alunno.Cognome);

    async function cancellaAlunno(){
        setRichiestaConferma(false);
        setInCancellazione(true);
        await fetch(`http://localhost:8080/alunni/${alunno.Matricola}`, {method: "DELETE"});
        popolaAlunni();
    }

    async function modificaAlunno(){
        setRichiestaUpdate(false);
        await fetch(`http://localhost:8080/alunni/${alunno.Matricola}`, 
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    Nome: nome,
                    Cognome: cognome
                })
            });
        popolaAlunni();
    }

    function richiestaModificaAlunno(){
        setRichiestaUpdate(true);
    }

    function richiesta(){
        setRichiestaConferma(true);
    }

    function annullaDelete(){
        setRichiestaConferma(false);
    }

    function annullaUpdate(){
        setRichiestaUpdate(false);
    }

    function cambioNome(event){
        setNome(event.target.value);
    }   
    function cambioCognome(event){
        setCognome(event.target.value);
    }

    return(
        <div>
            <span>{alunno.Nome}</span>
            <span>{alunno.Cognome}</span>
            
            {
                richiestaConferma ?
                    <span>
                        Sei Sicuro?
                        <button onClick={cancellaAlunno}> Sì </button>
                        <button onClick={annullaDelete}> No </button>
                    </span>
                :
                    <button onClick={richiesta}> Cancella </button>
            }

            {
                richiestaUpdate ?
                    <span>
                        <input type='text' value={nome} onChange={cambioNome}></input>
                        <input type='text' value={cognome} onChange={cambioCognome}></input>
                        <button onClick={modificaAlunno}> Salva </button>
                        <button onClick={annullaUpdate}> Annulla </button>
                    </span>

                :
                    <button onClick={richiestaModificaAlunno}>Modifica</button>
            }

            {
                inCancellazione &&
                    <span> In fase di Cancellazione...</span>
            }

            <hr />
        </div>
    )
}