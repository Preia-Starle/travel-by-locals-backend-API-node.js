import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import usersRoutes from './routes/users.js';

const app = express();
app.set('port', process.env.PORT || 443);

import sql from 'mssql';

sql.on("error", err => {
    console.log(err.message);
})

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors({
  origin: '*'
}));

app.use('/users', usersRoutes);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  });

//app.listen(PORT, () => console.log(`Server running on port: https://travelsbylocalsnodeexpresswebapp.azurewebsites.net:${PORT}`));

