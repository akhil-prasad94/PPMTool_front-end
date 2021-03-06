import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {deleteProjectTask} from "../../../actions/backlogActions"
import {connect} from "react-redux";


class ProjectTask extends Component {
  
    onDeleteClick = (p_identifier,sequence_id,history)  =>{
        this.props.deleteProjectTask(p_identifier,sequence_id)
    }

    render() {
        const {project_task} = this.props;
        return (
          <div className="card mb-1 bg-light">
                 <div className="card-header text-primary">
                     ID: {project_task.projectSequence} -- Priority: {project_task.priority}
                 </div>
                 <div className="card-body bg-light">
                     <h5 className="card-title">{project_task.summary}</h5> 
                     <p className="card-text text-truncate ">
                         {project_task.acceptanceCriteria}
                     </p>
                     <Link  to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence }`} className="btn btn-primary">
                         View / Update
                     </Link>

                     <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this,
                        project_task.projectIdentifier,
                        project_task.projectSequence,
                        this.props.history
                        )}>
                         Delete
                     </button>
                 </div>
             </div>
        )
    }
}



export default  connect(null,{deleteProjectTask})(ProjectTask);