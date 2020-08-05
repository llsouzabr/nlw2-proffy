import React, { useState, FormEvent } from "react";

import PageHeader   from "../../componnents/PageHeader";
import TeacherItem, { Teacher }  from "../../componnents/TeacherItem";
import Input        from "../../componnents/Input";
import Select       from "../../componnents/Select";
import api          from "../../services/api";

import './styles.css';

function TeacherList() {

    const [subject, setSubject] = useState('');
    const [week_day,setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers,setTeachers] = useState([]);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })

        setTeachers(res.data);
    }

    return (
        <div id="page-teacher-list" className="container">
                <PageHeader title="Estes são os proffys disponíveis." >

                    <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                    name="subject"
                    label="Matéria"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value)}} 
                    options={[
                        {value: 'Artes', label: 'Artes'},
                        {value: 'Biologia', label: 'Biologia'},
                        {value: 'Ciências', label: 'Ciências'},
                        {value: 'Educação Física', label: 'Educação Física'},
                        {value: 'Física', label: 'Física'},
                        {value: 'Geografia', label: 'Geografia'},
                        {value: 'História', label: 'História'},
                        {value: 'Matemática', label: 'Matemática'},
                        {value: 'Portugês', label: 'Portugês'},
                        {value: 'Química', label: 'Química'},
                    ]}
                />
                <Select 
                    name="week-day"
                    label="Dia da semana"
                    value={week_day}
                    onChange={(e) => { setWeekDay(e.target.value)}} 
                    options={[
                        {value: '0', label: 'Domingo'},
                        {value: '1', label: 'Segunda-feira'},
                        {value: '2', label: 'Terça-feira'},
                        {value: '3', label: 'Quarta-feira'},
                        {value: '4', label: 'Quinta-feira'},
                        {value: '5', label: 'Sexta-feira'},
                        {value: '6', label: 'Sábado'},

                    ]}
                />
                        <Input
                            name="time"
                            label="Hora"
                            type="time"
                            value={time}
                            onChange={(e) => { setTime(e.target.value)}} 
                        />
                        <button type="submit">Buscar</button>
                    </form>

                </PageHeader>

                <main>
                    {teachers.map((teacher: Teacher) => {
                        return <TeacherItem key={teacher.id} teacher={teacher}/>
                    })}
                   
                </main>
            
        </div>
    )
}

export default TeacherList;