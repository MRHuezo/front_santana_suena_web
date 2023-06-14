import React from "react";
import { Search } from "@mui/icons-material";
import { InputAdornment, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDebounce } from "use-debounce";

export default function SearchCompetitor({
  setCompetitorsDinamic,
  competitors,
}) {
  const [value, setValue] = React.useState("");
  const [search] = useDebounce(value, 200);

  const handleChange = (value) => {
    setValue(value);
  };

  React.useEffect(() => {
    if (!search) {
      setCompetitorsDinamic(competitors);
      return;
    }
    const results = competitors.filter(
      (res) =>
        res.name.toLowerCase().includes(search.toLowerCase()) ||
        res.name_song.toLowerCase().includes(search.toLowerCase())
    );
    setCompetitorsDinamic(results);
  }, [search, competitors, setCompetitorsDinamic]);

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
      <Paper sx={{ backgroundColor: "rgb(255,255,255,0.4)" }}>
        <TextField
        size="small"
          variant="outlined"
          placeholder="Busca un participante"
          sx={{ width: { xs: 350, md: 500 } }}
          onChange={(e) => handleChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );
}
