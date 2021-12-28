import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Redirect from "../../components/Redirect";

export default function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSubmit = async event => {
        event.preventDefault();
        await login(event.target.username.value)
            ? navigate("/repository")
            : alert("Usuário inválido");

    };


    return (
        <div>
            <Redirect />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Github username</label>
                <input type="text" name="username" />
                <button>Submit</button>
            </form>
        </div>
    );
}