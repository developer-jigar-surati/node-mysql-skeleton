const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

const db = require("./models");

var corsOrigins = {
    origin: "*"
};

app.use(cors(corsOrigins));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcom to node-mysql-skeleton version 1.0.0.0" });
});

db.squelizeObj.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



////////********Require My Routes***************////////
// let recursiveRoutes = (folderName) => {
    
//     fs.readdirSync(folderName).forEach((file) => {

//         let fullName = path.join(folderName, file);
//         let stat = fs.lstatSync(fullName);

//         if (stat.isDirectory()) {
//             recursiveRoutes(fullName);
//         } else if (file.toLowerCase().indexOf('.js')) {
//             require('./' + fullName)(app);
//         }
//     });

// };

// recursiveRoutes('routes');

require("./routes/users.routes")(app);

const PORT = process.env.PORT || 1996;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});