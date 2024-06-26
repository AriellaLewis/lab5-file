const fs = require('fs').promises;
const path = require('path');
const { app } = require('@azure/functions');


const j = path.resolve(__dirname,'cars.json');


app.http('getcars', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
       const dataj = await fs.readFile(j, 'utf8');
        const data = JSON.parse(dataj);

            return {
                status:200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
    
    }
});
