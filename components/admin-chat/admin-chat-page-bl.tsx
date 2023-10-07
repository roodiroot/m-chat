"use client";

import React, { useState, useEffect } from "react";

import { socket } from "@/socket/socket";
import { useQueryRooms } from "@/lib/messages";
import { AdminChatsFC } from "@/components/admin-chat/admin-chat-fc";
import { Room } from "@/interface/rooms";

export const AdminChatsPageBL = () => {
  const [rooms, setRooms] = useState<Room[] | []>([]);
  const [roomSelect, setRoomSelect] = useState<Room>({
    roomName: "",
    hostName: "",
  });

  const { data } = useQueryRooms();

  useEffect(() => {
    const select_room_str = localStorage.getItem("select_room") || "[]";
    const selectRoom = JSON.parse(select_room_str);
    setRoomSelect(selectRoom);
    socket.connect();

    if (selectRoom?.hostName) {
      socket.on("connect", () => {
        socket.emit("join_room_admin", {
          socketId: socket.id,
          roomName: selectRoom?.roomName,
          userName: "admin",
        });
      });

      socket.on("disconnect", () => {
        console.log("disconnect");
      });
    }

    console.log(123);

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
      socket.off("");
    };
  }, [roomSelect.roomName]);

  useEffect(() => {
    socket.emit("get_rooms");

    socket.on("get_rooms", (e) => {
      setRooms(e.rooms);
    });
  }, []);

  const sneacIntoRoom = (room: Room) => {
    localStorage.setItem("select_room", JSON.stringify(room));
    setRoomSelect(room);
    socket.emit("join_room_admin", {
      socketId: socket.id,
      roomName: room.roomName,
      userName: "admin",
    });
  };

  return (
    <AdminChatsFC
      clientRooms={rooms}
      sneacIntoRoom={sneacIntoRoom}
      roomSelect={roomSelect}
      socket={socket}
    />
  );
};
