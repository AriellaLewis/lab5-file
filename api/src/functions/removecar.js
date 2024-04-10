const fs = require('fs').promises;
const path = require('path');
const { app } = require('@azure/functions');

app.http('removecar', {
    methods: ['DELETE'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const carId = request.query.id; 
            const jsonData = await fs.readFile(jsonFilePath, 'utf8');
            const data = JSON.parse(jsonData);

            const updatedCars = data.filter(car => car.id !== carId);

            await fs.writeFile(jsonFilePath, JSON.stringify(updatedCars, null, 2));

            return {
                status: 200,
                body: 'Car removed successfully'
            };
        } catch (error) {
            return {
                status: 500,
                body: 'Error: cannot remove car'
            };
        }
    }
});


  
