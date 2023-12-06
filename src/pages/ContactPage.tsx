import { useState } from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container maxWidth="xs">
      <Stack component={"form"} noValidate spacing={3}>
        <TextField
          fullWidth
          required
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <TextField
          fullWidth
          required
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(event.target.value)
          }
        />
        <TextField
          fullWidth
          required
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
      </Stack>
    </Container>
  );
};

export default ContactPage;
