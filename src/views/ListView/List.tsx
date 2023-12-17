import { useEffect, useState } from "react";
import ListView from "./ListView";
import UserData from "../../interfaces/UserData";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext"; 

export default function List() {
  const [data, setData] = useState<UserData | null>(null);
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    async function getUserData() {
      try {
        if (!isAuthenticated) {
          console.log("User not authenticated");
          return;
        }

        const decodedToken = await decodeToken(isAuthenticated);
        console.log(decodedToken?.id,'esto es decoded token');

        if (!decodedToken || !decodedToken.id) {
          console.log("Error decoding token or user ID not found");
          return;
        }
        const response = await fetch(`https://depot-backend.onrender.com/api/users/${decodedToken.id}?populate=*`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${isAuthenticated}`
          },
        });

        if (response.status === 200) {
          const responseJsonFormat = await response.json();
          setData(responseJsonFormat);
        } else {
          console.log('Error when trying to fetch data');
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    }

    getUserData();
  }, [isAuthenticated]); 

  return <ListView data={data as UserData} />;
}

async function decodeToken(token: string): Promise<{ id: string; } | null> {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = JSON.parse(atob(base64));
    return decoded;
  } catch (error) {
    return null;
  }
}
