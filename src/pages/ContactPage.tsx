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

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    let nameError = false;
    let phoneError = false;
    let emailError = false;
    
    if (name.length === 0) nameError = true;

    if (phone.length === 0) phoneError = true;

    if (email.length === 0) emailError = true;

    setError({name: nameError, phone: phoneError, email: emailError});

    if (nameError || phoneError || emailError) return;

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
          type="email"
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
          type="phone"
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
