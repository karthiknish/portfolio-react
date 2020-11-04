import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import { Grid, Box, Typography, Modal, Grow } from "@material-ui/core";
import { motion } from "framer-motion";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CgMenuMotion } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Router>
      <Grid
        container
        direction={matches ? "row" : "column"}
        style={{
          backgroundColor: "#1D1D1D",
          width: "100vw",
          height: "100vh",
        }}
      >
        {matches ? (
          <>
            <Box
              p={1}
              style={{
                backgroundColor: "#181818",
                zIndex: 10,
              }}
              display="flex"
              flexDirection="column"
            >
              <Link to="/" style={{ overflow: "hidden" }}>
                <motion.div
                  whileHover={{ rotate: 20 }}
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  style={{ overflow: "hidden" }}
                >
                  <Box
                    p={1}
                    style={{ backgroundColor: "red", overflow: "hidden" }}
                  >
                    <Typography
                      style={{ fontFamily: "Oswald", overflow: "hidden" }}
                      variant="h4"
                    >
                      K
                    </Typography>
                  </Box>
                </motion.div>
              </Link>
              <Box mt="50vh" />
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                whileHover={{ y: -10 }}
              >
                <Link to="/about">
                  <Typography
                    style={{ color: "#08FDD8", fontFamily: "Oswald" }}
                  >
                    About
                  </Typography>
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                whileHover={{ y: -10 }}
              >
                <br />
                <Link to="/works">
                  <Typography
                    style={{ color: "#08FDD8", fontFamily: "Oswald" }}
                  >
                    Works
                  </Typography>
                </Link>
              </motion.div>
              <br />
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                whileHover={{ y: -10 }}
              >
                <Link to="/contact">
                  <Typography
                    style={{ color: "#08FDD8", fontFamily: "Oswald" }}
                  >
                    Contact
                  </Typography>
                </Link>
              </motion.div>
            </Box>
          </>
        ) : (
          <Box
            style={{ backgroundColor: "red" }}
            width="100%"
            flexDirection="row"
            display="flex"
          >
            <CgMenuMotion
              onClick={() => setShow(true)}
              style={{ fontSize: "1.5em", padding: "10px" }}
            />

            <Typography
              component={Link}
              to="/"
              style={{
                fontFamily: "Oswald",
                backgroundColor: "white",
                marginLeft: "40%",
                paddingLeft: "10px",
                paddingRight: "10px",
                overflow: "hidden",
              }}
              variant="h4"
            >
              K
            </Typography>

            <Modal
              open={show}
              style={{
                width: "100vw",
                height: "100vh",
                zIndex: 10,

                outline: "none",
              }}
            >
              <Grow in={show} onClose={!show}>
                <Box
                  style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#212121",
                    outline: "none",
                  }}
                >
                  <Box
                    style={{
                      width: "100vw",
                      height: "80vh",
                      outline: "none",
                    }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <motion.div
                      initial={{ x: -100, rotate: 300 }}
                      animate={{ x: 0, rotate: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <IoMdClose
                        onClick={() => setShow(false)}
                        style={{
                          color: "#fdf64a",
                          fontSize: "2em",
                          marginTop: "20px",
                        }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link to="/">
                        <Typography
                          onClick={() => setShow(false)}
                          style={{
                            color: "#08FDD8",
                            fontFamily: "Oswald",
                            fontSize: "1.5em",
                          }}
                        >
                          Home
                        </Typography>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link to="/about">
                        <Typography
                          onClick={() => setShow(false)}
                          style={{
                            color: "#08FDD8",
                            fontFamily: "Oswald",
                            fontSize: "1.5em",
                          }}
                        >
                          About
                        </Typography>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link to="/works">
                        <Typography
                          onClick={() => setShow(false)}
                          style={{
                            color: "#08FDD8",
                            fontFamily: "Oswald",
                            fontSize: "1.5em",
                          }}
                        >
                          Works
                        </Typography>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link to="/contact">
                        <Typography
                          onClick={() => setShow(false)}
                          style={{
                            color: "#08FDD8",
                            fontFamily: "Oswald",
                            fontSize: "1.5em",
                          }}
                        >
                          Contact
                        </Typography>
                      </Link>
                    </motion.div>
                  </Box>
                </Box>
              </Grow>
            </Modal>
          </Box>
        )}

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
