import Process from '../models/Process';
import Client from '../models/Client';

class ProcessController {

    async update (req, res) {
        const { number, client } = req.body;

        const process = await Process.updateOne({id:_id}, {
            number,
            client
        });
        return res.json(process);        
    }

    async index(req, res) {
        const { number } = req.params;
        let process = await (await Process.findOne({number})).toObject();

        if(!process) {
            return res.status(401).json({error: "Processo não encontrado"});
        }

        let client = await (await Client.findOne({cpf: process.client}));
        
        if (client !== null) {
            client = client.toJSON();
            process.client = client;
        }
        

        return res.json(process);
    }

    async findByResponsible(req, res) {
        const { responsible } = req.query;

        let processes = await Process.find({ responsible });

        if(!processes) {
            return res.status(401).json({error: "Processo não encontrado"});
        }

        let outProcess = []

        for (let process of processes) {
            process = process.toObject();
            let client = await Client.findOne({cpf: process.client});
    
            if (client !== null) {
                client = client.toObject();
                process.client = client;
            }
            outProcess.push(process);
            
        }

        return res.json(outProcess);
    }

    async findByClient(req, res) {
        const { client } = req.query;

        let process = await Process.find({ client });

        if(!process) {
            return res.status(401).json({error: "Processo não encontrado"});
        }

        console.log(process);

        return res.json(process);
    }

    async indexAll(req, res) {
        let process = await Process.find(); 

        let client = await (await Client.findOne({cpf: process.client}));

        if (client !== null) {
            client = client.toJSON();
            process.client = client;
        }
        console.log(client);
        
        
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