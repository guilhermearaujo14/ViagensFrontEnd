import './style.css';

export default function Carregando({ isVisible }){
    if(isVisible === false){
        return(
            <></>
        )
    }
    return(
        <div className='container-modal-carregando'>
             <div className="container-modal-corpo">
                <div className="quadrados">
                    <h3>Aguarde</h3>
                    <div className="quadrado-um"></div>
                    <div className="quadrado-dois"></div>
                    <div className="quadrado-tres"></div>
                </div>
             </div>
        </div>
    )
}