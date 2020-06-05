import Progress from '../models/Progress';
import Process from '../models/Process';

class ProgressController {
    
    async store(req,res) {
        const { description, number } = req.body;
        const published = new Date();

        let process = await Process.findOne({number});

        if (process === null) {
            return res.status(400).json({error: true, msg: "Processo Não existe"});
        }

        let progress = await Progress.create({
            description,
            published
        });

        process.progress.push(progress);
        process.save();

        return res.json(process);
    }
}

export default new ProgressController;