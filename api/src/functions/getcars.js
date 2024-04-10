const fs = require('fs').promises;
const path = require('path');
const { app } = require('@azure/functions');


const j = path.resolve(__dirname,'cars.json');


app.http('getcars', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // try{
        const jsonData = await fs.readFile(j, 'utf8');
            const data = JSON.parse(jsonData);

            return {
                status:200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
        // }catch(error){
        //     return{
        //         status:500,
        //         body:'Error: cant get cars'
            // }
        // }
    }
});
