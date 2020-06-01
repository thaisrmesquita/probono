import Process from '../models/Process';

class ProcessController {

    async index(req, res) {
        const { number } = req.params;

        let process = await Process.findOne({number});

        if(!process) {
            return res.status(401).json({error: "Processo não encontrado"});
        }

        return res.json(process);
    }

    async findByResponsible(req, res) {
        const { responsible } = req.query;

        let process = await Process.find({ responsible });

        if(!process) {
            return res.status(401).json({error: "Processo não encontrado"});
        }

        return res.json(process);
    }

    async indexAll(req, res) {
        let process = await Process.find();   
        return res.json(process);
    }

    async delete(req, res) {
        try {
            const { idProcess } = req.params;
            await Process.findByIdAndDelete(idProcess);
            return res.status(200).json({sucess: "Registro apagado com sucesso"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: "Erro ao processar solicitação"});
        }
        
    }

    async store(req, res) {
        const { number, client, progress, responsible } = req.body;
        const created = new Date();
        const updated = new Date();

        let process = await Process.findOne({number});

        if (process) {
            return res.status(401).json({error: "Já existe processo cadastrado com esse número"})
        } else {
            process = await Process.create({
                number,
                client,
                progress,
                responsible,
                created,
                updated
            });
    
            return res.json(process);
        }        
    }
}

export default new ProcessController;