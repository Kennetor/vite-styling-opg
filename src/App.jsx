import './App.css'
import { useTimer } from "react-timer-and-stopwatch";

function App() {

  return (
    <>
    <div className="App">
      
      {/* Carousel */}
<div className="carousel w-full h-72">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://whiskers.in/wp-content/uploads/2018/09/beard-combo-banner-mark4-02.jpg" className="w-full opacity-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9VikmNUsBhC_ApR15LgrZjOkF-2Lw2kyIA&usqp=CAU" className="w-full opacity-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src="https://thumbs.dreamstime.com/b/banner-size-photo-bearded-hispter-man-long-hair-drinking-cup-coffee-to-go-over-pink-background-banner-size-photo-259825324.jpg" className="w-full opacity-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src="https://www.shutterstock.com/image-photo/banner-size-photo-bearded-hispter-260nw-2221866693.jpg" className="w-full opacity-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<Countdown />
    </div>    

    {/* Barbers */}
    <div className='shop'>
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="http://placebeard.it/j/400x225"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Magnus the Barber</h2>
    <div className="rating justify-center">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
    <p>With over 30 years in the hair industry Magnus has concentrated over the past 15 years on men's hair only. With a great mix of cutting skills developed as a stylist and barber, she's able to adapt to any style requirement and loves to tackle a big beard, and with this, produces some amazing work.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="http://placebeard.it/s/400x225"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Sam the Barber</h2> <div className="rating justify-center">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
    <p>With over 12 years in the industry, Sam has advanced and developed his skills as a Barber to that of any Master Barber status and more. Having been trained initially by an old school Italian Barber, he developed skills for wet shaving at a very young age</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="http://placebeard.it/e/400x225"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">George the Barber!</h2> <div className="rating justify-center">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star"  />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked/>
</div>
    <p>With years of experience, there's not much George can't handle when it comes to grooming. He holds a multi skill set and works as a master barber and a men's hair stylist as a specialist in full restyles. Works by appointment so booking is advisable.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="http://placebeard.it/z/400x225"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Chris the Barber</h2><div className="rating justify-center">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star"  />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked/>
</div>
    <p>He's has a combined skill set as a Barber and Hairdresser with over 15 years experience. Chris loves to tackle a big beard and carrying out facial treatments. He caters classic and designer fashion cuts and loves a challenge. If you are ok with a chin wag then he's your man.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="http://placebeard.it/h/400x225"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Bob the Barber!</h2><div className="rating justify-center">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star"  />
  <input type="radio" name="rating-1" className="mask mask-star" checked/>
</div>
    <p>Bob has built up a strong reputation in Vienna due to his great cuts and masterful beard trims. He gets regular 5 star reviews not only for his cuts, but also for an enjoyable chat and all round great experience.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="http://placebeard.it/b/400x225" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Emil the Barber!</h2><div className="rating justify-center">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star"  />
  <input type="radio" name="rating-1" className="mask mask-star" checked/>
</div>
    <p>Emil joined our team in 2017 and during his time with us has shown continual professional growth. Every day he consistently executes quality services paying close attention to the smallest details. Emil is a very creative person and also a great conversationalist.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
</div>
{/* Footer */}
<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>Beardly Industries Ltd.<br/>Providing reliable beards since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    </>
  )
}

export default App



const Countdown = () => {
  const timer = useTimer({
      create: {
          timerWithDuration: {
              time: { 
                  hours: 1,
                  minutes: 15,
                  seconds: 30
              }
          }
      }
  });
  return (
      <span className="countdown font-mono text-4xl">50% OFF ALL PRODUCTS - Sale Ends: {timer.timerText}<br></br><br></br>Meet our Barbers!</span>
  );
}
