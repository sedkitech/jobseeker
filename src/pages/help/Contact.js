import { useEffect, useRef, useState } from "react"
import { Form, redirect, useActionData } from "react-router-dom"
import emailjs from 'emailjs-com';
//matine form
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

export const Contact = () => {
    const data = useActionData()
    const [form, setForm] = useState(
        {
            email: '',
            message: ''
        }
    )
    const [ShowSuccessMessage, setShowSuccessMessage] = useState('')
    // console.log({ ...form })

    useEffect(() => {
        if (data && data.success) {
            setForm({ email: '', message: '' })
            setShowSuccessMessage(data.success)
        }
        setTimeout(function () {
            setShowSuccessMessage('')
        }, 3000);
    }, [data])
    //matine form 
    const contactForm = useForm({
        initialValues: {
            email: '',
            message: '',
            // termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            message: (value) => (value.length < 10 ? 'Message must have at least 10 letters' : null),
            // termsOfService: (value) => (value === false ? 'Please accept our terms to proceed' : null),
        },
    });

    const SERVICE_ID = "service_tld67rl";
    const TEMPLATE_ID = "template_j3olldd";
    const PUBLIC_KEY = "JpBWm4mT3f5cYoYq3";

    const [formSuccess, setFormSuccess] = useState('');
    const [formError, setFormError] = useState('');
    const [loading, setLoading] = useState(false);
    const myForm = useRef();

    useEffect(() => {
        setTimeout(function () {
            setFormSuccess('')
            setFormError('');
        }, 3000);
    }, [formSuccess, formError])


    const sendEmail = (values) => {
        // e.preventDefault();
        setFormError('')
        setFormSuccess('')
        setLoading(true)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, myForm.current, PUBLIC_KEY)
            .then((result) => {
                setFormSuccess(result.text);
                console.log(result.text)
                setLoading(false)
            }, (error) => {
                setFormError(error.text);
                console.log(error.text)
                setLoading(false)
            });
        contactForm.reset();
    };

    let response
    if (loading) {
        response = <p className="loading">waiting for response...</p>
    }
    if (formSuccess) {
        response = <p className="success">Message sent with success</p>
    }
    if (formError) {
        response = <p className="error">Something went wrong.</p>
    }


    return (
        <div className="contact">
            <h3>Contact Us</h3>
            {/* <div className="contact-form">
                <Form method="post" action="/help/contact">
                    <label>
                        <span>Your email:</span>
                        <input
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            type="email" name="email" required
                        />
                    </label>
                    {data && data.emailError && <p className="error">{data.emailError}</p>}
                    <label>
                        <span>Your message:</span>
                        <textarea
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            name="message" required></textarea>
                        {data && data.messageError && <p className="error">{data.messageError}</p>}
                    </label>
                    <button>Submit</button>
                    {
                        ShowSuccessMessage &&
                        <p className="success">{ShowSuccessMessage}</p>
                    }
                </Form>

               

            </div> */}


            <Box sx={{ maxWidth: 300 }} mx="auto">
                <div className="contact-form_main" >
                    <form ref={myForm}
                        onSubmit={contactForm.onSubmit((values) => sendEmail(values))}
                    >
                        <TextInput
                            withAsterisk
                            label="Email"
                            name='user_email'
                            placeholder="your@email.com"
                            {...contactForm.getInputProps('email')}
                        />

                        <TextInput
                            withAsterisk
                            label="Message"
                            name='message'
                            placeholder="Write you message here"
                            {...contactForm.getInputProps('message')}
                        />

                        {/* <Checkbox
                        mt="md"
                        label="I agree to sell my privacy"
                        {...contactForm.getInputProps('termsOfService')}
                    /> */}

                        <Group position="left" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                        {response}
                    </form>
                </div>
            </Box>
        </div>
    )

}

export const contactFormAction = async ({ request }) => {
    const res = await request.formData()
    const data = {
        email: res.get('email'),
        message: res.get('message')
    }
    if (data.message.length < 10) {
        return { messageError: "Message must be over 10 caracteres" }
    }

    if (!data.email.includes('gmail')) {
        return { emailError: "Email should be with gmail" }
    }

    return ({ success: "Message sent with success" })

}

