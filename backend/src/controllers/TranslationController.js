import Translation from '../models/Translation';
import  Progress from '../models/Progress';
import Process from '../models/Process';

class TranslationController {

    async store(req, res) {
        const { rule, description } = req. body;
        
        let translate = await Translation.create({
            rule,
            description
        });

        let processes = await Process.find();

        let compare = rule.split(" ");

        for (let process of processes) {
            let progresses = process.progress;
            console.log(progresses.length);
            for (let progress = 0; progress < progresses.length; progress++){
                let splitDescription = progresses[progress].description.split(" ");
                for (let ruleDescription of compare) {
                    let addRule = splitDescription.includes(ruleDescription);
                    if (addRule){
                        console.log("Possui a tradução");
                        let index = progresses.indexOf(progress);
                        progresses[progress].translation = description;
                        console.log(progresses[progress]);
                        progresses.splice(index, 1);
                        process.progress.push(progresses[progress])
                        await process.save();
                    }
                }
            }
            
        }


        return res.json(translate);
    }    
    
}
export default new TranslationController();