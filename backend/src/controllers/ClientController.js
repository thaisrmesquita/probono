import Client from '../models/Client';
import { validate } from 'gerador-validador-cpf';

import bcrypt from 'bcryptjs';

class ClientController {
    async show(req,res) {
        const {cpf} = req.params;
        const client = await Client.findOne({cpf});

        if(!client) {
            return res.status(401).json({error: "Cliente não encontrado"});
        }
        return res.json(client);
    }

    async store(req,res) {
        const { name, cpf, password } = req.body;
        const created = new Date();
        const updated = new Date();
        
        let cpfIsValid = validate(cpf);

        if(!cpfIsValid) {
            return res.status(401).json({error: "CPF inválido"});
        }

        let client = await Client.findOne({cpf});
        
        if(!client) {
            let passwordHash = await bcrypt.hash(password, 8);
            client = await Client.create({name, cpf, password:passwordHash, created, updated});
            delete client.password;
            return res.json(client);
        } else {
            return res.status(401).json({error: "Usuário Já existe"});
        }

    }

}

export default new ClientController();