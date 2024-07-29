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
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
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
            </div>
            {/* <br/>
            <div id="message" className="bg-white p-3 rounded w-25">{message}</div> */}
        </div>
    );
}

export default ForgotPassword;
