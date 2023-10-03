import { useQuery } from "@tanstack/react-query";

import { $host } from "@/http";

export const useQueryRooms = () => {
  const query = useQuery({
    queryKey: ["select_rooms"],
    queryFn: () => $host.get("http://localhost:5000/users/rooms"),
    refetchInterval: 5000,
  });
  return query;
};

export const useQueryMessages = (roomName: string) => {
  const query = useQuery({
    queryKey: ["messages"],
    queryFn: () => $host.get(`http://localhost:5000/chat/${roomName}`),
  });
  return query;
};

export const fetchMessage = async (roomName: string) => {
  const { data } = await $host.get(`/chat/${roomName}`);
  return data;
};
