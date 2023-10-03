"use client";

import React, { useState, useEffect } from "react";

import { socket } from "@/socket/socket";
import { useQueryRooms } from "@/lib/messages";
import { AdminChatsFC } from "@/components/admin-chat/admin-chat-fc";
import { Room } from "@/interface/rooms";

export const AdminChatsPageBL = () => {
  const [roomSelect, setRoomSelect] = useState<Room>({
    roomName: "",
    hostName: "",
  });
  const { data } = useQueryRooms();

  useEffect(() => {
    const select_room_str = localStorage.getItem("select_room") || "[]";
    const selectRoom = JSON.parse(select_room_str);
    setRoomSelect(selectRoom);
    if (selectRoom?.hostName) {
      socket.connect();

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
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
      socket.off("");
    };
  }, [roomSelect.roomName]);

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
      clientRooms={data?.data?.rooms}
      sneacIntoRoom={sneacIntoRoom}
      roomSelect={roomSelect}
      socket={socket}
    />
  );
};
