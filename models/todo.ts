import Dex from "https://deno.land/x/dex/mod.ts";
import client from "./config.ts";

const dex = Dex({ client: "postgres" });

interface Todo {
  id?: number;
  text: string;
  done: boolean;
}

async function addTodo(todo: Todo) {
  await client.connect();
  const insertQuery = dex.queryBuilder().insert([todo]).into("todo").toString();
      return client.query(insertQuery).then(() =>{
        const get_query =  dex.queryBuilder().select('*').from("todo").where({text:todo.text}).toString()
        return client.query(get_query).then( async () => {
        const result = await client.query(get_query);
        const info = result.rows ? result.rows[0] : {};
        return info;
      })
    })
}




async function getAllTodo(){
    await client.connect()
   const getQuery = dex.queryBuilder().select("*").from('todo').toString();
   const result = await client.query(getQuery);
   return result;
}


async function editTodo(id:number, todo: Todo) {
    await client.connect();
    const editQuery = dex.queryBuilder().from("todo").update(todo).where({id}).toString();
    const get_query =  dex.queryBuilder().select('*').from("todo").where({text:todo.text}).toString()

    return client.query(editQuery).then( async () => {
        const result = await client.query(get_query);
        const info = result.rows ? result.rows[0] : {};
        return info;
  })
}



  async function deleteTodo(id:number){
    await client.connect();
    const deleteQuery = dex.queryBuilder().from("todo").delete().where({id}).toString()
        return client.query(deleteQuery);
  }
  


export{
    addTodo,
    getAllTodo, 
    editTodo,
    deleteTodo
}