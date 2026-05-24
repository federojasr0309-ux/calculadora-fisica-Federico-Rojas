// Función auxiliar para validar entradas vacías
function validarCampos(...valores) {
    for (let valor of valores) {
        if (valor === "" || isNaN(valor)) {
            alert("Por favor, complete todos los campos con números válidos.");
            return false;
        }
    }
    return true;
}

// 1. Velocidad
function calcularVelocidad() {
    let d = document.getElementById("v_d").value;
    let t = document.getElementById("v_t").value;
    if (!validarCampos(d, t)) return;
    
    t = parseFloat(t);
    if (t === 0) {
        alert("El tiempo no puede ser cero (división por cero).");
        return;
    }
    let v = parseFloat(d) / t;
    document.getElementById("res_velocidad").innerText = `Resultado: v = ${v.toFixed(2)} m/s`;
}

// 2. Aceleración
function calcularAceleracion() {
    let dv = document.getElementById("a_dv").value;
    let dt = document.getElementById("a_dt").value;
    if (!validarCampos(dv, dt)) return;
    
    dt = parseFloat(dt);
    if (dt === 0) {
        alert("El cambio de tiempo no puede ser cero.");
        return;
    }
    let a = parseFloat(dv) / dt;
    document.getElementById("res_aceleracion").innerText = `Resultado: a = ${a.toFixed(2)} m/s²`;
}

// 3. Fuerza
function calcularFuerza() {
    let m = document.getElementById("F_m").value;
    let a = document.getElementById("F_a").value;
    if (!validarCampos(m, a)) return;
    
    let F = parseFloat(m) * parseFloat(a);
    document.getElementById("res_fuerza").innerText = `Resultado: F = ${F.toFixed(2)} N`;
}

// 4. Trabajo
function calcularTrabajo() {
    let F = document.getElementById("W_F").value;
    let d = document.getElementById("W_d").value;
    let ang = document.getElementById("W_ang").value;
    if (!validarCampos(F, d, ang)) return;
    
    let rad = parseFloat(ang) * (Math.PI / 180);
    let W = parseFloat(F) * parseFloat(d) * Math.cos(rad);
    document.getElementById("res_trabajo").innerText = `Resultado: W = ${W.toFixed(2)} J`;
}

// 5. Energía Cinética
function calcularCinetica() {
    let m = document.getElementById("K_m").value;
    let v = document.getElementById("K_v").value;
    if (!validarCampos(m, v)) return;
    
    let K = 0.5 * parseFloat(m) * Math.pow(parseFloat(v), 2);
    document.getElementById("res_cinetica").innerText = `Resultado: K = ${K.toFixed(2)} J`;
}

// 6. Energía Potencial Gravitatoria
function calcularPotencial() {
    let m = document.getElementById("U_m").value;
    let h = document.getElementById("U_h").value;
    if (!validarCampos(m, h)) return;
    
    const g = 9.81;
    let U = parseFloat(m) * g * parseFloat(h);
    document.getElementById("res_potencial").innerText = `Resultado: U = ${U.toFixed(2)} J`;
}

// 7. Densidad
function calcularDensidad() {
    let m = document.getElementById("rho_m").value;
    let V = document.getElementById("rho_V").value;
    if (!validarCampos(m, V)) return;
    
    V = parseFloat(V);
    if (V === 0) {
        alert("El volumen no puede ser cero.");
        return;
    }
    let rho = parseFloat(m) / V;
    document.getElementById("res_densidad").innerText = `Resultado: ρ = ${rho.toFixed(2)} kg/m³`;
}

// 8. Presión
function calcularPresion() {
    let F = document.getElementById("P_F").value;
    let A = document.getElementById("P_A").value;
    if (!validarCampos(F, A)) return;
    
    A = parseFloat(A);
    if (A === 0) {
        alert("El área no puede ser cero.");
        return;
    }
    let P = parseFloat(F) / A;
    document.getElementById("res_presion").innerText = `Resultado: P = ${P.toFixed(2)} Pa`;
}

// 9. Carga Eléctrica
function calcularCarga() {
    let I = document.getElementById("q_I").value;
    let t = document.getElementById("q_t").value;
    if (!validarCampos(I, t)) return;
    
    let q = parseFloat(I) * parseFloat(t);
    document.getElementById("res_carga").innerText = `Resultado: q = ${q.toFixed(2)} C`;
}

// 10. Ley de Ohm
function calcularOhm() {
    let I = document.getElementById("Ohm_I").value;
    let R = document.getElementById("Ohm_R").value;
    if (!validarCampos(I, R)) return;
    
    let V = parseFloat(I) * parseFloat(R);
    document.getElementById("res_ohm").innerText = `Resultado: V = ${V.toFixed(2)} V`;
}