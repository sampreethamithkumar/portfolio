import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import TextArea from "./common/textArea";
import Form from "./common/Form";
import { sendMail } from "./../services/sendMail";
import { toast } from "react-toastify";

class Contact extends Form {
  state = {
    data: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
    errors: {},
    email: "sampreethamithkumar@gmail.com",
    mailto: "mailto: sampreethamithkumar@gmail.com",
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    phone: Joi.string(),
    company: Joi.string(),
    message: Joi.string(),
  };

  doSubmit = async () => {
    try {
      if (Object.keys(this.state.errors).length === 0) {
        toast("Sending Email....");
        await sendMail(this.state.data);
        toast.success("Email Sent!");
      }
    } catch (ex) {
      console.log(ex);
      toast.error("Unexpected error occured.");
    }
  };

  render() {
    const { data, errors, mailto, email } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="center">
              <h1 className="text_font_heading">Contact Me</h1>
              <p style={{ fontSize: "1.2rem" }}>
                If you want to get in touch, please enter your details or reach
                me by email.{" "}
              </p>
              <a style={{ color: "black", fontSize: "1.1rem" }} href={mailto}>
                {email}
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <div className="center">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col">
                    <Input
                      name="name"
                      value={data.name}
                      onChange={this.handleChange}
                      label="Name *"
                      error={errors.name}
                    />
                    <Input
                      name="phone"
                      value={data.value}
                      onChange={this.handleChange}
                      label="Phone"
                    />
                  </div>
                  <div className="col">
                    <Input
                      name="email"
                      value={data.email}
                      onChange={this.handleChange}
                      label="Email *"
                      error={errors.email}
                    />
                    <Input
                      name="company"
                      value={data.company}
                      onChange={this.handleChange}
                      label="Company"
                    />
                  </div>
                  <TextArea
                    name="message"
                    value={data.message}
                    onChange={this.handleChange}
                    label="Message"
                  />
                </div>
                <br />
                <button className="btn btn-primary">Send Email</button>
              </form>
              <br />
              <p>* Required field.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
