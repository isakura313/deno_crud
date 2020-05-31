import { Client } from "https://deno.land/x/postgres/mod.ts";


  const client = new Client({
    user: "isakura313",
    database: "deno_crud",
    hostname: "localhost",
    port: 5432,
  });


export default client;

