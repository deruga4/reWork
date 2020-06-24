import React from 'react'
import PropTypes from 'prop-types'
import projectList from './project-list'

const ProjectForm = ({
    name,
    description,
    startDate,
    endDate,
    status,
    saving = false,
    errors = {}
}) => {
    return (
        <form onSubmit={this.onSubmit}>
            <h3>{projectList.id ? 'Edit' : 'New'} Project</h3>

            <div className="form-group"> 
                <label>Project Name</label>
                <TextInput
                    name='name'
                    label='Name'
                    value={projectList.name}
                    onChange={onChange}
                    error={errors.name}
                ></TextInput>
            </div>
            <div className="form-group"> 
                <label>Description</label>

                <TextInput
                    name='description'
                    label='Description'
                    value={projectList.description}
                    onChange={onChange}
                    error={errors.description}
                ></TextInput>

                {/* <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    /> */}
            </div>

            <div className="form-group">
                <label>Start Date</label>
                <div>
                    <DatePicker
                    required
                    selected={this.state.startDate}
                    onChange={this.onChangeStartDate}
                    />
                </div>
            </div>
            
            <div className="form-group">
                <label>End Date</label>
                <div>
                    <DatePicker
                    selected={this.state.endDate}
                    onChange={this.onChangeEndDate}
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Status</label>
                <SelectInput
                    name='status'
                    label='Status'
                    value={project.status}
                    defaultOption='Select Status'
                    options={(
                        {
                            value: 'Not Started',
                            text: 'Not Started'
                        },
                        {
                            value: 'In Progress',
                            text: 'In Progress'
                        },
                        {
                            value: 'Completed',
                            text: 'Completed'
                        },
                        {
                            value: 'On Hold',
                            text: 'On Hold'
                        }
                    )}
                ></SelectInput>
                {/* <select
                selected={this.state.status}
                onChange={this.onChangeStatus}>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
                </select> */}
                
            </div>
    <br></br>
            <div className="form-group">
            <input type="submit" value="Create Project" className="btn btn-primary" />
            </div>
        </form>
    )
}