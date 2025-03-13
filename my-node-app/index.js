// Import Express
 const express = require('express');

 // Create an Express app
 const app = express();

 // Initialize view counter
 let viewCount = 0;

 // Define a route
 app.get('/', (req, res) => {
   viewCount++; // Increment the view count
     res.send(`Hello, World! View count: ${viewCount}`);
     });

     // Start the server
     const PORT = 3000;
     app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
       });
