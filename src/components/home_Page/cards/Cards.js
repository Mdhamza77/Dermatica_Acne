import React from 'react'; 
import './style.css'
const Cards = () => {
    return (
        <div className='app'>
            <section className='section'>
                <div className='text'>
                    <p>Personalised skincare with powerful ingredients</p>
                    <p className='t1'>black heads</p>
                    <p className='t2'>white heads</p>
                    <p className='t3'>cryptic heads</p>
                    <button className='btn-btn1'>Start consulting</button>
                    <div className='price'> <p>First month £2.90</p> </div>
                </div>
                <img className='object-contain' src='https://dermatica.co.uk/images/dermatica-rebrand-2022/home/homepage-hero-bottle_reskinned_desktop.webp' />
            </section>
            <div className='apps'>
                <section className='cards'>
                    <div className='text'>
                        <h1 className='c1'>Real people</h1>
                        <h1 className='c1'>Real results</h1>
                        <div>
                            <p>“Dermatica has changed my life and I’m beyond thankful for the team and my prescription for giving me my confidence back. I can go out without makeup, and I don’t feel ashamed anymore. I can’t stress it enough how amazing this company is.”
                            </p>
                        </div>
                    </div>
                    <div className='before-after-simple-wrapper'>
                        <p>Before</p>
                        <img className='before-image img' src='https://dermatica.co.uk/images/240x378/dermatica-rebrand/B80/slide1/B34_before_after_new_slide1_kelsey_desktop-1.webp' />
                    </div>
                    <div className='before-after-simple-wrapper'>
                        <p>After</p>
                        <img className='.after-image img' src='https://dermatica.co.uk/images/240x378/dermatica-rebrand/B80/slide1/B34_before_after_new_slide1_kelsey_desktop-2.webp' />
                    </div>
                </section>
            </div>
            <div className='subscription-container'>
                <section>
                    <div className='subscription-content'>
                         <h2 className='font-h2'>The full (skincare) package</h2>
                                           
                    <div className='section'><img className='object-contain' src='https://dermatica.co.uk/images/dermatica-rebrand-2022/pdp/the-nourishing-kit/hero/Nourishing_kit_PDP_hero_01_desktop@2x.webp' />
                    </div> 
                    
                    <ul className='subscription-list'>
                            <li>Your own personalised formula, made with proven prescription ingredients.</li>
                            <li>An expert-designed treatment plan that adapts to your skin journey.</li>
                            <li>Easy delivery straight to your door every 28 days. No need to stay home.</li>
                            <li>Unlimited and ongoing free dermatology consultations.</li>
                         </ul>       
                    </div>                         
                </section>
            </div>
        </div>
    );
}

export default Cards;
