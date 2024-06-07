
import Post_Participante from "../models/Post_Participante.js";
import Get_Participantes from "../models/Get_Participantes.js";
import Put_Participante from "../models/Put_Participante.js";

// import Get_Usuarios from "../models/Get_Usuarios.js";
// import Delete_Usuario from "../models/Delete_Usuario.js";
// import Put_Usuario from "../models/Put_Usuario.js";

  export const postParticipante = async (req, res) => {
    try {
        const postData = req.body;
        const insertData= await Post_Participante( postData);
      
       res.status(200).json({estado:'OK', insert: insertData.rows});
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }
}

export const getParticipantes = async (req, res) => {
  try {
      const getData = await Get_Participantes();
      console.log(getData, 'GET DATAAAAAA')
      res.status(200).json({result: getData.rows});
  } catch (error) {
      res.status(500).json({ error: "Error al obtener los usuarios" });
  }
}

// export const deleteUsuario = async (req, res) => {
//   try {
//        const id  = req.query.id;
//        const response = await Delete_Usuario(id);
//        res.status(200).send(response.rows);
//    } catch (error) {
//        res.status(500).json({ error: "Error al borrar usuario" });
//    }
// }

export const putParticipante = async (req, res) => {
   
  try {
     // console.log("Salid req", req)
  const {id}  = req.query;
  console.log(id)
  const { nombre, anos_experiencia, especialidad } = req.body;
console.log(nombre, anos_experiencia, especialidad)
  const putData = await Put_Participante({id, nombre, anos_experiencia, especialidad});

  res.status(200).send(putData.rows);   
} catch (error) {
  res.status(500).json({ error: "Error al actualizar el usuario" });
}
}

