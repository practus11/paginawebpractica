function mostrarBienvenida() {
    ocultarSecciones();
    document.getElementById('bienvenida').style.display = 'block';
  }
  
  function mostrarFormulario() {
    ocultarSecciones();
    document.getElementById('formulario').style.display = 'block';
  }
  
  function mostrarAlumnos() {
    ocultarSecciones();
    document.getElementById('alumnos').style.display = 'block';
  }
  
  function ocultarSecciones() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('alumnos').style.display = 'none';
  }
  // Arreglo para almacenar los alumnos registrados
  const alumnosRegistrados = [];

  document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;

    // Agregar alumno al arreglo de alumnosRegistrados
    alumnosRegistrados.push({ nombre, apellido, email });

    // Mostrar la lista actualizada de alumnos
    mostrarAlumnos();
  });

  function mostrarAlumnos() {
    ocultarSecciones();
    const listaAlumnos = document.getElementById('listaAlumnos');
    listaAlumnos.innerHTML = '';

    // Mostrar cada alumno en la lista
    alumnosRegistrados.forEach(alumno => {
      const listItem = document.createElement('li');
      listItem.textContent = `Nombre: ${alumno.nombre}, Apellido: ${alumno.apellido}, Email: ${alumno.email}`;
      listaAlumnos.appendChild(listItem);
    });

    document.getElementById('alumnos').style.display = 'block';
  }

  function ocultarSecciones() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('alumnos').style.display = 'none';
  }
