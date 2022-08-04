export interface toDo{
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

function getNew(): Promise<toDo[]>{
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(res=>{
    return res as toDo[]
  })
}

export default getNew;