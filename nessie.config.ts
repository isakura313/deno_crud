import { ClientPostgreSQL} from "https://deno.land/x/nessie/mod.ts"; 

const migrationFolder = "./migrations";

const configPg = {
  client: new ClientPostgreSQL(migrationFolder, {
    database: "deno_crud",
    hostname: "localhost",
    port: 5432,
    user: "isakura313",
    password: "",
  }),
};


export default configPg;
