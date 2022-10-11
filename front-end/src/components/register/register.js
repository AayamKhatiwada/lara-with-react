import { useState } from "react";
import { setCurrentUser } from "../../store/user/user-action";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const register = async() => {
        let user = {name, email, phoneno, address, password};
        let result = await fetch("http://127.0.0.1:8000/api/register", {
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
            <div class="container w-50 my-5">
                <div class="mb-3 mt-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="name" class="form-control" id="name" placeholder="Enter name" name="name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div class="mb-3 mt-3">
                    <label for="phoneno" class="form-label">Phone number:</label>
                    <input type="text" class="form-control" id="phoneno" placeholder="Enter Phone Number" name="phoneno" onChange={(e) => setPhoneno(e.target.value)} />
                </div>

                <div class="mb-3 mt-3">
                    <label for="address" class="form-label">Address:</label>
                    <input type="address" class="form-control" id="address" placeholder="Enter address" name="address" onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={register}>Submit</button>
            </div>
        </>
    );
}

export default Register;