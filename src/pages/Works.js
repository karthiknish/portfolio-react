import { Box, Typography } from "@material-ui/core";
import windowSize from "react-window-size";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";

function Works(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      style={{
        marginLeft: "10px",
        marginRight: "10px",
        width: "100vw",
      }}
      flex={1}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        whileHover={{ y: 5 }}
      >
        <Typography variant="h3" style={{ color: "#fff", cursor: "pointer" }}>
          Works
        </Typography>
      </motion.div>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        whileHover={{ x: 5 }}
      >
        <Typography variant="h5" style={{ color: "#fff" }}>
          React projects
        </Typography>
      </motion.div>
      <Typography style={{ color: "#fff" }}>Netflix clone</Typography>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://netflix-clone-react-main.vercel.app/"
      >
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.05 }}
          width={matches ? props.windowWidth / 2 : props.windowWidth - 20}
          src="https://github.com/karthiknish/netflix-clone/raw/master/images/Capture1.PNG?raw=true"
        />
      </a>
      <Typography style={{ color: "#fff" }}>Amazon clone</Typography>
      <a
        rel="noopener noreferrer"
        href="https://ama2on-clone-react.web.app/"
        target="_blank"
      >
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.05 }}
          width={matches ? props.windowWidth / 2 : props.windowWidth - 20}
          src="https://github.com/karthiknish/amazon-clone-react/raw/main/images/Capture2.PNG?raw=true"
        />
      </a>
      <Typography style={{ color: "#fff" }}>Zoom clone</Typography>
      <a
        rel="noopener noreferrer"
        href="https://zoom-clone-js.herokuapp.com/"
        target="_blank"
      >
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.05 }}
          width={matches ? props.windowWidth / 2 : props.windowWidth - 20}
          src="https://github.com/karthiknish/zoom-clone-js/raw/main/images/Capture.PNG?raw=true"
        />
      </a>
      <Typography variant="h5" style={{ color: "#fff" }}>
        Python projects
      </Typography>
      <Typography style={{ color: "#fff" }}>Ipl Data analysis</Typography>
      <a
        rel="noopener noreferrer"
        href="https://github.com/karthiknish/ipldata-python"
        target="_blank"
      >
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.05 }}
          width={matches ? props.windowWidth / 2 : props.windowWidth - 20}
          src="https://github.com/karthiknish/ipldata-python/raw/main/images/graph2.PNG?raw=true"
        />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/karthiknish/stock-prediction-netflix-python"
        target="_blank"
      >
        <Typography style={{ color: "#fff" }}>Stock Prediction</Typography>
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.05 }}
          width={matches ? props.windowWidth / 2 : props.windowWidth - 20}
          src="https://github.com/karthiknish/stock-prediction-netflix-python/raw/master/images/graph3.PNG?raw=true"
        />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/karthiknish/spotify-nowplaying-python"
        target="_blank"
      >
        <Typography style={{ color: "#fff" }}>
          Spotify now playing songs
        </Typography>
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.05 }}
          width={matches ? props.windowWidth / 2 : props.windowWidth - 30}
          src="https://camo.githubusercontent.com/e369d63c2a38306d0be790614b7302d400b327fe/68747470733a2f2f73706f746966792d6e6f77706c6179696e672d707974686f6e2e76657263656c2e6170702f6170692f73706f746966792d706c6179696e67"
        />
      </a>
    </Box>
  );
}

export default windowSize(Works);
