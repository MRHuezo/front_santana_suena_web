import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Delete, Edit } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";

const ItemPublicacion = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={data} subheader="September 14, 2023" />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          color="inherit"
          fullWidth
          startIcon={<Edit />}
          aria-label="add to favorites"
        >
          Editar
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          color="error"
          fullWidth
          startIcon={<Delete />}
          aria-label="share"
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemPublicacion;
