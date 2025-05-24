import React, { useRef } from 'react';
import { Box, TextField, Button, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InputError, Text2 } from '@/theme/textStyles';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { publicKey, serviceId, templateId } from '@/shared/utils/emailJS';

const validationSchema = Yup.object({
  name: Yup.string().required('Requerido'),
  email: Yup.string().email('Correo inválido').required('Requerido'),
  phone: Yup.string().required('Requerido'),
  company: Yup.string(),
  message: Yup.string().required('Por favor, escriba un mensaje'),
});

interface ContactFormProps {
  sx?: object;
}

export const ContactForm: React.FC<ContactFormProps> = ({ sx = {} }) => {
  const theme = useTheme();
  const { palette } = theme;

  const formRef = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      if (!formRef.current) return;
      emailjs
        .sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey,
        )
        .then(() => {
          toast.success('Mensaje enviado con éxito')
          resetForm();
        })
        .catch(() => {
          toast.error('Error al enviar el mensaje')
          console.log('Error al enviar el mensaje', values);
        })
        .finally(() => setSubmitting(false));
    },
  });

  return (
    <Box id="contact-form" sx={{ color: 'white', ...sx }}>
      <Box 
        ref={formRef}
        component="form" 
        onSubmit={formik.handleSubmit} 
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}
      >
        <TextField
          fullWidth
          label="Nombre y Apellido"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          // helperText={formik.touched.name && formik.errors.name}
          sx={{backgroundColor: 'white', borderRadius: 1 }}
        />
        <InputError sx={{ mb: 2 }}>
          {formik.touched.name && formik.errors.name}
        </InputError>
        <TextField
          fullWidth
          label="Correo Electrónico"
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          sx={{ backgroundColor: 'white', borderRadius: 1 }}
        />
        <InputError sx={{ mb: 2 }}>
          {formik.touched.email && formik.errors.email}
        </InputError>
        <TextField
          fullWidth
          label="Teléfono"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          sx={{ backgroundColor: 'white', borderRadius: 1 }}
        />
        <InputError sx={{ mb: 2 }}>
          {formik.touched.phone && formik.errors.phone}
        </InputError>
        <TextField
          fullWidth
          label="Empresa"
          id="company"
          name="company"
          value={formik.values.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.company && Boolean(formik.errors.company)}
          sx={{ backgroundColor: 'white', borderRadius: 1 }}
        />
        <InputError sx={{ mb: 2 }}>
          {formik.touched.company && formik.errors.company}
        </InputError>
        <TextField
          fullWidth
          label="Mensaje"
          multiline
          rows={6}
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          sx={{ backgroundColor: 'white', borderRadius: 1 }}
        />
        <InputError sx={{ mb: 2 }}>
          {formik.touched.message && formik.errors.message}
        </InputError>
        <Button 
          type="submit" 
          disabled={formik.isSubmitting}
          sx={{
            width: "50%",
            backgroundColor: palette.secondary.dark,
            color: palette.grey[50],
            "&:hover": {
              color: palette.grey[900],
              backgroundColor: palette.secondary.main,
              transform: "translateY(-3px)",
              transition: "all 0.3s",
            },
          }}
        >
          <Text2 sx={{ 
            color: "inherit",
            textTransform: "uppercase",
          }}>
            Enviar Mensaje
          </Text2>
        </Button>
      </Box>
    </Box>
  );
};