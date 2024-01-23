import {Link} from 'react-router-dom'

const ProjectCard=(props)=>{
    const {cardItem}=props
    const {imageUrl,name,description,id}=cardItem
    return(
        <Link to={`/spaces:${id}`} className="link-project">
        <div className="project-card-container">
                        <img alt="project" src={imageUrl} className="project-image-style"/>
                        <p className="project-name">{name}</p>
                        <p className="project-name">Project Description:</p>
                        <div className="description-div">
                        <p className="description">{description}</p>
                        </div>
                        <p className="project-name">Status :<span className="description">UpComing</span></p>
                    </div>
                    </Link>
    )
}
export default ProjectCard