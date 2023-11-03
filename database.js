// import {} from "dotenv/config"
import { Sequelize } from "sequelize";

// const sequelize=new Sequelize(process.env.DB_URL,{
    
//     dialect:'postgres' 
// })
const sequelize=new Sequelize("task-m","postgres","post1234",{
    host:"database-1.cwdtoy3mxidy.eu-north-1.rds.amazonaws.com",
    dialect:"postgres",
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
      },
})
export default sequelize;
