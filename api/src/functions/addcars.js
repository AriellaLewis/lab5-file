const fs = require('fs').promises;
const path = require('path');
const { app } = require('@azure/functions');
const jsonf = path.resolve(__dirname, 'cars.json');
app.http('addcars', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {

const dataj = await fs.readFile(jsonf, 'utf8');
            const data = JSON.parse(jsonData);

            data.push(newCar); 
            

            await fs.writeFile(jsonf, JSON.stringify(data), 'utf8');

            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
        } catch (error) {
            return {
                status: 500,
                body: 'Error: Unable to add car'
            };
        }
    }
});
