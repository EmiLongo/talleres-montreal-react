import React from 'react';
import { Box, TextField, Button, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InputError, SubtitleXL, Text2, TitleH1, TitleXL } from '@/theme/textStyles';

const validationSchema = Yup.object({
  name: Yup.string().required('Requerido'),
  email: Yup.string().email('Correo inválido').required('Requerido'),
  phone: Yup.string().required('Requerido'),
  company: Yup.string(),
  message: Yup.string().required('Por favor, escriba un mensaje'),
});

export const Contact: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Formulario enviado:', values);
      // Aquí podrías enviar los datos a una API
    },
  });

  return (
    <Box id="contacto" sx={{ py: 10, backgroundColor: 'primary.main', color: 'white' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        {/* Título de sección */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <TitleXL
            id="contact"
            sx={{
              color: palette.primary[100],
              marginBottom: "1rem",
            }}
          >
            Contacto
          </TitleXL>

          <SubtitleXL sx={{ color: palette.primary[100], }}>
            Estamos a su disposición para brindarle el mejor servicio.
          </SubtitleXL>
        </Box>

        {/* Contenido: info + formulario */}
        <Box>
          {/* Información de contacto */}
          <Box>
            <TitleH1 sx={{ color: palette.primary[100], }}>
              Información de Contacto
            </TitleH1>
            <Box sx={{ mb: 2, }}>
              <Text2 sx={{color: palette.primary[100]}}>📞 341-3389977</Text2>
              <Text2 sx={{color: palette.primary[100]}}>📞 3476-619576</Text2>
              <Text2 sx={{color: palette.primary[100]}}>📞 3476-224447</Text2>
              <Text2 sx={{color: palette.primary[100]}}>✉️ talleresmontrealsrl@gmail.com</Text2>
              <Text2 sx={{color: palette.primary[100]}}>📍 José Márquez 856, San Lorenzo, Santa Fe</Text2>
            </Box>
          </Box>

          {/* Formulario de contacto */}
          <Box>
            <TitleH1 sx={{ color: palette.primary[100], }}>
              Envíenos un Mensaje
            </TitleH1>
            <Box component="form" onSubmit={formik.handleSubmit} noValidate>
              <TextField
                fullWidth
                label="Nombre y Apellido"
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
              <Button type="submit" variant="contained" color="secondary">
                Enviar Mensaje
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
