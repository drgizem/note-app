export type Task={
  title:string,
  tags:Tag[],
  body:string,
  id:string
}

export type Tag={
  label:string,
  value:string
}