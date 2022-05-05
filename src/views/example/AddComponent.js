import React from "react";

class AddComponent extends React.Component {
    state = {
        titlejob: '',
        salary: ''
    }

    hahandleChangeTitleJob = (event) => {
        this.setState({
            titlejob: event.target.value
        })
    }

    hahandleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('Click me')
    }

    render() {
        return (

            <form >
                <label htmlFor="fname">Title:</label><br />
                <input
                    type="text"
                    value={this.state.titlejob}
                    onChange={this.hahandleChangeTitleJob}
                /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={this.hahandleChangeSalary}

                /><br></br>
                <input
                    type="submit"
                    value="Submit"
                    onClick={this.handleSubmit}
                />
            </form>
        )
    }
}

export default AddComponent
