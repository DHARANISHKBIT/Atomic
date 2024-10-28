import zIndex from "@mui/material/styles/zIndex";
import { borderBottom, borderLeft, borderRadius, color, display, fontSize, fontWeight, height, margin, textTransform, width } from "@mui/system";

const Mainstyle = {
  paper:{ 
    width: "96%",
    height:'96%',
    padding: "0% 1%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #EBEBEB",
    borderRadius: "4px",
    position:'relative'
  },
  
  table: {
    width: '100%',
    overflowX: 'auto',
    scrollbarWidth: 'none',
  },
  header: {
    backgroundColor: '#F5F5F5',
    borderBottom: "1px solid #EBEBEB",
    color: '#353448',
    fontSize: '18px',
  },
  fullpage: {
    height: '102%',
    width: '100%',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    // backgroundColor:'red'
  },
  pageRow: {
    height: '8%',
    width: '100%',
    borderBottom:'none'
  },
  avna: {
    display: 'flex',
    gap: '5px',
    alignItems: "center",
    borderBottom:'none',
  },
  desi:{
    borderBottom:'none',
    fontSize:'16px'
  },
  dep:{
    borderBottom:'none',
     fontSize:'16px'
  },
  ign:{
    borderBottom:'none',
     fontSize:'16px'
  },
  c:{
    borderBottom:'none',
     fontSize:'16px'
  },
  role:{
    borderBottom:'none',
     fontSize:'16px'
  },

chart:{
height:"10px",
width:'70px',
marginLeft:'40px',
marginBottom:'20px',
borderBottom:'none',
},


img:{
width:'24px',
height:'20px',
display:'flex'
},
  nname: {
    fontSize: '16px',
    fontWeight: '500',
  },
  avatar: {
    height: '32px',
    width: '32px',
  },
  columnStyles: {
    width: '150px',
    fontSize: '16px',
  },
 
  si: {
    width: "24px",
    height: '24px',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  per: {
    width: "12.5%",
    fontSize: '16px',
    padding: '0% 2%',
  },
  more: {
    color: "#49C792",
    marginLeft: '5px',
  },









  tog:{
    height:'20px',
    marginBottom:'15px',
    display:'flex'
   
  },


  action:{
    position:'absolute',
    top:'8.5%',
    right:'0%',
    height:'83.5%',
    width:'15%',
    backgroundColor:'white',
    borderLeft:'1px solid #EBEBEB'
  },
  heada:{
    position:'absolute',
    top:'0%',
    right:'0%',
    height:'8.5%',
    width:'15%',
    backgroundColor:'red',
    zIndex:'10',
    marginLeft:'10px'
  },
  a:{
    height:'100%',
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'20px',
    fontWeight:'600',
    backgroundColor:'white',
    borderBottom:'1px solid #EBEBEB'
      // marginLeft:'20px'
  },
  con:{
    // marginTop:"30px",
    marginLeft:'20px',
    height:'15%',
    textTransform:'none',
    width:'100%',
    display:'flex',
    alignItems:'center'
  },
  ic:{
    width:'28px',
    height:'28px',
    borderRadius:'20px',
    backgroundColor:'#EBEBEB',
    color:'#49C792',
    fontSize:'15px',
  },
  ac:{
    marginRight:'280px'
  }
 
};


export default Mainstyle;
