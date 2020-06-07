import Progress from '../models/Progress';
import Process from '../models/Process';
import Translation from '../models/Translation';

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
            published,
            translation: null
        });

        let translations = await Translation.find();

        let compare = description.split(" ");

        for (let translation of translations) {
            let rule = translation.rule.split(" ");
            for (let ruleDescription of compare) {
                let addRule = rule.includes(ruleDescription);
                if (addRule) {
                    progress.translation = translation.description
                    await progress.save()
                }
            }
        }

        process.progress.push(progress);
        process.save();

        return res.json(process);
    }
}

export default new ProgressController;