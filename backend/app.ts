import app from "./config/server";
import {PORT} from "./config";

app.listen(PORT, () => {
    console.log(`SERVER ON ${PORT}`);
})