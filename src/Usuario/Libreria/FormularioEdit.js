import React from "react";
import { Form, Input, Button } from "react-bootstrap";
import axiosInstance from "../../util/axiosInstance";
import Swal from "sweetalert2";



const FormularioEdit = ({ libro, setVisible, fetchLibrosAll }) => {
  const { nombre, autor, genero, descripcion, imagen, _id } = libro;
  const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log(values);

//     const { nombre, autor, genero, descripcion, imagen } = values;

//     const Nombre = nombre;
//     const Autor = autor;
//     const Genero = genero;
//     const Descripcion = descripcion;
//     const Imagen = imagen;
//     //Creo el libro actualizado
//     const newLibro = { Nombre, Autor, Genero, Descripcion, Imagen, _id };
//     console.log(newLibro);
//     updateLibro(newLibro);

//     setVisible(false);
//   };

  //enviar form actualizado
//   const updateLibro = async (libro) => {
//     const resultado = await axiosInstance.put("/libros", libro);

//     Swal.fire({
//       icon: "success",
//       title: resultado.data.message,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     fetchLibrosAll();
//   };

  return (
    <Form
    //   onFinish={onFinish}
    //   form={form}
    //   initialValues={{
    //     nombre: nombre,
    //     autor: autor,
    //     descripcion: descripcion,
    //     genero: genero,
    //     imagen: imagen,
    //   }}
    >
      <Form.Item
        // name="nombre"
        // rules={[{ required: true, message: "Libro requerido" }]}
      >
        <Input name="libro" placeholder="Nombre libro" />
      </Form.Item>
      <Form.Item
        name="autor"
        rules={[{ required: true, message: "Autor requerido" }]}
      >
        <Input name="autor" placeholder="Autor" />
      </Form.Item>
      <Form.Item name="descripcion">
        <Input name="descripcion" />
      </Form.Item>
      <Form.Item
        name="genero"
        rules={[{ required: true, message: "Genero requerido" }]}
      >
        <Input name="genero" placeholder="Genero" />
      </Form.Item>
      <Form.Item name="imagen">
        <Input name="imagen" placeholder="Imagen" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default FormularioEdit;