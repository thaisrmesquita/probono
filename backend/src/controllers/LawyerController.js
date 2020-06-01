import Lawyer from '../models/Lawyer';

import bcrypt from 'bcryptjs';

class LawyerController {

    async store(req,res) {
        const { email, password } = req.body;
        const created = new Date();
        const updated = new Date();

        let lawyer = await Lawyer.findOne({email});
        
        if(!lawyer) {
            let passwordHash = await bcrypt.hash(password, 8);
            lawyer = await Lawyer.create({email, password:passwordHash, created, updated});
            delete lawyer.password;
            return res.json(lawyer);
        } else {
            return res.status(401).json({error: "Usuário Já existe"});
        }

    }

    async login(req, res) {
        const { email, password } = req.body;
        let lawyer = await Lawyer.findOne({email});

        if(!lawyer) {
            return res.status(401).json({error: "Usuário não existe"});
        }

        let passwordIsValid = await bcrypt.compare(password,lawyer.password);

        console.log(passwordIsValid);

        if(passwordIsValid) {
            return res.json(lawyer);
        } else {
            return res.status(401).json({error: "Senha inválida"});
        }
    }

}

export default new LawyerController();