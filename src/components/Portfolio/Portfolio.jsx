import React from 'react'
import './portfolio.css'
import IMG1 from  '../../assets/portfolio1.jpg';
import IMG2 from  '../../assets/portfolio2.jpg';
import IMG3 from  '../../assets/portfolio3.jpg';
import IMG4 from  '../../assets/portfolio4.jpg';
import IMG5 from  '../../assets/portfolio5.png';
import IMG6 from  '../../assets/portfolio6.jpg';

const data=[
  { 
  id:1,
  image:IMG1,
  title:"Picture1",
  github:'https://github.com',
  demo:'https://github.com'
  },
  { 
  id:2,
  image:IMG2,
  title:"Picture2",
  github:'https://github.com',
  demo:'https://github.com'
  },
  { 
  id:3,
  image:IMG3,
  title:"Picture3",
  github:'https://github.com',
  demo:'https://github.com'
  },
  { 
  id:4,
  image:IMG4,
  title:"Picture4",
  github:'https://github.com',
  demo:'https://github.com'
  },
  { 
  id:5,
  image:IMG5,
  title:"Picture5",
  github:'https://github.com',
  demo:'https://github.com'
  },
  { 
  id:6,
  image:IMG6,
  title:"Picture6",
  github:'https://github.com',
  demo:'https://github.com'
  }
]


const Portfolio = () => {
  return (
      <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>
        <div className="container portfolio__container">

      {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__items'>
            <div className="portfolio_items-image">
              <img src={image}  alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="CTA">
            <a href={github} className='btn' rel='noreferrer' target='_blank' >Github</a>
            <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank' >Live Demo</a>
             </div>
          </article>

          )
        })
      }
        </div>

    </section>
  )
}

export default Portfolio
