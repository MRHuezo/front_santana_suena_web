import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const BuscarFinalista = () => {
  return (
    <div>
      <TextField
        sx={{ width: {xs: "100%", md: "50%"} }}
        placeholder="Buscar finalista"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default BuscarFinalista;
