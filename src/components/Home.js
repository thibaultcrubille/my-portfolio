import React, { useEffect, useState } from "react";
import image from '../bg_bggenerator_com.jpg'
import sanityClient from "../client.js"


export default function Home(){

    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
                title,
                start_date,
                end_date,
                company,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                description,
                projectType,
                link,
                tags


            }`).then((data) => setProjectData(data))
            .catch(console.error);
        }, [])


    return (
        <main>
            <img src={image} alt="myBackground" className="absolute object-cover w-full h-full"/>

            <section className="relative flex justify-center">
                <h1 className="text-5xl flex justify-center cursive">My project</h1>
            </section>
            <section className="relative flex justify-center pt-12 lg:px-8">


                <h2 className="text-lg text-gray-600 flex justify-center mb-12"></h2>
                <section className="grid grid-cols-3 gap-8">

                {projectData && projectData.map((project, index) =>(



                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                    <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                        <a href={project.link} alt={project.title}
                        target="_blanck"
                        rel="noopener noreferrer"
                        >
                        {project.title}</a>
                    </h3>

                    <img src={project.mainImage.asset.url} alt={project.mainImage.alt}
                            className="w-200 h-200 rounded-r object-cover"
                            />
                    


                    <div className="text-gray-500 text-xs space-x-4">

                        <span>
                            <strong className="font-bold">Finished on</strong>: { " " }{new Date(project.start_date).toLocaleDateString()}
                        </span>
                        <span>
                            <strong className="font-bold">Company</strong>:{" "}{project.company}
                        </span>
                        <span>
                            <strong className="font-bold">Type</strong>: {" "}{project.projectType}
                        </span>
                        <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                        <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400">
                            View the project{" "}
                            <span role="img" aria-label="right pointer">👉</span>
                        </a>
                    </div>
                    </article>

                    ))}

                </section>

            </section>

            
                
            
        </main>
    )
}