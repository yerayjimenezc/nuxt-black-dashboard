export default async function ({ redirect }) {
    // Si el usuario no ha iniciado sesión, redirigir a la página de inicio de sesión
    if (!localStorage.getItem('token')) {
        return redirect('/login')
    }
}