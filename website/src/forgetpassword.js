import React, { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();

            if (data.success) {
                setMessage('Password reset link sent to your email.');
            } else {
                setMessage('Error sending password reset link.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error sending password reset link.');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <div id="message">{message}</div>
        </div>
    );
}

export default ForgotPassword;
