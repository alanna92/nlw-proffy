import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" name="subject" id="sucject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" name="week_day" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="hour">Horário</label>
                        <input type="text" name="hour" id="hour"/>
                    </div>
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
    );
}

export default TeacherList;