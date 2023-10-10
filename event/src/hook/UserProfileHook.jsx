import { useState, useEffect } from 'react';
export const useUserProfile = (enableActionButton, disableActionButton) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
        const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
        if (userProfile.name) setName(userProfile.name);
        if (userProfile.email) setEmail(userProfile.email);
    }, []);
    useEffect(() => {
        const isAnyFieldEmpty = !name || !email;
        const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        const isValidInput = !isAnyFieldEmpty && isEmailValid;

        if (isValidInput) {
            localStorage.setItem('userProfile', JSON.stringify({ name, email }));
            enableActionButton();
            setIsValid(true);
        } else {
            disableActionButton();
            setIsValid(false);
        }
    }, [name, email, enableActionButton, disableActionButton]);

    return { name, setName, email, setEmail, isValid };
};