
  module.exports ={
    PORT:process.env.PORT || 4000,
    MONGODB_URI :process.env.MONGODB_URI || "mongodb+srv://admin_all:roma@cluster0.jlxj8oo.mongodb.net",
    MONGODB_URI_LOCAL: process.env.MONGODB_URI  || "mongodb://0.0.0.0:27017/",
    DB_NAME:"HandyBot",
    secret: 'mysecretkey'
  }
