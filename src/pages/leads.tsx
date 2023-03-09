import { FC, ReactElement } from 'react';
import SidebarLayout from '@/layout/sidebarLayout';
import { Box, Card, createTheme, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputField from '@/components/Form/input';
import { createData } from '@/utils/createTableData';
import Badges from '@/components/Badges';
import { tableData } from '../static/Constant/tableData';

const Leads = () => {
  return (
    <Grid paddingTop={1} paddingX={4} container spacing={2} columns={12}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <InputField label="Dummy field" id="1" placeholder="Name" />
          <InputField label="Dummy field" id="2" placeholder="Name" />
          <InputField label="Dummy field" id="3" placeholder="Name" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ paddingTop: '1%', paddingX: '2%', borderRadius: '8px' }}>
          <ul className="ul-table">
            <li className="li-table-head">
              <Badges
                className="flexBasis"
                paddingBottom="1px"
                paddingLeft="15px"
                paddingRight="15px"
                paddingTop="1px"
                text="ID"
              />
              <Badges
                className="flexBasis"
                paddingBottom="1px"
                paddingLeft="15px"
                paddingRight="15px"
                paddingTop="1px"
                text="Advertiser"
              />
              <Badges
                className="flexBasis"
                paddingBottom="1px"
                paddingLeft="15px"
                paddingRight="15px"
                paddingTop="1px"
                text="Lead Status"
              />
              <Badges
                className="flexBasis"
                paddingBottom="1px"
                paddingLeft="15px"
                paddingRight="15px"
                paddingTop="1px"
                text="Date"
              />
              <Badges
                className="flexBasis"
                paddingBottom="1px"
                paddingLeft="15px"
                paddingRight="15px"
                paddingTop="1px"
                text="IPadress"
              />
              <Badges
                className="flexBasis"
                paddingBottom="1px"
                paddingLeft="15px"
                paddingRight="15px"
                paddingTop="1px"
                text="Commision"
              />
              <Badges
                className="flexBasis"
                paddingBottom="1px"
                paddingLeft="15px"
                paddingRight="15px"
                paddingTop="1px"
                text="Price"
              />
            </li>
            {tableData?.map((val) => {
              return (
                <li className="li-table">
                  <span className="flexBasis">{val.id}</span>
                  <span className="flexBasis">{val.Advertiser}</span>
                  <span className="flexBasis">{val.leadStatus}</span>
                  <span className="flexBasis">{val.date}</span>
                  <span className="flexBasis">{val.ipAddress}</span>
                  <span className="flexBasis">{val.commision}</span>
                  <span className="flexBasis">{val.price}</span>
                </li>
              );
            })}
          </ul>
        </Card>
      </Grid>
    </Grid>
  );
};

Leads.getLayout = (Page: ReactElement) => <SidebarLayout>{Page}</SidebarLayout>;

export default Leads;
