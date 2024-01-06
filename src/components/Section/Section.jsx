import React from 'react';
import css from './Section.module.css'
import '../fonts/font.css'



const Section = ({ title, children }) => {
    return (
        <section className={css.Feedback__section}>
            <h2 className={css.Title} style={{ fontFamily: 'TitleFont', fontSize: '56px' }}>{title}</h2>
            <p className={css.Description} style={{ fontFamily: 'PencilFont', fontSize: '36px' }}>
Please leave a little feedback about our service. This will help us improve our service</p>
            {children}
        </section>
    )
}

export default Section;




  