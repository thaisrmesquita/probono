import React, {useState, useHistory} from 'react';
import api from '../../../services/api';

function ProgressForm () {
    const [description, setDescription] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        
        const data = {
            description
        };

        /*try {
            const response = await api.post('progress/register', data);
            alert(`Seu usuario de acesso ${email}`);
            history.push('/');
        } catch (err) {
            alert(`Erro no cadastro! Tente novamente!`);
       }*/

    }

    return (
        <div className="form-container">
        <form className="form" onSubmit={handleRegister}>
            <h3>Cadastro de Novo Andamento</h3>
            <div className="form-group">
                <input className="input-text" placeholder="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="form-group form-group-btn"> 
            <button className="button-submit" type="submit">Cadastrar</button>
            </div>
        </form>
    </div>
    )
}

export default ProgressForm;