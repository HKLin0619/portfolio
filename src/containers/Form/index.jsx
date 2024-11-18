import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidationSchema } from "./settings";

function FormContainer() {
  const form = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onHandleSubmit = (data) => {
    const { name, email, phone, company, message } = data;

    const encodedMessage = encodeURIComponent(
      `Company: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nHi, I am ${name}.\n ${message}`
    );

    const whatsappURL = `https://wa.me/60123456789?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <Stack direction="column" spacing={2}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
              required
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              required
              {...field}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              label="Phone"
              fullWidth
              variant="outlined"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              required
              {...field}
            />
          )}
        />
        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <TextField
              label="Company"
              fullWidth
              variant="outlined"
              error={!!errors.company}
              helperText={errors.company?.message}
              required
              {...field}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              error={!!errors.message}
              helperText={errors.message?.message}
              required
              {...field}
            />
          )}
        />

        <Button variant="contained" type="submit" sx={{ bgcolor: "black" }}>
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default FormContainer;
