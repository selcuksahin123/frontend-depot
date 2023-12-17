import ShareTable from "./ShareTable";

interface UserData {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  shares_tables: ShareTable[];
}
  
  export default UserData;