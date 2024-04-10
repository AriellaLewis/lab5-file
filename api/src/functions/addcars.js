const fs = require('fs').promises;
const path = require('path');
const { app } = require('@azure/functions');
const jsonf = path.resolve(__dirname, 'cars.json');
app.http('addcars', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {

const jsonData = await fs.readFile(jsonf, 'utf8');
            const data = JSON.parse(jsonData);

            // Add the new car to the existing data
            data.push(newCar); // Assuming 'newCar' is the object you want to add

            // Save the updated data back to the file
            await fs.writeFile(jsonf, JSON.stringify(data, null, 2), 'utf8');

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
                body: 'Error: Unable to get cars'
            };
        }
    }
});
