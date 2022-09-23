import React from 'react';


function StudentBioData(props){
    return (
        <>
        <h1>Student Biodata</h1>
        <p>{props.Name}</p>
        <p>{props.age}</p>
        </>
    )
}

export default StudentBioData;