import pool from "../config/config.js";

const Post_Participante = async (usuario) => {
    console.log(usuario, 'USUARIO')
    let client;
    const values = Object.values(usuario);
    console.log(values, 'VALORES')
    const consulta = {
        name: 'insert-Usuario',
        text:  'INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2,$3, $4, $5, $6, $7 ) RETURNING *',
        values: values
    }
    try {
        client = await pool.connect();
        const result = await client.query(consulta);
   console.log(result)
        return result;
    } catch (error) {
        return console.error('Error al insertar usuario', error.code, error.stack, error.message);
    } finally {
        if (client) {
            client.release();
        }
    }
}
export default Post_Participante;