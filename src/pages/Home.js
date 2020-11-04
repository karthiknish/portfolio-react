import { motion } from "framer-motion";
import { Box, Typography, Avatar, Button, Fade, Grow } from "@material-ui/core";

import Particles from "react-particles-js";
import Typing from "react-typing-animation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display={`${matches ? "flex" : ""}`}
      p={1}
      style={{ overflowY: "hidden", width: "100vw" }}
      flex={1}
    >
      {matches ? (
        <Particles
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        ""
      )}
      <Box
        width={matches ? 1 / 2 : 1}
        mt={matches ? 20 : 0}
        display="flex"
        flexDirection="column"
      >
        <Fade in={true} timeout={700}>
          <Typography
            align={`${matches ? "left" : "center"}`}
            variant={matches ? "h2" : "h3"}
            style={{
              color: "#fff",
              fontFamily: "Grandstander",
              marginBottom: "10px",
              zIndex: 2,
            }}
          >
            Hi !
            <br /> I'm <span style={{ backgroundColor: "red" }}>K</span>arthik
            Nishanth
          </Typography>
        </Fade>

        <Box width={1} display="flex" justifyContent={matches ? "" : "center"}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Button
              target="_blank"
              size="small"
              style={{ padding: "5px", backgroundColor: "#fff" }}
              href="https:///github.com/karthiknish"
              startIcon={
                <Avatar
                  style={{ width: "30px", height: "30px" }}
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
              }
            >
              <Typography>Github</Typography>
            </Button>
          </motion.div>
          <Box ml={1} />
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              href="https://medium.com/@karthiknish"
              target="_blank"
              size="small"
              startIcon={
                <Avatar
                  style={{ width: "30px", height: "30px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvn-ewxkWcX2BggsqRBqksxgnvgCUSdCtfgw&usqp=CAU"
                />
              }
              style={{ backgroundColor: "#fff", padding: "5px" }}
            >
              <Typography>Medium</Typography>
            </Button>
          </motion.div>
        </Box>
      </Box>
      <Grow in={true}>
        <Box mt={matches ? 20 : 5} width={matches ? 1 / 2 : 1} display="flex">
          <Box
            borderRadius={5}
            width={matches ? 2 / 3 : 3 / 4}
            m={1}
            height={matches ? 1 / 3 : 1 / 2}
            style={{ backgroundColor: "#000", zIndex: 1 }}
          >
            <Box
              borderRadius={3}
              display="flex"
              width={1}
              height={0.2}
              style={{ backgroundColor: "#494949" }}
            >
              <Box ml={1} />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#F7584F",
                  marginTop: "3px",
                  borderRadius: "50%",
                }}
              />
              <Box ml={1} />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#E0B929",
                  borderRadius: "50%",
                  marginTop: "3px",
                }}
              />
              <Box ml={1} />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#4EBC29",
                  borderRadius: "50%",
                  marginTop: "3px",
                }}
              />
            </Box>
            <Box p={1} flex={1}>
              <Typing cursorClassName="cursor" loop={true}>
                <Typography style={{ color: "#fff" }}>
                  MERN stack website developer
                </Typography>
                <Typing.Backspace count={29} />
                <Typography style={{ color: "#fff" }}>
                  Data Science and ML enthusiast
                </Typography>
                <Typing.Backspace delay={500} count={30} />
              </Typing>
            </Box>
          </Box>
        </Box>
      </Grow>
    </Box>
  );
}

export default Home;
