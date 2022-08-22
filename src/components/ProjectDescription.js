import dribbble from "../image/dribbble.jpg"
import behance from "../image/behance.jpg"
import iconscout from "../image/iconscout.jpg"

let ProjectsDetail = [
    {
    id : 1,
    link : "https://dribbble.com/Shivamkaushik",
    thumbnail : dribbble,
    projectName : "Dribbble"
    },

    {
    id : 2,
    link : "https://www.behance.net/shivamkaushik1",
    thumbnail : behance,
    projectName : "Behance"
    },

    {
    id : 3,
    link : "https://iconscout.com/contributors/shivam99",
    thumbnail : iconscout,
    projectName : "Iconsscout"
    }
]

export default ProjectsDetail


// return <Block href = {value.link} src = {value.thumbnail} alt = {value.projectName}/>




