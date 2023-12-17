import MuiTable from "../../components/Table/Table";
import UserData from "../../interfaces/UserData";

interface ListViewProps {
    data: UserData;
  }

export default function ListView({data}:ListViewProps){
    return(
        <MuiTable data={data}/>
    )
}