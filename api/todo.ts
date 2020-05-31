import { Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { addTodo, getAllTodo, editTodo, deleteTodo } from "../models/todo.ts";

const api = new Router();

api.get("/privet",(ctx)=>{
    return "ну привет";
})


api.get("/", (ctx) => {
  return getAllTodo().then(result => {
    return result.rows;
  })
})

api.post("/", (ctx) => {
  const body = {
    text: ctx.req.body.text,
    done: ctx.req.body.done,
  };

  return addTodo(body).then((newTodo) => {
    ctx.res.setStatus(201);
    return newTodo;
  });
});

api.patch("/:id", (ctx) => {
  const todo = {
    text: ctx.req.body.text,
    done: ctx.req.body.done,
  };

  return editTodo(ctx.req.params.id as number, todo).then((result) => {
    return result;
  });
});

api.delete("/:id", (ctx) => {
  return deleteTodo(ctx.req.params.id as number).then(() => {
    ctx.res.setStatus(204);
    return true;
  });
});

export default api;