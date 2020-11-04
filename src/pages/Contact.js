import { Box, Typography, Button, TextField } from "@material-ui/core";
import emailjs from "emailjs-com";

import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
function Contact() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [success, setSuccess] = useState("");
  const [sub, setSub] = useState(false);
  const [form, setForm] = useState({
    email: "",
    message: "",
  });
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const { email, message } = form;
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "contact", e.target, "user_R7c0WT8XBvpCcV2ZFIiV6")
      .then((result) => {
        console.log(result.text);
        setSuccess(result.text);
      })
      .catch((error) => console.error(error));
    setSub(true);
    e.target.reset();
  };
  return (
    <Box
      style={{
        height: "100vh",
        overflowX: "hidden",
        marginLeft: "10px",
        marginRight: "10px",
      }}
      flex={1}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        whileHover={{ y: 5 }}
      >
        <Typography variant="h3" style={{ color: "#fff" }}>
          Contact
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {console.log(form)}
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
            fullWidth={matches ? false : true}
            inputProps={{ style: { color: "#fff" } }}
            label="Name"
            InputLabelProps={{ style: { color: "#fff", overflow: "hidden" } }}
            style={{
              border: "none",
              color: "#fff",
              borderBottom: "2px solid white",
              borderRadius: 0,
              outline: "none",
            }}
            id="name"
            type="name"
            name="name"
            onChange={(e) => handleInput(e)}
          />
          <br /> <br />
          <TextField
            fullWidth={matches ? false : true}
            inputProps={{ style: { color: "#fff" } }}
            InputLabelProps={{ style: { color: "#fff", overflow: "hidden" } }}
            label="Email"
            style={{
              border: "none",
              borderBottom: "2px solid white",
              borderRadius: 0,
              outline: "none",
            }}
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleInput(e)}
          />
          <br /> <br />
          <textarea
            rows="4"
            placeholder="Message"
            style={{
              border: "none",
              borderBottom: "1px solid gray",
              borderRadius: 0,
              outline: "none",
              width: `${matches ? "" : "97%"}`,
            }}
            id="message"
            name="message"
            onChange={(e) => handleInput(e)}
          />
          <br />
          <br />
          <Button
            fullWidth={matches ? false : true}
            style={{ color: "#fff", backgroundColor: "#08FDD8" }}
            type="submit"
            mt={3}
            mb={2}
            width="100%"
          >
            Submit
          </Button>
          <Typography style={{ color: "green", marginTop: "10px" }}>
            {sub
              ? success === "OK"
                ? "Thank You for the message"
                : "Something went wrong"
              : ""}
          </Typography>
        </form>
      </motion.div>
    </Box>
  );
}

export default Contact;
