import { connect } from "mongoose";

export function dbConnection(){
    connect('mongodb://localhost:27017/TS-Project')
    .then(()=>console.log("DB Connected Successfully"))
    .catch(()=>console.log("Error Connected To Db"))
}