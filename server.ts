import {Application} from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import api from "./routes/routes.ts";


const app  = new Application({port: 1337})

app.use("/api/todos", api)
app.run()