import Student from "./student";

function StudentSchool(props) {
    console.log('props', props.name)
    const studentName = 'Rajagopal'
    return (
        <div> Student School Parent
             <Student studentName = {studentName + 'From' + props.name}/>
        </div>
       
    )
}

export default StudentSchool;