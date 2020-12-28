import { Component } from 'react';
import PropTypes from 'prop-types'

function DateBox(props){
    return(
        <div style={{border:'1px solid black', margin:5, padding:5, width:'50%'}}>
            {props.children}
        </div>
    );
}
function ArticleChildren(props) {
    const { author, date, title,children  } = props;
    return(
            <section className='articleChildren'>
                <h3>{title}</h3>
                <p><em>Written by:</em>{author}</p>
                { date && <DateBox>{date}</DateBox>} 
                <article>
                    {children}
                </article>
            </section>
        );
}
ArticleChildren.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    children: PropTypes.any
}
export default class Articles extends Component {
    render(){
        return(
            <div>
                <h5>Stateless components</h5>
                <ArticleChildren author={'Antonio Bautista'} title={'An amazing title'} date={ new Date().toDateString()}><p>
                    you can send content inside a component call and you can access it in child componet as !!child!! prop
                    </p></ArticleChildren>

                    <ArticleChildren author={'Jose Perez'} title={'another amazing title'}><p>
                    you can send content inside a component call and you can access it in child componet as !!child!! prop
                    </p></ArticleChildren>
            </div>
        )
    }
}
