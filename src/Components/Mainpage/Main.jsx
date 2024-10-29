import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GaugeChart from 'react-gauge-chart';
import Mainstyle from './Mainstyle';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


import Men from '../../assets/men.png'; // Ensure this path is correct
import { Button, IconButton, Stack } from '@mui/material';

const columns = [
  { id: 'name', label: 'Name', minWidth: 220 },
  { id: 'desi', label: 'Designation', minWidth: 190, align: 'left' },
  { id: 'dep', label: 'Department', minWidth: 160, align: 'left' },
  { id: 'signals', label: 'Signals', minWidth: 200, align: 'left' },
  { id: 'performance', label: 'Overall Performance', minWidth: 200, align: 'center' },
  { id: 'rep', label: 'Reporting To', minWidth: 170, align: 'left' },
  { id: 'role', label: 'Role', minWidth: 180, align: 'left' },
  { id: 'mail', label: 'Email', minWidth: 250, align: 'left' },
  { id: 'exp', label: 'Experience', minWidth: 170, align: 'right' },
  { id: 'status', label: 'Status', minWidth: 300, align: 'center' },
];

function createData(name, desi, dep, signals, performance, rep, role, mail, exp, status, img) {
  return { name, desi, dep, signals, performance, rep, role, mail, exp, status, img };
}

const rows = [
  createData("George Fernandes", "Visual Designer", "Design", "C E T D U", "Excellent", "Steven", "Employee", "dharanis@gmail.com", "3 years 4 months", "Active", Men),
  createData("Alice Johnson", "Project Manager", "Management", "C E D U T", "Good", "Michael", "Employee", "alice@gmail.com", "5 years", "Active", Men),
  createData("John Doe", "Software Engineer", "Development", "C D E T U", "Very Good", "Sarah", "Employee", "john.doe@gmail.com", "2 years", "Active", Men),
  createData("George Fernandes", "Visual Designer", "Design", "C E T D U", "Excellent", "Steven", "Employee", "dharanis@gmail.com", "3 years 4 months", "Active", Men),
  createData("Alice Johnson", "Project Manager", "Management", "C E D U T", "Good", "Michael", "Employee", "alice@gmail.com", "5 years", "Active", Men),
  createData("John Doe", "Software Engineer", "Development", "C D E T U", "Very Good", "Sarah", "Employee", "john.doe@gmail.com", "2 years", "Active", Men),
  createData("George Fernandes", "Visual Designer", "Design", "C E T D U", "Excellent", "Steven", "Employee", "dharanis@gmail.com", "3 years 4 months", "Active", Men),
  createData("Alice Johnson", "Project Manager", "Management", "C E D U T", "Good", "Michael", "Employee", "alice@gmail.com", "5 years", "Active", Men),
  createData("John Doe", "Software Engineer", "Development", "C D E T U", "Very Good", "Sarah", "Employee", "john.doe@gmail.com", "2 years", "Active", Men),
  createData("George Fernandes", "Visual Designer", "Design", "C E T D U", "Excellent", "Steven", "Employee", "dharanis@gmail.com", "3 years 4 months", "Active", Men),
  createData("Alice Johnson", "Project Manager", "Management", "C E D U T", "Good", "Michael", "Employee", "alice@gmail.com", "5 years", "Active", Men),
  createData("John Doe", "Software Engineer", "Development", "C D E T U", "Very Good", "Sarah", "Employee", "john.doe@gmail.com", "2 years", "Active", Men),
  createData("George Fernandes", "Visual Designer", "Design", "C E T D U", "Excellent", "Steven", "Employee", "dharanis@gmail.com", "3 years 4 months", "Active", Men),
  createData("Alice Johnson", "Project Manager", "Management", "C E D U T", "Good", "Michael", "Employee", "alice@gmail.com", "5 years", "Active", Men),
  createData("John Doe", "Software Engineer", "Development", "C D E T U", "Very Good", "Sarah", "Employee", "john.doe@gmail.com", "2 years", "Active", Men),
  
];

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 37,
  height: 22,
  padding: 0,
  gap:4,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 0,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));


const signalColors = {
  C: "#007C32",
  E: "#4C9E29",
  T: "#F2B824",
  D: "#F2EB24",
  U: "#DE1010",
};

