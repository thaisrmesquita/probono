import { validate } from 'gerador-validador-cpf';
import Client from '../models/Client';
import Lawyer from '../models/Lawyer';
import bcrypt from 'bcryptjs';

class SessionController {

    

    async login(req, res) {
        const { user, password } = req.body;

        const isCpf = validate(user);

        if (isCpf) {
            let client = await Client.findOne({cpf: user});

            if(!client) {
                return res.status(401).json({error: "Usuário não existe"});
            }

            client = client.toObject();

            let passwordIsValid = await bcrypt.compare(password,client.password);

            if(passwordIsValid) {
                client.user = 0;
                return res.json(client);
            } else {
                return res.status(401).json({error: "Senha inválida"});
            }
        } else {

            let lawyer = await Lawyer.findOne({email: user});

            console.log(lawyer);

            if(!lawyer) {
                return res.status(401).json({error: "Usuário não existe"});
            }

            lawyer = lawyer.toObject();

            let passwordIsValid = await bcrypt.compare(password, lawyer.password);

            if(passwordIsValid) {
                lawyer.user = 1;
                return res.json(lawyer);
            } else {
                return res.status(401).json({error: "Senha inválida"});
            }
        }

    }

}
export default new SessionController();