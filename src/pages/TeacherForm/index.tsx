import React, { useState }        from "react";
import PageHeader   from "../../componnents/PageHeader";
import Input        from "../../componnents/Input";
import Textarea     from "../../componnents/Textarea";
import Select       from "../../componnents/Select";

import warningIcon  from '../../assets/images/icons/warning.svg'

import './styles.css';


function TeacherForm() {
    const [scheduleItem, setScheduleItems] = useState([
        { week_day: 0, from: '', to: ''},
    ])

    function addNewScheduleItem () {
        setScheduleItems([
            ...scheduleItem, {
                week_day: 0,
                from:"",
                to:''
            }
        ])

    }

    return (
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Que incrível que você quer dar aulas." 
            description="O primeiro passo é preencher este formulário de inscrição"
        />
        <main>
            <fieldset>
                <legend>Seus Dados</legend>
                <Input name="name" label="Nome Completo" />
                <Input name="avatar" label="Avatar" />
                <Input name="whatsapp" label="Whatsapp" />
                <Textarea name="bio" label="Biografia" />
            </fieldset>
            <fieldset>
                <legend>Sobre a aula</legend>
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
                <Input name="cost" label="Custo da sua hora/aula" />
            </fieldset>
            <fieldset>
                <legend>
                    Horários Disponíveis
                    <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
                </legend>
                
                {scheduleItem.map(scheduleItem => {
                    return (
                        <div key={scheduleItem.week_day} className="schedule-item">
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
                            <Input name="from" label="Das" type="time"/ >
                            <Input name="to" label="Às" type="time"/ >
                        </div>
                    )
                })}

            </fieldset>
            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso Importante!" />
                    Importante! <br />
                    Preencha todos os dados
                </p>
                <button type="button">
                    Salvar cadastro
                </button>
            </footer>
        </main>
    </div>
    )
}

export default TeacherForm;