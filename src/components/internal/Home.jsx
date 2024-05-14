import React from 'react'
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { Link } from 'react-router-dom';

const Home = () => {

    const heroText = "A self taught Web Developer.".split(" ")

    return (
        <div className='dark:bg-neutral-900'>
            <div className='w-full md:text-[50px] text-[40px] poppins-regular dark:text-white'>
                <p>Hello, I&apos;m Amaan Hussain,</p>
                <div>{heroText.map((text, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: i / 10,
                        }}
                        key={i}
                    >
                        {text}{" "}
                    </motion.span>
                ))}</div>
            </div>
            <div className='bg-yellow-200 my-14 w-full py-8 shadow rounded-lg flex justify-center flex-col items-center dark:bg-neutral-600 dark:text-white'>
                <h1 className='text-lg'>My Tech Stack</h1>

                <div className='flex flex-wrap items-baseline justify-center gap-10'>
                    <div className='w-16 flex flex-col items-center'>
                        <img className='object-cover' src={"/png/pngegg.png"} alt="" />
                        <p>Javascript</p>
                    </div>
                    <div className='w-20 flex flex-col items-center'>
                        <img className='object-cover' src={"/png/pngegg(1).png"} alt="" />
                        <p>Node js</p>
                    </div>
                    <div className='w-20 flex flex-col items-center'>
                        <img className='object-cover' src={"/png/pngegg(2).png"} alt="" />
                        <p>React</p>
                    </div>
                    <div className='w-20 flex flex-col items-center'>
                        <img className='object-cover' src={"/png/pngegg(3).png"} alt="" />
                        <p>Express</p>
                    </div>
                    <div className='w-20 flex flex-col items-center'>
                        <img className='object-cover' src={"/png/pngegg(4).png"} alt="" />
                        <p>MongoDb</p>
                    </div>
                    <div className='w-20 flex flex-col items-center'>
                        <img className='object-cover' src={"/png/pngwing.png"} alt="" />
                        <p>Tailwind</p>
                    </div>
                    <div className='w-[65px] flex flex-col items-center'>
                        <img className='object-cover rounded-xl' src={"/png/shadcn.png"} alt="" />
                        <p>Shadcn</p>
                    </div>
                    <div className='w-[65px] flex flex-col items-center'>
                        <img className='object-cover rounded-xl' src={"/png/pnggit.com.png"} alt="" />
                        <p>Github</p>
                    </div>
                    <div className='w-[65px] flex flex-col items-center'>
                        <img className='object-cover rounded-xl' src={"/png/vercel.png"} alt="" />
                        <p>Vercel</p>
                    </div>
                </div>


            </div>
            <div className='bg-blue-300 my-14 w-full py-8 shadow rounded-lg flex justify-center flex-col items-center dark:bg-neutral-600 dark:text-white'>
                <h1 className='text-lg'>Projects</h1>

                <div className='flex gap-8 flex-wrap justify-center'>
                    <div className='flex flex-wrap justify-center shadow-lg dark:text-white'>
                        <Card className="w-64">
                            <CardHeader>
                                <CardTitle className="text-xl poppins-medium">E-commerce site</CardTitle>
                                <CardDescription>It is an MERN Stack ecommerce site, able to perform user Authentication CRUD operations on products by the admin only with admin dashboard and also monitor the orders by the users and process them</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <p className='text-sm'>Used</p>
                                    <p className='text-orange-400'>react nodejs mongodb express tailwind redux cloudinary multer</p>

                                </div>
                            </CardContent>
                            <CardFooter>
                                <div>
                                    go to -
                                    <a target='_blank' href="https://github.com/Amaan-webDeveloper/MERN-stack-E-commerce-site-with-tailwind-css">
                                        <Button>
                                            Github
                                        </Button></a>

                                </div>
                            </CardFooter>
                        </Card>

                    </div>

                    <div className='flex flex-wrap justify-center shadow-lg'>
                        <Card className="w-64">
                            <CardHeader>
                                <CardTitle className="text-xl poppins-medium">Social media app</CardTitle>
                                <CardDescription>It is an MERN Stack social media web application, used React as frontend and appwrite cloud as backend and user Authantication, users can create their account and edit their profile details and create post as well as edit and delete the create posts by them and make the post private(only the user can see),all users can see and like the post which are publicaly awailable</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <p className='text-sm'>Used</p>
                                    <p className='text-orange-400'>react tailwind redux appwrite</p>

                                </div>
                            </CardContent>
                            <CardFooter>
                                <div>
                                    go to -
                                    <a target='_blank' href="https://github.com/Amaan-webDeveloper/React-and-Appwrite-social-media-app">
                                        <Button>
                                            Github
                                        </Button></a>

                                </div>
                            </CardFooter>
                        </Card>

                    </div>

                </div>
            </div>
            <div className='bg-purple-400 mt-14 w-full py-4 px-8 shadow rounded-lg flex flex-wrap justify-between items-center gap-8 dark:text-white dark:bg-neutral-600 '>
                <div>
                <h1>Email: amaanhussain.web@gmail.com</h1>
                <h1>Phone no.: +91 96912354112</h1>
                </div>
                <h1>Hope you find it useful</h1>
            </div>
        </div>
    )
}

export default Home