const connection = require ('../database/connection');
const crypto = require('crypto');

module.exports = {

    async list(request, response)  {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request,response) {
            const data = request.body;
        
            const { name, email, whatsapp, city, uf } = data;
        
            const id = crypto.randomBytes(4).toString('HEX');
        
            console.log(data);
        
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });
        
            return response.json({id});
    }
};