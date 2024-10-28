const Forstyle ={
    width: '90%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    padding: '2% 5%',
    atomic:{
        height:'29px',
        width:'149px',
        marginTop:'22px'
        
  },
   
  type: {
    color: '#353448',
    fontSize: '20px', 
    fontWeight:'600',
    marginTop:'22px'    
  },
  para:{
      fontSize:'14px',
      color:'#71707E',
      marginTop:'12px',
      width:'80%'
      
  },
  entermail:{
    width:'100%',
    height:'30%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  },
  smail:{
    fontSize:'12px',
    color:'#262C33',
  },
  inputbox:{
        width: "100%",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 500,
        "& .MuiOutlinedInput-root": {
          height: "40px",
          width: "100%",
          borderRadius: "4px",
          overflow: "hidden",
          backgroundColor: "#fff",
          border: "1px solid #ebebeb",
          marginTop:'5px'
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
        muibox:{
            width:'100%',
            height:'40px',
          },
          allogin:{
            height:'10%',
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:'5px',
            marginTop:'20px'
          },
          al:{
            fontSize:'14px',
            color:'#71707E'
          },
          lo:{
            fontSize:'14px',
            color:'#353448',
            textDecoration:'underline'

          }
}
export default Forstyle