import { useForm } from '@inertiajs/react';
import React from 'react';

const Messages = () => {
  const { data: msg, setData: setMsg, post } = useForm({
    name:'',
    email:'',
    subject:'',
    message:''
  });

  function handle(e) {
    const { name, value } = e.target;
    setMsg(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    post('/messages');
    setMsg({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Message Sent Successfully')
  }

  return (
    <div className="page-section">
      <div className="container">
        <h1 className="text-center wow fadeInUp h1">Get in Touch</h1>
        <h5 className="h5 text-center wow fadeInDown">Feel free to contact with us</h5>

        <form className="contact-form mt-5" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-sm-6 py-2 wow fadeInLeft">
              <label htmlFor="fullName">Name</label>
              <input type="text" id="fullName" className="form-control" name="name" placeholder="Full name.." onChange={handle} value={msg.name} />
            </div>
            <div className="col-sm-6 py-2 wow fadeInRight">
              <label htmlFor="emailAddress">Email</label>
              <input type="text" id="emailAddress" className="form-control" name="email" placeholder="Email address.." onChange={handle} value={msg.email} />
            </div>
            <div className="col-12 py-2 wow fadeInUp">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" className="form-control" name="subject" placeholder="Enter subject.." onChange={handle} value={msg.subject} />
            </div>
            <div className="col-12 py-2 wow fadeInUp">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-control" rows={8} name="message" placeholder="Enter Message.." onChange={handle} value={msg.message} />
            </div>
          </div>
          <button type="submit" className="btn btn-outline-primary wow zoomIn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
