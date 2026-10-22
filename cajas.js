// CAJAS.JS - MANAGER DE MODULOS
console.log('[cajas.js] Manager activo');

function cargarModulo(nombre){
  var s = document.createElement('script');
  s.src = './' + nombre + '?v=' + Date.now();
  s.onload = () => console.log('[cajas.js] ' + nombre + ' cargado');
  s.onerror = () => console.log('[cajas.js] ' + nombre + ' no encontrado, ok');
  document.head.appendChild(s);
}

// ACA VAMOS AGREGANDO LOS MODULOS NUEVOS
// Descomentá cuando los crees:

// cargarModulo('personaje.js');
// cargarModulo('equipamiento.js');
// cargarModulo('inventario.js');
// cargarModulo('combate.js');
