import { Component } from 'react';
import PropTypes from 'prop-types'

function DateBox(props){
    return(
        <div style={{border:'1px solid black', margin:5, padding:5, width:'50%'}}>
            {props.children}
        </div>
    );
}
class ArticleChildren extends Component {
    constructor(props){
        console.log(new Date().getTime());
        super(props);
        this.state = {}
    }
    static propTypes = {
        date: PropTypes.string.isRequired
    }

    render() {
        console.log(new Date().getTime());
        const { author, date, title } = this.props
        return (
            <section className='articleChildren'>
                <h3>{title}</h3>
                <p><em>Written by:</em>{author}</p>
                { date && <DateBox>{date}</DateBox>} 
                <article>
                    {this.props.children}
                </article>
            </section>
        );
    }
}

export default ArticleChildren;