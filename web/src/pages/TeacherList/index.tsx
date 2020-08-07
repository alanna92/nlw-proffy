import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {
    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);

    async function handleSearch(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day: weekDay,
                time,
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                <form id="search-teachers" onSubmit={handleSearch}>
                    <Select
                        label="Matéria" 
                        name="subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={[
                            { value: "Artes", label: "Artes"},
                            { value: "Biologia", label: "Biologia"},
                            { value: "Matematica", label: "Matematica"},
                            { value: "Fisica", label: "Fisica"},
                            { value: "Portugues", label: "Portugues"},
                            { value: "Ingles", label: "Ingles"},
                        ]}
                    />
                    <Select
                        label="Dia da semana" 
                        name="week_day"
                        value={weekDay}
                        onChange={e => setWeekDay(e.target.value)}
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
                        type="time" 
                        label="Hora" 
                        name="time" 
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    );
}

export default TeacherList;