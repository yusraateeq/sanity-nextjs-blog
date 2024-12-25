const blogSchema = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'subheading',
            type: 'string',
            title: 'Subheading'
        },
        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 96
            },
            validation: (Rule: { required: () => string; }) => Rule.required(),

        }
        ,
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{ type: 'block' }]
        }
    ]
};


export default blogSchema;
