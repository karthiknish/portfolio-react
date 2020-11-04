import React from "react";
import { Box, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import windowSize from "react-window-size";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
function About(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      p={2}
      flex={1}
      style={{
        width: "100vw",
      }}
      item
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        whileHover={{ y: 2 }}
        style={{ width: "90%" }}
      >
        <Typography variant="h3" style={{ color: "#fff" }}>
          About
        </Typography>
        <br />
      </motion.div>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        style={{ width: "90vw" }}
      >
        <Typography style={{ color: "#fff", fontFamily: "Itim" }}>
          Started as a lamp stack website developer my path moved towards Mern
          stack which is currently a industrial standard in websites such as
          facebook,apple etc
          <br /> <br />
          Later with the boom of data analytics I was intrigued by the data
          modelling and machine learning concepts and went on to learn python
          along with it
        </Typography>
      </motion.div>
      <br />
      <Typography variant="h6" style={{ color: "#fff" }}>
        My python roadmap
      </Typography>
      <iframe
        title="python"
        width={matches ? props.windowWidth / 2 : props.windowWidth - 60}
        height={props.windowHeight / 3}
        frameBorder="0"
        src="https://www.mindmeister.com/maps/public_map_shell/1679148552/python-core-concepts?width=600&height=400&z=auto&presentation=1"
        scrolling="no"
        style={{ overflow: "hidden", marginBottom: "5px" }}
      >
        Your browser is not able to display frames. Please visit{" "}
        <a
          rel="noopener noreferrer"
          href="https://www.mindmeister.com/1679148552/python-core-concepts"
          target="_blank"
        >
          Python Core Concepts
        </a>
        on MindMeister.
      </iframe>
      <div className="mb-5">
        <a
          rel="noopener noreferrer"
          href="https://www.mindmeister.com/1679148552/python-core-concepts"
          target="_blank"
        >
          <p style={{ color: "grey" }}>Full view</p>
        </a>
      </div>
      <Typography variant="h6" style={{ color: "#fff" }}>
        My Javascript Roadmap
      </Typography>
      <iframe
        title="react"
        width={matches ? props.windowWidth / 2 : props.windowWidth - 60}
        height={props.windowHeight / 3}
        frameBorder="0"
        src="https://www.mindmeister.com/maps/public_map_shell/1679156196/react-js?width=600&height=400&z=auto&presentation=1"
        scrolling="no"
        style={{ overflow: "hidden", marginBottom: "5px" }}
      >
        Your browser is not able to display frames. Please visit{" "}
        <a
          rel="noopener noreferrer"
          href="https://www.mindmeister.com/1679156196/react-js"
          target="_blank"
        >
          React JS
        </a>
        on MindMeister.
      </iframe>
      <div className="mb-5">
        <a
          rel="noopener noreferrer"
          href="https://www.mindmeister.com/1679156196/react-js"
          target="_blank"
        >
          <p style={{ color: "grey" }}>Full view</p>
        </a>
      </div>
    </Box>
  );
}

export default windowSize(About);
