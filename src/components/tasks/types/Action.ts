import type TaskCredentials from "./TaskCredentials";

export type Action =
  | { type: "tasks/add"; payload: TaskCredentials }  //apraksta uzdevumu, Form
  | { type: "tasks/changeStatus", payload: string }
  | { type: "tasks/remove", payload: string }; // id ir string dotaa situaacijaa

  
  // npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
// npm install @mui/icons-material
// npm install --save uid


  
  
  
  