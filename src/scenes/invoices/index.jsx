import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Id", flex: 1 },
    { field: "intensity", headerName: "Intensity", flex: 1 },
    { field: "sector", headerName: "Sector", flex: 1 },
    { field: "topic", headerName: "Topic", flex: 1 },
    { field: "insight", headerName: "Insight", flex: 1 },
    { field: "url", headerName: "URL", flex: 1,
    renderCell: (params) => (
      <Typography color={colors.greenAccent[500]}>
          {params.row.cost}
      </Typography>
    ),},
    { field: "region", headerName: "Region", flex: 1 },
    { field: "start_year", headerName: "Start Year", flex: 1 },
    { field: "impact", headerName: "Impact", flex: 1 },
    { field: "added", headerName: "Added", flex: 1 },
    { field: "published", headerName: "Published", flex: 1 },
    { field: "country", headerName: "Country", flex: 1 },
    { field: "relevance", headerName: "Relevance", flex: 1 },
    { field: "pestle", headerName: "Pestle", flex: 1 },
    { field: "source", headerName: "Source", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 }
   
  ];
    
  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[200],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
