import pool from "../config/config.js";

const Put_Participante = async (usuario) => { 

let client

const values = Object.values(usuario)
const consulta = {
    text: "UPDATE skaters SET nombre = $2, anos_experiencia = $3, especialidad = $4 WHERE id = $1 returning *",
    values
}
try {
    client = await pool.connect();
    const result = await client.query(consulta);
    return result.rows
} catch (error) {
    return console.error('Error al editar usuario', error.stack);
} finally {
    if (client) {
        client.release();
    }
}
}


export default Put_Participante;