import {useState} from 'react';

export default function Alunno({alunno, popolaAlunni}){
    const [inCancellazione, setInCancellazione] = useState(false);
    const [richiestaConferma, setRichiestaConferma] = useState(false);

    async function cancellaAlunno(){
        setRichiestaConferma(false);
        setInCancellazione(true);
        await fetch(`http://localhost:8080/alunni/${alunno.Matricola}`, {method: "DELETE"});
        popolaAlunni();
    }

    function richiesta(){
        setRichiestaConferma(true);
    }

    function annulla(){
        setRichiestaConferma(false);
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
                        <button onClick={annulla}> No </button>
                    </span>
                :
                    <button onClick={richiesta}> Cancella </button>
            }
            {
                inCancellazione &&
                    <span> In fase di Cancellazione...</span>
            }

            <hr />
        </div>
    )
}