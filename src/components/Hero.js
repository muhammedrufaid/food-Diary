import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <img src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='hero-content'>
            <h2 style={{border:'1px solid #ccc',borderRadius:'5px', backgroundColor:'#fff',opacity:'0.8'}}>Its all <span style={{color:'#e60000'}}>about </span>good <span style={{color:'#e60000'}}>food</span> & taste</h2>
            <p style={{border:'1px solid #ccc',borderRadius:'5px', backgroundColor:'#e60000',boxShadow:'0 4px 8px rgba(1, 1, 1, 1)',opacity:'0.9'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus distinctio necessitatibus harum sed iure eius dolore, ex eveniet?</p>
        </div>
    
    </div>
  )
}

export default Hero