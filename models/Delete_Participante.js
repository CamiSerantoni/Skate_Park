import pool from "../config/config.js";
const Delete_Participante = async (id) => {
  
let client
try {
    client = await pool.connect();
    const result = await client.query('DELETE FROM skaters WHERE id = $1', [id]);
    return result
} catch (error) {
    return console.error('Error al eliminar usuario', error.stack);
} finally {
    if (client) {
        client.release();
}

    
}
}

export default Delete_Participante;