const SignalIcons = ({ signals }) => {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      {signals.split(" ").map((signal) => (
        <Box
          key={signal}
          sx={{
            width: 24,
            height: 24,
            backgroundColor: signalColors[signal] || "#ccc",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "11px",
          }}>
          {signal}
        </Box>
      ))}
    </Box>
  );
};


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={Mainstyle.paper} >
      <TableContainer sx={{height:'92%',borderBottom:'1px solid #EBEBEB'}}>
        <Table stickyHeader aria-label="Employee performance table" sx={Mainstyle.table}>
          <TableHead sx={Mainstyle.header}>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ minWidth: column.minWidth,fontSize:'18px',color:'#353448',fontWeight:'bold' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            <Box sx={Mainstyle.heada}>
  <Typography sx={Mainstyle.a}>Action</Typography>
            </Box>
          </TableHead>
          <TableBody sx={Mainstyle.fullpage}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow key={index} sx={Mainstyle.pageRow}>
                  <TableCell sx={Mainstyle.avna}>
                    <Avatar src={item.img} sx={Mainstyle.avatar}/>
                    <Typography sx={Mainstyle.desi}>{item.name}</Typography>
                  </TableCell>
                  <TableCell sx={Mainstyle.desi}>{item.desi}</TableCell>
                  <TableCell sx={Mainstyle.dep}>{item.dep}</TableCell>
                  <TableCell sx={Mainstyle.ign}>
                  <SignalIcons signals={item.signals} />
                  </TableCell>

                  <TableCell sx={Mainstyle.c}>
                <Box   sx={Mainstyle.chart}>
                <GaugeChart
        
          nrOfLevels={6} 
      
          arcPadding={0}
          cornerRadius={0}
          textColor={"#000000"} 
          needleColor={"#000000"} 
          colors={["#FF0000", "#FFA500", "#008000"]} 
        
          hideText={true}
       />
                </Box>
                  </TableCell>
                  <TableCell sx={Mainstyle.avna}>
                  
                      <Avatar src={Men} sx={Mainstyle.avatar}/>
                      <Typography>{item.rep}</Typography>
                  
                  </TableCell>
                  <TableCell sx={Mainstyle.role}>{item.role}</TableCell>
                  <TableCell  sx={Mainstyle.role}>{item.mail}</TableCell>
                  <TableCell  sx={Mainstyle.role}>{item.exp}</TableCell>
                  <TableCell  sx={Mainstyle.role}>
                  <FormGroup sx={Mainstyle.tog}>
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 0,
        }} defaultChecked />}
      />
        <Typography sx={Mainstyle.ac}>{item.status}</Typography>
    </FormGroup>
</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Box sx={Mainstyle.action}>
      <Stack spacing={2} direction="row" sx={Mainstyle.con}>
      <Button variant="contained" sx={{backgroundColor:'#49C792',textTransform:'none'}}>Add Feedback</Button>
      <IconButton sx={Mainstyle.ic}><CreateOutlinedIcon sx={{fontSize:'15px'}}/></IconButton>
      </Stack>
      <Stack spacing={2} direction="row" sx={Mainstyle.con}>
      <Button variant="contained" sx={{backgroundColor:'#49C792',textTransform:'none',height:'40%'}}>Add Feedback</Button>
      <IconButton sx={Mainstyle.ic}><CreateOutlinedIcon sx={{fontSize:'15px'}}/></IconButton>
      </Stack>
      <Stack spacing={2} direction="row" sx={Mainstyle.con}>
      <Button variant="contained" sx={{backgroundColor:'#49C792',textTransform:'none'}}>Add Feedback</Button>
      <IconButton sx={Mainstyle.ic}><CreateOutlinedIcon sx={{fontSize:'15px'}}/></IconButton>
      </Stack>
      <Stack spacing={2} direction="row" sx={Mainstyle.con}>
      <Button variant="contained" sx={{backgroundColor:'#49C792',textTransform:'none'}}>Add Feedback</Button>
      <IconButton sx={Mainstyle.ic}><CreateOutlinedIcon sx={{fontSize:'15px'}}/></IconButton>
      </Stack>
      </Box>
      {/* <Drawer /> */}
    </Paper>
  );
}
