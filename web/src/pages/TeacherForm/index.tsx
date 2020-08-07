import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, 
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(response => {
            console.log(response);
            history.push('/');
        }).catch(err => console.log(err));
    }

    function setScheduleItemValue(index: number, field: string, value: string) {
        const newArray = scheduleItems.map((item, i) => {
            if (i === index) {
                return {...item, [field]: value};
            }

            return item;
        });

        setScheduleItems(newArray);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher este formulário de incrição."
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input 
                            label="Nome completo" 
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                            label="Avatar" 
                            name="avatar"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                        />
                        <Input 
                            label="WhatsApp" 
                            name="whatsapp"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                        />
                        <Textarea 
                            name="bio" 
                            label="Biografia"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select 
                            label="Matéria" 
                            name="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            options={[
                                { value: "Artes", label: "Artes"},
                                { value: "Biologia", label: "Biologia"},
                                { value: "Matematica", label: "Matematica"},
                                { value: "Fisica", label: "Fisica"},
                                { value: "Portugues", label: "Portugues"},
                                { value: "Ingles", label: "Ingles"},
                            ]}
                        />
                        <Input 
                            label="Custo da sua aula por hora" 
                            name="cost"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((item, index) => (
                            <div key={item.week_day} className="schedule-item">
                                <Select
                                    label="Dia da semana" 
                                    name="week_day"
                                    value={item.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options={[
                                        { value: "0", label: "Domingo"},
                                        { value: "1", label: "Segunda"},
                                        { value: "2", label: "Terça"},
                                        { value: "3", label: "Quarta"},
                                        { value: "4", label: "Quinta"},
                                        { value: "5", label: "Sexta"},
                                        { value: "6", label: "Sábado"},
                                    ]}
                                />

                                <Input 
                                    name="from"
                                    label="Das"
                                    type="time"
                                    value={item.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />
                                <Input 
                                    name="to" 
                                    label="Até" 
                                    type="time"
                                    value={item.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                            </div>
                        ))}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;