import { useState } from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const navigate = useNavigate();

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length === 0) setError((prev) => ({ ...prev, name: true }));
    else setError((prev) => ({ ...prev, name: false }));

    if (phone.length === 0) setError((prev) => ({ ...prev, phone: true }));
    else setError((prev) => ({ ...prev, phone: false }));

    if (email.length === 0) setError((prev) => ({ ...prev, email: true }));
    else setError((prev) => ({ ...prev, email: false }));

    for (const val of Object.values(error)) if (val) return;

    console.log("Tests passed");

    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);

    navigate("/second-page");
  };

  return (
    <Container
      sx={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="sm"
    >
      <Stack
        component={"form"}
        spacing={3}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          fullWidth
          required
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
          error={error.name}
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
          error={error.phone}
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
          error={error.email}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </Container>
  );
};

export default ContactPage;
