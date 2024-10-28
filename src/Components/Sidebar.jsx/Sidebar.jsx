import { Avatar, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidestyle from './Sidestyle'
import Star from '../../assets/star.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const iconList = [
  { id: 1, icon: <PersonOutlineOutlinedIcon />,name:'profile' },
  { id: 2, icon: <Groups2OutlinedIcon />,name:'team'},
  { id: 3, icon: <ChatOutlinedIcon /> ,name:'feedback'},
]
const icons = [ 
  { id: 4, icon: <SettingsOutlinedIcon /> },
  { id: 5, icon: <NotificationsNoneOutlinedIcon /> },
  { id: 6, icon: <ExitToAppOutlinedIcon /> },
];

function Sidebar() {
  const [color, setColor] = useState(null);

const handleClick = (id) =>{
  setColor(id);
}

  return (
    <Box sx={Sidestyle}>
      <Box sx={Sidestyle.starver}>
        <Avatar src={Star} sx={Sidestyle.star} />
        <Typography sx={Sidestyle.ver}>V 1.0.02</Typography>
      </Box>
      <Box sx={Sidestyle.fullpage}>
          <Box sx={Sidestyle.three} >
      {iconList.map((item, index) => (
        <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box sx={Sidestyle.icon} key={index}  onClick={() => handleClick(item.id)} >
              <Box sx={{backgroundColor:color == item.id ? "#49C792" : "transparent",...Sidestyle.oneicon}}> 
              {React.cloneElement(item.icon, { sx: Sidestyle.i })} 
                </Box> 
            </Box>
                <Box sx={{fontSize:'12px',width:'100%',display:'flex',justifyContent:'center',marginTop:'2px'}}>{item.name}</Box>
            </Box>
          ))}
          </Box>
          <Box sx={Sidestyle.three}  >
       {icons.map((item, index) => (
            <Box sx={Sidestyle.icon} key={index} onClick={()=> handleClick(item.id)}>
               <Box sx={{backgroundColor:color == item.id ? "#49C792" : "transparent",...Sidestyle.oneicon}}>
              {React.cloneElement(item.icon, { sx: Sidestyle.i })}
              </Box>
            </Box>
      ))}
          </Box>
        </Box>
    </Box>
  );
}

export default Sidebar;
