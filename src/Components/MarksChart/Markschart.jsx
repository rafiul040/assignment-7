import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Markschart = ({marksPromise}) => {

    const marksdataRes = use(marksPromise);
    const marksData = marksdataRes.data;

    const marksChartData= marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }

        const avg = (student.physics + student.chemistry + student.math) / 3
        student.avg = avg
        return student
    })

    console.log(marksChartData)

    return (
        
    );
};

export default Markschart;