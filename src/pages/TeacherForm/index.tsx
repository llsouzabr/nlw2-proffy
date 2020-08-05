import React        from "react";
import PageHeader   from "../../componnents/PageHeader";
import Input        from "../../componnents/Input";
import Textarea     from "../../componnents/Textarea";
import Select       from "../../componnents/Select";

import warningIcon  from '../../assets/images/icons/warning.svg'

import './styles.css';


function TeacherForm() {
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