const mongoose = require("mongoose");

const ConnectDB = URL => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log(`successfully connecting database`);
    })
    .catch(error => {
      console.log(`Failed to Connected DataBase , Error : ${error.message}`);
    });
};

module.exports = {ConnectDB};
