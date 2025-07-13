"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+234) 815 282 6507",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "johnnieuc1@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Ago Palace Way, Okota, Lagos State",
    },
];

import { motion } from "framer-motion";



const Contact = () => {
    const [status, setStatus] = useState(""); // To show message 
    const [service, setService] = useState(""); // Controlled service input

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        data.set("service", service); // manually set selected service
    
        const res = await fetch("https://formspree.io/f/mjkobbje", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: data,
        });
    
        if (res.ok) {
            form.reset();
            setService("");
            setStatus("Message sent successfully!");
            setTimeout(() => setStatus(""), 4000); // Clear after 4s
        } else {
            setStatus("Something went wrong. Try again.");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                Have a project in mind or need a developer on your team?... <br/> Feel free to reach out. 
                                I'm always open to new opportunities and collaborations.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Firstname" />
                                <Input type="text" name="lastname" placeholder="Lastname" />
                                <Input type="email" name="email" placeholder="Email address" />
                                <Input type="tel" name="phone" placeholder="Phone number" />
                            </div>
                            {/* select */}
                            <Select value={service} onValueChange={setService}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="Website Maintenance">Website Maintenance</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                                        <SelectItem value="SEO Optimization">SEO Optimization</SelectItem>
                                        <SelectItem value="Landing Page Design">Landing Page Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea 
                                className="h-[200px]"
                                name="message" 
                                placeholder="Enter your message here."
                                required
                            />
                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-40">
                                Send message
                            </Button>

                            {/* success message */}
                            {status && (
                                <p className="text-green-400 bg-green-950 px-4 py-2 rounded-md">{status}</p>
                            )}
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index)=> {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div> 
        </motion.section>
    )
};

export default Contact;
