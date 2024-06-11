import pool from "../config/config.js";
const Get_Participantes = async() => {
    let client
    const consulta = {
        name: 'get-Participantes',
        text: 'SELECT * FROM skaters',
    }
    try {
        client = await pool.connect();
        const resultado = await client.query(consulta);
        return resultado;
    } catch (error) {
        return console.error('Error al obtener participantes', error.code, error.stack, error.message);
    } finally {
        if (client) {
            client.release();
        }
    }
}
export default Get_Participantes;