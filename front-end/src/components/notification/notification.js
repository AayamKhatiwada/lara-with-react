import { Alert } from "./notification.style";

const Notification = ({ message }) => {

    const name = message;

    return (
        <>
            <Alert className="rounded-4">
                {name}
            </Alert>
        </>
    );
}

export default Notification;