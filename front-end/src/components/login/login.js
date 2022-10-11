import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from "../../store/user/user-action";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(email, password);

    const login = async() => {
        let user = {email, password};
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(user)
        });
        result = await result.json();
        dispatch(setCurrentUser(result));
        navigate('/');
    }

    return (
        <>
            <div className="container w-50 my-5">
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={login}>Submit</button>
            </div>
        </>
    );
}

export default Login;