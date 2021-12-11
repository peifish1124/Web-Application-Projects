import express from 'express';
import db from "./mongo.js";
// import routes from "./routes/index.js";
import WebSocket from 'ws';
import http from 'http';
import Message from './models/message';
import { sendData, sendStatus, initData } from './wssConnect';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const broadcastMessage = (data, status) => {
  wss.clients.forEach((client) => {
    sendData(data, client);
    sendStatus(status, client);
  });
};

db.on("error", (err) => console.log(err));
db.once("open", () => {
  //define websocket connection logic
  wss.on('connection', (ws) => {
    initData(ws);
    ws.onmessage = async (byteString) => {
      const { data } = byteString;
      const [task, payload] = JSON.parse(data);
      switch (task){
        case 'input':{
          const {name,body} = payload;
          const message = new Message({ name, body })
          try { 
            await message.save();
          } catch(e) {
            throw new Error("Message DB save error: "+e);
          }
          broadcastMessage(['output',[payload]],{
            type: 'success',
            msg: 'Message sent.'
          });
          break;
        }
        case 'clear':{
          Message.deleteMany({}, () => {
            broadcastMessage(['cleared'],{
              type: 'info',
              msg: 'Message cache cleared.'
            });
          });
          break;
        }
        default: break;
      }
    }
    
  })

  const port = process.env.PORT || 4000;
  server.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
  });
});