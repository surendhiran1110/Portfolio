import self from "../img/self.png"
import mock1 from "../img/pic1.png"
import mock2 from "../img/pic2.png"
import mock3 from "../img/pic3.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Surendhiran",
    lastName: "Shanmugam",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Enthusiastic Cloud Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: "💼",
            text: "Studying in Karpagam Institute of Technology"
        },
        {
            emoji: "📧",
            text: "surendhirans1110@gmail.com"
        }
    ],
    socials: [
            {
              "link": "https://instagram.com",
              "icon": "fa fa-instagram",
              "label": "instagram"
            },
            {
              "link": "https://github.com/surendhiran1110",
              "icon": "fa fa-github",
              "label": "github"
            },
            {
              "link": "https://www.linkedin.com/in/surendhiran1110/",
              "icon": "fa fa-linkedin",
              "label": "linkedin"
            },
            {
              "link": "https://leetcode.com/u/surendhar_IT/",
              "icon": "fa fa-leetcode",
              "label": "leetcode"
            }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Greetings! I'm Surendhiran S, a passionate cloud engineer with a background in Information Technology from Karpagam Institute of Technology. I thrive on delving into the intricacies of cloud systems and leveraging technology to solve complex problems. Recently, I have enhanced my skill set by learning various DevOps tools such as Git for version control, and GitHub Actions for creating and integrating CI/CD pipelines. I have also gained proficiency in Docker for containerization, Terraform, Kubernetes (K8S), and basic Linux commands. Additionally, I have delved into file handling management using Python scripting. My hands-on experience extends to various AWS services, including EC2, S3, Lambda, DynamoDB, and CloudFront. These tools and technologies have allowed me to undertake and complete several hands-on projects, further solidifying my expertise. I'm excited about the endless possibilities that cloud computing combined with DevOps offers and am eager to contribute my skills to meaningful projects."
    skills:
        {
          proficientWith: ['java','javascript', 'react', 'git', 'github', 'devops', 'html5', 'css3', 'cloud aws'],
          exposedTo: ['nodejs', 'python', 'GithubActions','jenkins']
        }
    ,
    hobbies: [
        {
            label: 'listening musics',
            emoji: '🎵'
          },
          {
            label: 'programming',
            emoji: '💻'
          },
          {
            label: 'cricket',
            emoji: '🏏'
          },
          {
            label: 'cooking',
            emoji: '🍳'
          }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Speech to Text Translation",
            // live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/surendhiran1110/speechtotext-_translation", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "flask-s3_resume_generator ",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/surendhiran1110/flask-s3_resume_generator",
            image: mock2
        },
        {
            title: "Sample java webapp with maven ",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/surendhiran1110/deploytrails",
            image: mock3
        },
    ]
}
