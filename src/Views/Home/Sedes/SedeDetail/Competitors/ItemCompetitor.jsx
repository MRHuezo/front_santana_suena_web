import * as React from "react";
import { Typography, Box, Badge } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
import { withStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
   selectedPaper: {
    background: 'transparent',
    color: 'rgba(201, 247, 0, 1)',
    padding: 2,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  unselectedPaper: {
    padding: 2,
    border: '2px solid #E0E0E0',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  starIcon: {
    color: '#FFC107',
  },
  
}));

export default function ItemCompetitor({ data }) {
  const navigate = useNavigate();
  const status = data.status;
  const name_array = data.name.split(" ");
  let name = `${name_array[0]}`;
  let id_name = `${name_array[0]}`.toLocaleLowerCase();

  if (name_array.length > 1) {
    name = `${name_array[0]} ${name_array[1]}`;
    id_name = `${name_array[0]}-${name_array[1]}`.toLocaleLowerCase();
  }


  return (
    <Box my={3} sx={{ cursor: "pointer" }} onClick={() => navigate(`/participante/${id_name}`)}>
        <Box direction="row" alignItems="center" spacing={4}>
          
          <Avatar sx={{ width: 160, height: 160 }} src={data.photo} >
            <Box sx={{ width: 160, height: 160,   backgroundColor: "red",  }}/>
          </Avatar>
          
        </Box>
      <Typography style={{ fontSize: 20 }} align="center" noWrap>
        <strong>{name}</strong>
      </Typography>
      <EstatusComp data={data}/>
    </Box>
  );
}

const EstatusComp = ({data}) => {
  const classes = useStyles();
  const StyledBadge = withStyles((theme) => ({
    badge: {
      color: ({ props }) => props.color,
      background: ({ props }) => props.color,
     
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }))(Badge);
  const styleProps = {
    color: "#44b700",
  };
  let status = data.status;
  let returnObj = <div/>;
 
  if(status === "SELECCIONADO"){
    
   returnObj =
      <Paper  sx={{backgroundColor:"transparent", display:"flex", alignItems:"center", justifyContent:"center"}}>
       <StyledBadge
            overlap="circular"
            props={styleProps}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            variant="dot"
          />
       <Typography variant="h6" component="h5" color="white" ml={2}>
        {"FINALISTA"}
      </Typography>
     
      
      </Paper>
    
  }
  return returnObj;
}