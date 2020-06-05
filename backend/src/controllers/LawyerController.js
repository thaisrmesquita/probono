import Lawyer from '../models/Lawyer';

import bcrypt from 'bcryptjs';

class LawyerController {

    async store(req,res) {
        const { name, email, password } = req.body;
        const created = new Date();
        const updated = new Date();

        let lawyer = await Lawyer.findOne({email});
        
        if(!lawyer) {
            let passwordHash = await bcrypt.hash(password, 8);
            lawyer = await Lawyer.create({name, email, password:passwordHash, created, updated});
            delete lawyer.password;
            return res.json(lawyer);
        } else {
            return res.status(401).json({error: "Usuário Já existe"});
        }

    }

}

export default new LawyerController();