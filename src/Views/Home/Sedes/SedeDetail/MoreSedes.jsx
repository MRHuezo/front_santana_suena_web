import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axiosClient from "../../../../Config/axios";
import { MainContext } from "../../../../Context/MainCtx";
import { handlerErrors } from "../../../../Config/errors";
import { useNavigate } from "react-router";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const initial_query_state = {
  data: undefined,
  loading: false,
  error: undefined,
};

export default function MoreSedes({ id_name }) {
  const [value, setValue] = React.useState(0);
  const [sedes, setSedes] = React.useState(initial_query_state);
  const { snackMessage } = React.useContext(MainContext);
  const navigate = useNavigate();
  const { data, loading, error } = sedes;

  React.useEffect(() => {
    const getSedes = async () => {
      await axiosClient
        .get("/sede/consultarSedes")
        .then((res) => {
          const SEDES = res.data.sedes.filter((res) => !res.main);
          SEDES.forEach((sede, index) => {
            if (sede.id_name === id_name) setValue(index);
          });
          setSedes((sedes) => ({
            ...sedes,
            data: SEDES,
            loading: false,
          }));
        })
        .catch((error) => {
          setSedes((sedes) => ({ ...sedes, error, loading: false }));
          console.log(error);
          snackMessage({
            message: handlerErrors(error, "GET"),
            variant: "error",
          });
        });
    };
    getSedes();
  }, [setSedes, snackMessage]);

  if (loading) {
    return null;
  }
  if (error || !data) {
    console.log(error);
    return null;
  }

  const handleChange = (event, newValue) => {
    const toRedirect = data.filter((_, index) => index === newValue);
    navigate(`/sede/${toRedirect[0].id_name}`);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", position: "sticky", top: 38 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="inherit"
        indicatorColor="secondary"
      >
        {data.map((sede, index) => (
          <Tab key={sede._id} label={sede.place} {...a11yProps(index)} />
        ))}
      </Tabs>
    </Box>
  );
}
