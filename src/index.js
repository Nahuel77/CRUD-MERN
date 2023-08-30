import app from "./app.js";
import { conectDB } from "./db.js";

conectDB();
app.listen(3000);
console.log("Sever on port", 3000);
