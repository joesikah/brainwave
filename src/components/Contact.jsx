import { Form, Input, notification, Spin } from "antd";
import Section from "./Section";
import Button from "./Button";
import emailjs from "emailjs-com";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Contact = () => {
  const [form] = Form.useForm();
  const [isBusy, setIsBusy] = useState(false);

  const onFormSubmit = (form_values) => {
    const templateParams = {
      fullName: form_values?.fullName,
      email: form_values?.email,
      phone: form_values?.phone,
      message: form_values?.message,
    };

    setIsBusy(true);

    emailjs
      .send(
        "service_cqj9759",
        "template_a7242mc",
        templateParams,
        "X16elOZ7659c3pxQY"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          notification.success({
            message: "Yayy, We received it!",
            description: "Your message has been sent successfully.",
          });
          form.resetFields();
          setIsBusy(false);
        },
        (error) => {
          console.log("FAILED...", error);
          notification.error({
            message: "Sending Failed",
            description:
              "There was an error sending your message. Please try again later.",
          });
          setIsBusy(false);
        }
      );
  };

  return (
    <Section crosses>
      <div className="container lg:flex">
        {/* left */}
        <div className="max-w-[25rem]">
          <h2 className="h3 mb-4 md:mb-8">Let's build tomorrow, today</h2>

          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] xl:w-[38rem] lg:mx-auto">
            We'd love to hear from you! Please fill out the form below and we'll
            get back to you as soon as possible.
          </p>
        </div>

        {/* right */}
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <div className="">
            <Form form={form} layout="vertical" disabled={isBusy} onFinish={onFormSubmit}>
              {/* fullName */}
              <Form.Item
                label={<p className="text-white">Full Name</p>}
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name",
                  },
                ]}
              >
                <div className="bg-n-8 border border-n-6 rounded-lg">
                  <Input
                    className="h-[40px] text-white"
                    placeholder="John Doe"
                    variant="borderless"
                  />
                </div>
              </Form.Item>

              {/* email */}
              <Form.Item
                label={<p className="text-white">Email</p>}
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <div className="bg-n-8 border border-n-6 rounded-lg">
                  <Input
                    className="h-[40px] text-white"
                    placeholder="johndoe@gmail.com"
                    variant="borderless"
                  />
                </div>
              </Form.Item>

              {/* phone number */}
              <Form.Item
                label={<p className="text-white">Phone Number</p>}
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number",
                  },
                ]}
              >
                <div className="bg-n-8 border border-n-6 rounded-lg">
                  <Input
                    className="h-[40px] text-white"
                    placeholder="+1234567890"
                    variant="borderless"
                  />
                </div>
              </Form.Item>

              {/* message */}
              <Form.Item
                label={<p className="text-white">Message</p>}
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please enter a message",
                  },
                ]}
              >
                <div className="bg-n-8 border border-n-6 rounded-lg">
                  <Input.TextArea
                    className="w-full text-white"
                    rows={8}
                    placeholder="Your message here..."
                    variant="borderless"
                  />
                </div>
              </Form.Item>

              {/* submit */}
              <Form.Item className="flex justify-end mt-10">
                <Button disabled={isBusy}>
                  {isBusy ? (
                    <Spin
                      indicator={
                        <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />
                      }
                    />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
