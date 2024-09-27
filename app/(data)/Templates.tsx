
interface Template {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiPrompt: string;
    slug: string;
    form: {
      label: string;
      field: string;
      name: string;
      required: boolean;
    }[];
  }

const templates: Template[] =  [
    {
        name: 'Facebook Caption Generator',
        desc: 'An AI tool that creates engaging Facebook captions.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174848.png',
        aiPrompt: 'Generate engaging Facebook captions based on the provided image or content details.',
        slug: 'facebook-caption-generator',
        form: [
            {
                label: 'Enter image or content details',
                field: 'textarea',
                name: 'contentDetails',
                required: true
            }
        ]
    },
    {
        name: 'Twitter Tweet Generator',
        desc: 'An AI tool that creates creative tweets for Twitter.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
        aiPrompt: 'Generate creative tweets based on the provided content details or ideas.',
        slug: 'twitter-tweet-generator',
        form: [
            {
                label: 'Enter content details or tweet ideas',
                field: 'textarea',
                name: 'contentDetails',
                required: true
            }
        ]
    },
    {
        name: 'WhatsApp Status Generator',
        desc: 'An AI tool that creates catchy WhatsApp status updates.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733585.png',
        aiPrompt: 'Generate catchy WhatsApp status updates based on the provided content or mood details.',
        slug: 'whatsapp-status-generator',
        form: [
            {
                label: 'Enter content or mood details',
                field: 'textarea',
                name: 'contentDetails',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Caption Generator',
        desc: 'An AI tool that creates catchy Instagram captions.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733558.png',
        aiPrompt: 'Generate catchy Instagram captions based on the provided image or content details.',
        slug: 'instagram-caption-generator',
        form: [
            {
                label: 'Enter image or content details',
                field: 'textarea',
                name: 'contentDetails',
                required: true
            }
        ]
    },
    {
        name: 'LinkedIn Post Ideas',
        desc: 'An AI tool that generates professional LinkedIn post ideas.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174857.png',
        aiPrompt: 'Generate professional LinkedIn post ideas based on the provided topic.',
        slug: 'linkedin-post-ideas',
        form: [
            {
                label: 'Enter your topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'YouTube Video Idea Generator',
        desc: 'An AI tool that generates creative YouTube video ideas.',
        category: 'Video',
        icon: 'https://cdn-icons-png.flaticon.com/128/187/187210.png',
        aiPrompt: 'Generate creative YouTube video ideas based on the provided niche or topic.',
        slug: 'youtube-video-idea-generator',
        form: [
            {
                label: 'Enter niche or topic',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
]
export default templates;