import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
} from "@mui/material";
import UserData from "../../interfaces/UserData";

interface MuiTableProps {
  data: UserData;
}

export default function MuiTable({ data }: MuiTableProps) {
  console.log(data);
  return (
    <Box mt={2} mr={2} ml={2}>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: "100vh", maxWidth: "150vw" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Aktien</TableCell>
              <TableCell>Anteil am Depot</TableCell>
              <TableCell>ISIN/WKN</TableCell>
              <TableCell>Kaufdatum</TableCell>
              <TableCell>Anzahl Anteile</TableCell>
              <TableCell>Kaufpreis pro Anteil</TableCell>
              <TableCell>Transaktionskosten</TableCell>
              <TableCell>Gesamtpreis</TableCell>
              <TableCell>Gesamtwert Position</TableCell>
              <TableCell>Aktueller Marketpreis pro Anteil</TableCell>
              <TableCell>Aktueller Wert</TableCell>
              <TableCell>Gewinn</TableCell>
              <TableCell>Performance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.shares_tables?.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{data.Aktien}</TableCell>
                <TableCell>{data.Anteil_am_Depot}</TableCell>
                <TableCell>{data.ISIN_WKN}</TableCell>
                <TableCell>{data.Kaufdatum}</TableCell>
                <TableCell>{data.Anzahl_Anteile}</TableCell>
                <TableCell>{data.Kaufpreis_pro_Anteil}</TableCell>
                <TableCell>{data.Transaktionskosten}</TableCell>
                <TableCell>{data.Gesamtpreis}</TableCell>
                <TableCell>{data.Gesamtwert_Position}</TableCell>
                <TableCell>{data.Aktueller_Marktpreis_pro_Anteil}</TableCell>
                <TableCell>{data.Aktueller_Wert}</TableCell>
                <TableCell>{data.Gewinn}</TableCell>
                <TableCell>{data.Performance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
