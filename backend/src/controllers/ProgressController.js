import Progress from '../models/Progress';
import Process from '../models/Process';

class ProgressController {
    
    async store(req,res) {
        const { description, number } = req.body;
        const published = new Date();

        let progress = await Progress.create({
            description,
            published
        });

        let process = await Process.findOne({number});

        process.progress.push(progress);
        process.save();


        return res.json(process);
    }
}

export default new ProgressController;