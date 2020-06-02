import Translation from "../models/Translation";

class TranslationController {

    async store(req, res) {
        const { rule, description } = req. body;
        
        let translate = Translation.create({
            rule,
            description
        });
        

        return res.json(translate);
    }

    delete

    update

    listar
    
    
}
export default TranslationController;