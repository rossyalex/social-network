import { collection, addDoc } from "firebase/firestore";

function save() {
    try {
        const docRef = await addDoc(collection(db, "usuarios"), {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            repeatpassword: document.getElementById("repeatpassword").value,
        });
            .then((docRef) => {
                alert("Registro exitoso");
            })
    }   .catch ((error) => {
        alert("Error en el registro");
    });

}

