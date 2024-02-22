import { useState } from "react"

import Carregando from "../modal/carregando";

import './style.css';


export default function CadastroDadosViagem(){
    const [cidade, setCidade] = useState('')
    const [viajante, setViajante] = useState('')
    const [viajantesList, setViajantesList] = useState([])

    const AdicionarViajante = (event: React.FormEvent) =>{
        event.preventDefault()
        if(!viajante || !viajante.trim()){
            alert('Ops.. viajante não informado, veririque!')
            return 
        }
        setViajantesList((prevViajantesList) => [...prevViajantesList, viajante])
        setViajante('')
        console.log(viajantesList)
    }
    return(
        <div>
            <h1> dados viagem</h1>
            <div className="dados-viagem-form">
                <form action="">
                    <div className="container-input-cidade">
                        <label htmlFor="Cidade">Cidade (destino)</label>
                        <input type="text" name="Cidade" id="Cidade" className="inputDadosViagem" value={cidade} onChange={(e)=> setCidade(e.target.value)} />
                    </div>
                    <div className="container-input-viajante">
                        <label htmlFor="Viajante">Viajante</label>
                        <div className="container-input-viajante-btn">
                            <input type="text" name="Viajante" id="Viajante" className="inputDadosViagem" value={viajante} onChange={(e)=> setViajante(e.target.value)} />
                            <button className="btnAdicionarViajante" onClick={AdicionarViajante}>+</button>
                        </div>
                    </div>
                </form>
                <div className="dados-viagem-list-viajantes">
                    
                        <ul className="dados-viagem-lista">
                            <h4>Viajantes:</h4>
                            {
                                viajantesList.map((pessoa, index)=>{
                                    return(
                                        <li key={index}>{pessoa}</li>
                                    )
                                })
                            }        
                        </ul>
                    
                </div>
            </div>
            <Carregando isVisible={true} />
        </div>
    )
}


