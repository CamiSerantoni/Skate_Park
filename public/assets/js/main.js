


if (typeof window === 'object') {
    window.addEventListener('DOMContentLoaded', function () {
    });
        function registrar() {
            console.log('DENTRO DEL REGISTRAR')
            let email = document.getElementById('email');
            let nombre = document.getElementById('nombre');
            let password = document.getElementById('password');
            let password2 = document.getElementById('password2');
            let experiencia = document.getElementById('experiencia');
            let especialidad = document.getElementById('especialidad');
            let file = document.getElementById('fileInput');
            if (!email.value || !nombre.value || !password.value || !password2.value || !experiencia.value || !especialidad.value) {
                alert('Favor, complete todos los campos');
                return;
            }
            if (password.value !== password2.value) {
                alert('Las contraseñas no coinciden');
                return;
            }
            axios.post('skater', {
                email: email.value,
                nombre: nombre.value,
                password: password.value,
                anos_experiencia: experiencia.value,
                especialidad: especialidad.value,
                foto: file.value,
                estado: false
            }).then(response => {//Esto no funciona
                console.log("usuario registrado", response);
                alert('Usuario registrado exitosamente');
                //getData();
            }).catch((error) => {
                console.error(error);
            });
        }





 
}
