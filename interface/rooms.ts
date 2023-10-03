export interface Room {
  roomName: string;
  hostName: string;
}

export interface MessageType {
  author: string;
  roomName: string;
  socketId: string;
  text: string;
}
