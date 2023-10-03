import { useState, useEffect } from 'react';

export const useUserProfile = (enableActionButton,disableActionButton) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
        if (userProfile.name) setName(userProfile.name);
        if (userProfile.email) setEmail(userProfile.email);
        if (userProfile.phone) setPhone(userProfile.phone);
    }, []);

    useEffect(() => {
        const isAnyFieldEmpty = !name || !email || !phone;
        if (!isAnyFieldEmpty) {
            localStorage.setItem('userProfile', JSON.stringify({ name, email, phone }));
            enableActionButton();
        } else {
            disableActionButton()
        }
    }, [name, email, phone]);

    return { name, setName, email, setEmail, phone, setPhone };
}
