export default {
    name: "project",
    title: "Project",
    type: "document",
    fields:[
        {
            name:"title",
            type:"string"
        },
        {
            name: "start_date",
            type: "datetime"
        },
        {
            name: "end_date",
            type: "datetime"
        },
        {
            name: "company",
            type: "string"
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:"description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options:{
                list:[
                    { value : "personal", title:"Personnal"},
                    { value : "client", title:"Client"},
                    { value : "Professional", title:"Professional"},
                ],
            },
        },
        {
            name : "link",
            type: "url",
        },
        {
            name : "tags",
            type:"array",
            of: [
                {
                    type:"string",
                },

            ],
            options: {
                layout: "tags",
            },
        },


    ]
}