import React from "react";

import PageHeader   from "../../componnents/PageHeader";
import TeacherItem  from "../../componnents/TeacherItem";
import Input        from "../../componnents/Input";
import Select       from "../../componnents/Select";

import './styles.css';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
                <PageHeader title="Estes são os proffys disponíveis." >

                    <form id="search-teachers">
                    <Select 
                    name="subject"
                    label="Matéria"
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
                        <Input name="time" label="Hora" type="time"/>
                    </form>

                </PageHeader>

                <main>

                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />

                </main>
            
        </div>
    )
}

export default TeacherList;