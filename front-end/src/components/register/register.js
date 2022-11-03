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
    const [error, seterror] = useState();

    const register = async() => {
        let user = {name, email, phoneno, address, password};
        console.log(name === '',email,phoneno,address,password)
        if(name !== '' && email !== '' && phoneno !== '' && address !== '' && password !== ''){
            let result = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(user)
            });
            result = await result.json();
            if (result['error']){
                seterror(result['error']);
            }else if (result['user']){
                dispatch(setCurrentUser(result));
                navigate('/');
            }
        } else{
            seterror('Please fill all the form');
        }
    }

    return (
        <>
            <div className="container w-50 my-5">
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="phoneno" className="form-label">Phone number:</label>
                    <input type="text" className="form-control" id="phoneno" placeholder="Enter Phone Number" name="phoneno" onChange={(e) => setPhoneno(e.target.value)} required/>
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="address" className="form-control" id="address" placeholder="Enter address" name="address" onChange={(e) => setAddress(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                {
                    error && (
                        <div className="text-danger pt-2">{error}</div>
                    )
                }
                <button type="submit" className="btn btn-primary" onClick={register}>Submit</button>
            </div>
        </>
    );
}

export default Register;