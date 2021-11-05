import {connect} from "mongoose";


const mongoConnect = async() =>{
    return await connect('mongodb://localhost:27017/test_bit');
}

export default mongoConnect