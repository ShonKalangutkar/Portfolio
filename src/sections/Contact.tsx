import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    //service_fvbfglj
    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        await emailjs.send(
            'service_fvbfglj',       // Just the string, no label
            'template_i443hk6',      // Just the string, no label
            {                        // The object of your data
                from_name: form.name,
                to_name: 'Shon',
                from_email: form.email,
                email: 'shonkalangutkar1998@gmail.com',
                message: form.message // Fixed typo here
            },
            'RFCkZgcL3uBYF5_FU'    // Replace with your actual Public Key
        );

        setLoading(false);
        alert('Your message has been sent!');
        setForm({ name: '', email: '', message: '' }); // Clear form

    } catch (error) {
        setLoading(false);
        console.error(error);
        alert('Something went wrong!');
    }
};
  return (
    <section className='c-space my-20' id='contact'>
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 w-full h-full object-fill md:object-contain"/>
            <div className="contact-container">
                <h3 className="head-text">Let's Talk</h3>
                <p className="text-lg text-white-600">Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input type="text"
                        name='name'
                        value={form.name} 
                        onChange={handleChange}
                        required
                        className='field-input'
                        placeholder='Shon Kalangutkar'/>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                        <input type="email"
                        name='email'
                        value={form.email} 
                        onChange={handleChange}
                        required
                        className='field-input'
                        placeholder='Shonkalangutkar1998@gmail.com'/>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Your Message</span>
                        <textarea
                        name='message'
                        value={form.message} 
                        onChange={handleChange}
                        required
                        rows={5}
                        className='field-input'
                        placeholder="Hi, I'm interseted in ..."/>
                    </label>
                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>

                </form>
            </div>
        </div>
        </section>
  )
}

export default Contact