import { toast } from 'react-toastify';

function toastMessage(type, message) {
    return toast[type](message, {
        position: "top-right",
        autoClose: 3000,
    });
}

function AuthToken(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export { toastMessage, AuthToken }