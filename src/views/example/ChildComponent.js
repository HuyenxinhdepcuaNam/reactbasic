import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    render() {
        let { showJob } = this.state
        let { arrJobs } = this.props
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={this.handleShowHide}>Show</button>
                    </div>
                    :
                    <>
                        <div className='Job-list'>
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <button onClick={this.handleShowHide}>Hide</button>
                        </div>
                    </>}
            </>
        )
    }
}

// let ChildComponent = (props) => {
//     let { arrJobs } = props
//     return (
//         <>

//             <div className='Job-list'>
//                 {
//                 arrJobs.map((item, index) => {
//                     if (item.salary > 400) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         )
//                     }
//                     return ('')
//                 })}
//             </div>
//         </>
//     )
// }

export default ChildComponent;