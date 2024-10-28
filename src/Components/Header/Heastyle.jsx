
const HedStyle = {
    width:'98%',
    height:"100%",
    backgroundColor:'#F0F0F0',
    display:'flex',
    padding:'1%',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    
    team:{
        width:'15%',
        height:"100%",
        alignItems:'center',
    color:"#353448",
    fontSize:'20px',
    fontWeight:"normal",
    display:'flex',

},
rightteam:{
    width:'80%',
    height:"100%",
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginLeft:'300px'
},
box:{
 color:'green',
},
chek:{
    display:'flex',
    width:'25%',
    height:'100%',
    alignItems:'center',
    gap:"2px",
},
show:{
    fontSize:'14px',
    color:"#353448"
},
icbut:{
    height:"40px",
    width:'48px',
    borderRadius:'4px',
    backgroundColor:'#49C792',
    color:'white'
},
import:{
    borderColor:'#49C792',
    color:"#49C792",
    textTransform:'none',
    width:'109px',
    height:'40px',
    fontSize:'14px'
},
add:{
    borderColor:'#49C792',
    color:"#49C792",
    textTransform:'none',
    backgroundColor:'#49C792',
    height:'40px',
    fontSize:'16px',
    color:'#FFFFFF',
    width:'max-content',
    maxWidth:'136px',

},
dra:{
    fontSize:'16px',
    color:"#353448",
    height:'70%',
    borderBottom:'1px solid gray'
},



// -----------Drawer -------------

log:{
    height:'100%',
    width:'100%',   
},
title:{
    height:'6%',
    borderBottom:'1px solid #EBEBEB',
    display:'flex',
    fontSize:'16px',
    color:'#353448',
    fontWeight:'bold'
},

nameasterisk: {
    display: "flex",
    gap: "1%",
    color: "#484759",
    fontSize: "12px",
  },
  asterisk: {
    color: "red"
  },
  nameinputs: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "7px"
  },
  inputsvaluefonts: {
    fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
  },














  allinput: {
    width: "100%",
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  addmembertitle: {
    width: "85%",
    display: "flex",
  },
  nameasterisk: {
    display: "flex",
    gap: "1%",
    color: "#484759",
    fontSize: "12px",
  },
  asterisk: {
    color: "red"
  },
  nameinputs: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "7px"
  },
  bottomdialogbuttons: {
    marginTop: "3%",
    display: "flex",
    justifyContent: "space-between",
  },
  addmemberconfirm: {
    fontFamily: "Poppins, sans-serif",
      fontSize: "14px",
      height: "40px",
      display: "flex",
      alignSelf: "center",
      backgroundColor: "#49C792",
      color: "#FFFFFF",
      textTransform: "none",
      width: "45%"
  },
  cancelconfirm: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    height: "40px",
    display: "flex",
    alignSelf: "center",
    border: "1px solid #49C792",
    backgroundColor: "white",
    color: "#49C792",
    textTransform: "none",
    width: "45%"
  },
  inputs: {
    width: "100%",
    "&::placeholder": {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 100,
      color:'#000000'
    },
    "& .MuiOutlinedInput-root": {
      height: "40px",
      width: "100%",
      borderRadius: "4px",
      overflow: "hidden",
      backgroundColor: "#fff",
      border: "1px solid #ebebeb",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#b0b0b0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3f51b5",
    },
  },
  dialoground: {
    cursor: "pointer",
    position: "absolute",
    right: 430, 
    top: 8,
    backgroundColor: "white",
    zIndex: 1301,
    padding: "10px",
    fontSize: "25px",
    borderRadius: "50px"
  },
  bottomdialogbuttonsfilter: {
    display: "flex",
    justifyContent: "space-between",
  },
  allinputfilter: {
    width: "85%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    height: "88%"
  },
  overallperform: {
    fontSize: "12px",
    color: "#484759",
    marginTop: "5%"
  },
  performancetypes: {
    display: "flex",
    flexDirection: "column",
    gap: "13px",
  },
  eachperform: {
    gap: "13px",
    display: "flex"
  },
  perform: {
    border: "1px solid #EBEBEB",
    backgroundColor: "#FFFFFF",
    fontSize: "14px",
    color: "#353448",
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
    // padding: "1%"
  },
  performclick: {
    border: "1px solid #49C792",
    backgroundColor: "#EEFBF6",
    fontSize: "14px",
    color: "#353448",
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
  },
  filtermain : {
    height: "100%",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-evenly"
    gap: "20px"
  },
  roletitle: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  searchicon: {
    position: "absolute",
  left: "10px",
  width: "20px",
  height: "20px",
  color: "#888888",
  },
  inputsvaluefonts: {
    fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
  },
  inputsselect: {
    height: "40px",
            fontSize: "14px",
            fontFamily: "Poppins, sans-serif",
            color: "black",
            ".MuiSvgIcon-root": {
              color: "#091B29",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E4E8EE",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E4E8EE",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E4E8EE",
            },
  },
  items: {
    fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
  },
  sel:{
    color:'gray',
  },

 
  
}



export default HedStyle


















































