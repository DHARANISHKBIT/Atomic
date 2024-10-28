const Welstyle = {
    width: '90%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    padding: '2% 5%',
    atomic:{
        height:'29px',
        width:'149px',
        marginTop:'19px'
        
  },
  type: {
    color: '#353448',
    fontSize: '20px', 
    fontWeight:'600',
    marginTop:'16px'    
  },
  para:{
      fontSize:'14px',
      color:'#71707E',
      marginTop:'10px',
      width:'80%'
      
  },
  allinput:{
    height:'45%',
    // backgroundColor:'red',
    display:'flex',
    // marginTop:'20px',
    flexDirection:'column',
    justifyContent:'space-evenly',
    gap:'-5px'

  },
  entermail:{
    width:'100%',
    height:'35%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
        // backgroundColor:'red'
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

forget:{
    width:'100%',
    justifyContent:'end',
    display:'flex',
    fontSize:'14px',
    color:'#353448',
    fontWeight:'600',
    textDecoration:'underline'
},
muibox:{
    width:'100%',
    height:'10%',
    marginTop:'10px'
  },
  };
  
  export default Welstyle;
  