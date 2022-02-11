import React, { useState } from 'react'
import Button from '../Button'
import './style.css'
import mainImgDiscover from '../../img/main-img-discover.png'
import animation from '../../img/animation.gif'
import imgAmazonUnion from '../../img/img-amazon-union.png'
import imgLeters from '../../img/img-leters.png'
import imgWeek from '../../img/img-week.png'
import imgBook from '../../img/img-book.png'
import imgVector1 from '../../img/img-vector1.png'
import imgVector2 from '../../img/img-vector2.png'
import imgIPhone from '../../img/img-iPhone.png'
import mainItemLogo from '../../img/main-item-logo.png'
import star from '../../img/star.png'
import photo1 from '../../img/photo1.png'
import photo2 from '../../img/photo2.png'
import photo3 from '../../img/photo3.png'
import photo4 from '../../img/photo4.png'
import appStore from '../../img/app-store.png'
import googlePlay from '../../img/google-play.png'
import starsistore from '../../img/starsistore.png'
import starspmarket from '../../img/starspmarket.png'
import mountain from '../../img/mountain.png'
import smile from '../../img/smile.png'
import creditCard from '../../img/credit-card.png'
import speaker from '../../img/speaker.png'
import apple from '../../img/apple.png'
import planet from '../../img/planet.png'
import hourglass from '../../img/hourglass.png'
import lock from '../../img/lock.png'
import heart from '../../img/heart.png'
import ball from '../../img/ball.png'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import img6 from '../../img/img6.png'
import img7 from '../../img/img7.png'
import img8 from '../../img/img8.png'
import img9 from '../../img/img9.png'
import img10 from '../../img/img10.png'
import img11 from '../../img/img11.png'
import img12 from '../../img/img12.png'
import img13 from '../../img/img13.png'
import img14 from '../../img/img14.png'
import img15 from '../../img/img15.png'
import img16 from '../../img/img16.png'
import imgToListen from '../../img/img-to-listen.png'
import imgToRead from '../../img/img-to-read.png'

const Main = () => {

   const [check, SetCheck] = useState(false)

   const checkboxCheck = () => {
      if (check === false) {
         SetCheck(true)
      } else {
         SetCheck(false)
      }
   }

   return (
      <main className='main'>
         <ul className='main__section-list'>
            <li className='main__section-item'>
               <h3 className='main__section-item-header'>Become a better you</h3>
               <p className='main__section-item-text'>with 15-min bite-sized reads and audios of the world’s best nonfiction books</p>
               <img src={animation} alt="animation" className='main__section-item-animation' />
               <div className='main__section-item-btn'>
                  <Button />
               </div>
               <img src={mainImgDiscover} className='main__section-item-img-discover' />
            </li>
            <li className='main__section-item'>
               <h3 className='main__section-item-header'>Get smarter with the least effort</h3>
               <img src={imgAmazonUnion} alt="imgAmazonUnion" className='main__section-item-img-amazon-union' />
               <h4 className='main__section-item-heading'>Learn from the best</h4>
               <p className='main__section-item-text'>Highlighted by top reviewers, we picked only the most outstanding bestsellers for you.</p>
               <img src={imgLeters} alt="imgLeters" className='main__section-item-img-leters' />
               <h4 className='main__section-item-heading'>Get key insights</h4>
               <p className='main__section-item-text'>Major ideas in a bite-sized form. Long reads no more!</p>
               <img src={imgWeek} alt="imgWeek" className='main__section-item-img-week' />
               <h4 className='main__section-item-heading'>Build a reading habit</h4>
               <p className='main__section-item-text'>Consistency is the key to top performance. Only 15 minutes per day to make reading your brand new habit!</p>
            </li>
            <li className='main__section-item'>
               <h3 className='main__section-item-header'>Summary is the new black</h3>
               <p className='main__section-item-text'>Use summaries: comprehensive 15-min abstracts from nonfiction books with the main concepts and recommendations.</p>
               <img src={imgBook} alt="imgBook" className='main__section-item-img-book' />
               <h5 className='main__section-item-small-heading'>Typical book</h5>
               <p className='main__section-item-text-light'>320 pages ~ 20 hours</p>
               <img src={imgVector1} alt="imgVector1" className='main__section-item-img-vector1' />
               <h5 className='main__section-item-small-heading'>Key ideas & insights</h5>
               <img src={imgVector2} alt="imgVector2" className='main__section-item-img-vector2' />
               <img src={imgIPhone} alt="imgIPhone" className='main__section-item-img-iPhone' />
               <h5 className='main__section-item-small-heading'>Summary</h5>
               <p className='main__section-item-text-light'>~ 15 minutes</p>
            </li>
            <li className='main__section-item'>
               <h3 className='main__section-item-header'>Determine your goal and go ahead!</h3>
               <p className='main__section-item-text'>Learn something new every day from Self-Growth, Happiness, Money, Health, and many other categories. Benefit from unlimited access to world best thoughts.</p>
               <ul className='main__section-item_list-categories'>
                  <li className='main__section-item_list-category'>All categories</li>
                  <li className='main__section-item_list-category'>
                     <img src={mountain} alt="mountain" />
                     <span>Self-Growth</span>
                  </li>
                  <li className='main__section-item_list-category'>
                     <img src={smile} alt="smile" />
                     <span>Happiness</span>
                  </li>
                  <li className='main__section-item_list-category'>
                     <img src={creditCard} alt="creditCard" />
                     <span>Money & Investment</span>
                  </li>
                  <li className='main__section-item_list-category'>
                     <img src={speaker} alt="speaker" />
                     <span>Negotiation</span>
                  </li>
                  <li className='main__section-item_list-category'>
                     <img src={apple} alt="apple" />
                     <span>Health</span>
                  </li>
                  <li className='main__section-item_list-category'>
                     <img src={planet} alt="planet" />
                     <span>Spirituality</span>
                  </li>
                  <li className='main__section-item_list-category'>
                     <img src={hourglass} alt="hourglass" />
                     <span>Productivity</span>
                  </li>
                  <li className='main__section-item_list-category'>
                     <img src={lock} alt="lock" />
                     <span>Business & Career</span>
                  </li>
                  <li className='main__section-item_list-category'>
                     <img src={heart} alt="heart" />
                     <span>Love & Sex</span>
                  </li>
                  <li className='main__section-item_list-category'>
                     <img src={ball} alt="ball" />
                     <span>Sports & Fitness</span>
                  </li>
               </ul>
               <ul className='main__section-item_list-images'>
                  <li><img src={img1} alt="img1" /></li>
                  <li><img src={img2} alt="img2" /></li>
                  <li><img src={img3} alt="img3" /></li>
                  <li><img src={img4} alt="img4" /></li>
                  <li><img src={img5} alt="img5" /></li>
                  <li><img src={img6} alt="img6" /></li>
                  <li><img src={img7} alt="img7" /></li>
                  <li><img src={img8} alt="img8" /></li>
                  <li><img src={img9} alt="img9" /></li>
                  <li><img src={img10} alt="img10" /></li>
                  <li><img src={img11} alt="img11" /></li>
                  <li><img src={img12} alt="img12" /></li>
                  <li><img src={img13} alt="img13" /></li>
                  <li><img src={img14} alt="img14" /></li>
                  <li><img src={img15} alt="img15" /></li>
                  <li><img src={img16} alt="img16" /></li>
               </ul>
            </li>
            <li className='main__section-item'>
               <h3 className='main__section-item-header'>Read or Listen</h3>
               <p className='main__section-item-text'>Commuting, jogging, or stuck in line? Enjoy the best books in a condensed format. Summaries have an audio version, narrated by professional voice actors.</p>
               <div className="toggleWrapper">
                  <input type="checkbox" className="dn" id="dn" onClick={checkboxCheck} />
                  <label htmlFor="dn" className="toggle">
                     <span className="toggle__handler"></span>
                  </label>
               </div>
               {!check ? <img src={imgToListen} alt="imgToListen" className='main__section-item-img-listen' />
                  : <img src={imgToRead} alt="imgToRead" className='main__section-item-img-read' />}


            </li>
            <li className='main__section-item'>
               <h3 className='main__section-item-header'>People love the Headway app</h3>
               <p className='main__section-item-text'>Become a member of our global community of <span className='color-blue'>7 million people</span></p>
               <ul className='main__section-item__list'>
                  <li className='main__section-item__list-item'>
                     <div className='main__section-item__list-item-stars'>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                     </div>
                     <p className='main__section-item__list-item-text'>This app simplifies books into super condensed but easy-to-digest snippets. Listened to almost all of the Art of Saying No during my warm up/stretch sesh today. A powerful tool I recommend to anyone who’s busy and can’t find time to sit down to read!</p>
                     <div className='main__section-item__list-item-info'>
                        <img src={photo2} alt="photo2" />
                        <span className='main__section-item__list-item-info-name'>mr.rageright</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M3.57664 6.99994C3.57664 5.10921 5.10934 3.5765 7.00007 3.5765C8.89077 3.5765 10.4235 5.10921 10.4235 6.99994C10.4235 8.89064 8.89077 10.4233 7.00007 10.4233C5.10934 10.4233 3.57664 8.89064 3.57664 6.99994ZM4.77785 6.99994C4.77785 8.22723 5.77276 9.22214 7.00008 9.22214C8.22738 9.22214 9.22229 8.22723 9.22229 6.99994C9.22229 5.77262 8.22738 4.7777 7.00008 4.7777C5.77276 4.7777 4.77785 5.77262 4.77785 6.99994Z" fill="black" fillOpacity="0.4" />
                           <path d="M10.5587 4.24123C11.0006 4.24123 11.3587 3.88308 11.3587 3.44125C11.3587 2.99941 11.0006 2.64123 10.5587 2.64123C10.1169 2.64123 9.75874 2.99941 9.75874 3.44125C9.75874 3.88308 10.1169 4.24123 10.5587 4.24123Z" fill="black" fillOpacity="0.4" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M7.00005 0.333252C5.18948 0.333252 4.96245 0.340926 4.25138 0.37337C3.54179 0.405735 3.05717 0.518443 2.63312 0.683257C2.19473 0.853601 1.82294 1.08156 1.4523 1.45218C1.08168 1.82282 0.853723 2.19461 0.683379 2.633C0.518565 3.05705 0.405857 3.54167 0.373493 4.25126C0.341048 4.96233 0.333374 5.18936 0.333374 6.99993C0.333374 8.81048 0.341048 9.03751 0.373493 9.74858C0.405857 10.4582 0.518565 10.9428 0.683379 11.3668C0.853723 11.8052 1.08168 12.177 1.4523 12.5477C1.82294 12.9183 2.19473 13.1462 2.63312 13.3166C3.05717 13.4814 3.54179 13.5941 4.25138 13.6265C4.96245 13.6589 5.18948 13.6666 7.00005 13.6666C8.8106 13.6666 9.03763 13.6589 9.7487 13.6265C10.4583 13.5941 10.9429 13.4814 11.367 13.3166C11.8054 13.1462 12.1771 12.9183 12.5478 12.5477C12.9184 12.177 13.1464 11.8052 13.3167 11.3668C13.4815 10.9428 13.5942 10.4582 13.6266 9.74858C13.659 9.03751 13.6667 8.81048 13.6667 6.99993C13.6667 5.18936 13.659 4.96233 13.6266 4.25126C13.5942 3.54167 13.4815 3.05705 13.3167 2.633C13.1464 2.19461 12.9184 1.82282 12.5478 1.45218C12.1771 1.08156 11.8054 0.853601 11.367 0.683257C10.9429 0.518443 10.4583 0.405735 9.7487 0.37337C9.03763 0.340926 8.8106 0.333252 7.00005 0.333252ZM7.00005 1.53445C8.78011 1.53445 8.99097 1.54125 9.69394 1.57333C10.3439 1.60297 10.6969 1.71157 10.9318 1.80287C11.243 1.92381 11.4651 2.06827 11.6984 2.30157C11.9317 2.53485 12.0761 2.75693 12.1971 3.06811C12.2884 3.30303 12.397 3.65602 12.4266 4.30602C12.4587 5.00899 12.4655 5.21985 12.4655 6.99994C12.4655 8.77999 12.4587 8.99085 12.4266 9.69383C12.397 10.3438 12.2884 10.6968 12.1971 10.9317C12.0761 11.2429 11.9317 11.465 11.6984 11.6983C11.4651 11.9316 11.243 12.076 10.9318 12.197C10.6969 12.2883 10.3439 12.3969 9.69394 12.4265C8.99108 12.4586 8.78024 12.4654 7.00005 12.4654C5.21983 12.4654 5.00903 12.4586 4.30613 12.4265C3.65614 12.3969 3.30314 12.2883 3.06823 12.197C2.75704 12.076 2.53496 11.9316 2.30169 11.6983C2.06841 11.465 1.92392 11.2429 1.80299 10.9317C1.71169 10.6968 1.60308 10.3438 1.57344 9.69383C1.54137 8.99085 1.53457 8.77999 1.53457 6.99994C1.53457 5.21985 1.54137 5.00899 1.57344 4.30602C1.60308 3.65602 1.71169 3.30303 1.80299 3.06811C1.92392 2.75693 2.06839 2.53485 2.30169 2.30157C2.53496 2.06827 2.75704 1.92381 3.06823 1.80287C3.30314 1.71157 3.65614 1.60297 4.30613 1.57333C5.0091 1.54125 5.21996 1.53445 7.00005 1.53445Z" fill="black" fillOpacity="0.4" />
                        </svg>
                     </div>
                  </li>
                  <li className='main__section-item__list-item'>
                     <div className='main__section-item__list-item-stars'>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                     </div>
                     <p className='main__section-item__list-item-text'>Headway app is one of the best investments I’ve ever made into myself outside of spiritual stuff. Summarized books that you can read or listen to!</p>
                     <div className='main__section-item__list-item-info'>
                        <img src={photo3} alt="photo3" />
                        <span className='main__section-item__list-item-info-name'>mcogbonna</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M3.57664 6.99994C3.57664 5.10921 5.10934 3.5765 7.00007 3.5765C8.89077 3.5765 10.4235 5.10921 10.4235 6.99994C10.4235 8.89064 8.89077 10.4233 7.00007 10.4233C5.10934 10.4233 3.57664 8.89064 3.57664 6.99994ZM4.77785 6.99994C4.77785 8.22723 5.77276 9.22214 7.00008 9.22214C8.22738 9.22214 9.22229 8.22723 9.22229 6.99994C9.22229 5.77262 8.22738 4.7777 7.00008 4.7777C5.77276 4.7777 4.77785 5.77262 4.77785 6.99994Z" fill="black" fillOpacity="0.4" />
                           <path d="M10.5587 4.24123C11.0006 4.24123 11.3587 3.88308 11.3587 3.44125C11.3587 2.99941 11.0006 2.64123 10.5587 2.64123C10.1169 2.64123 9.75874 2.99941 9.75874 3.44125C9.75874 3.88308 10.1169 4.24123 10.5587 4.24123Z" fill="black" fillOpacity="0.4" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M7.00005 0.333252C5.18948 0.333252 4.96245 0.340926 4.25138 0.37337C3.54179 0.405735 3.05717 0.518443 2.63312 0.683257C2.19473 0.853601 1.82294 1.08156 1.4523 1.45218C1.08168 1.82282 0.853723 2.19461 0.683379 2.633C0.518565 3.05705 0.405857 3.54167 0.373493 4.25126C0.341048 4.96233 0.333374 5.18936 0.333374 6.99993C0.333374 8.81048 0.341048 9.03751 0.373493 9.74858C0.405857 10.4582 0.518565 10.9428 0.683379 11.3668C0.853723 11.8052 1.08168 12.177 1.4523 12.5477C1.82294 12.9183 2.19473 13.1462 2.63312 13.3166C3.05717 13.4814 3.54179 13.5941 4.25138 13.6265C4.96245 13.6589 5.18948 13.6666 7.00005 13.6666C8.8106 13.6666 9.03763 13.6589 9.7487 13.6265C10.4583 13.5941 10.9429 13.4814 11.367 13.3166C11.8054 13.1462 12.1771 12.9183 12.5478 12.5477C12.9184 12.177 13.1464 11.8052 13.3167 11.3668C13.4815 10.9428 13.5942 10.4582 13.6266 9.74858C13.659 9.03751 13.6667 8.81048 13.6667 6.99993C13.6667 5.18936 13.659 4.96233 13.6266 4.25126C13.5942 3.54167 13.4815 3.05705 13.3167 2.633C13.1464 2.19461 12.9184 1.82282 12.5478 1.45218C12.1771 1.08156 11.8054 0.853601 11.367 0.683257C10.9429 0.518443 10.4583 0.405735 9.7487 0.37337C9.03763 0.340926 8.8106 0.333252 7.00005 0.333252ZM7.00005 1.53445C8.78011 1.53445 8.99097 1.54125 9.69394 1.57333C10.3439 1.60297 10.6969 1.71157 10.9318 1.80287C11.243 1.92381 11.4651 2.06827 11.6984 2.30157C11.9317 2.53485 12.0761 2.75693 12.1971 3.06811C12.2884 3.30303 12.397 3.65602 12.4266 4.30602C12.4587 5.00899 12.4655 5.21985 12.4655 6.99994C12.4655 8.77999 12.4587 8.99085 12.4266 9.69383C12.397 10.3438 12.2884 10.6968 12.1971 10.9317C12.0761 11.2429 11.9317 11.465 11.6984 11.6983C11.4651 11.9316 11.243 12.076 10.9318 12.197C10.6969 12.2883 10.3439 12.3969 9.69394 12.4265C8.99108 12.4586 8.78024 12.4654 7.00005 12.4654C5.21983 12.4654 5.00903 12.4586 4.30613 12.4265C3.65614 12.3969 3.30314 12.2883 3.06823 12.197C2.75704 12.076 2.53496 11.9316 2.30169 11.6983C2.06841 11.465 1.92392 11.2429 1.80299 10.9317C1.71169 10.6968 1.60308 10.3438 1.57344 9.69383C1.54137 8.99085 1.53457 8.77999 1.53457 6.99994C1.53457 5.21985 1.54137 5.00899 1.57344 4.30602C1.60308 3.65602 1.71169 3.30303 1.80299 3.06811C1.92392 2.75693 2.06839 2.53485 2.30169 2.30157C2.53496 2.06827 2.75704 1.92381 3.06823 1.80287C3.30314 1.71157 3.65614 1.60297 4.30613 1.57333C5.0091 1.54125 5.21996 1.53445 7.00005 1.53445Z" fill="black" fillOpacity="0.4" />
                        </svg>
                     </div>
                  </li>
                  <li className='main__section-item__list-item'>
                     <div className='main__section-item__list-item-stars'>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                     </div>
                     <p className='main__section-item__list-item-text'>In case you often find a book you just started — the Headway app is for you. It’s an audiobook reader that summarized all the key lessons in that great book you’ve been aspiring to read, but you didn’t finish.</p>
                     <div className='main__section-item__list-item-info'>
                        <img src={photo4} alt="photo4" />
                        <span className='main__section-item__list-item-info-name'>thefinestyler</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M3.57664 6.99994C3.57664 5.10921 5.10934 3.5765 7.00007 3.5765C8.89077 3.5765 10.4235 5.10921 10.4235 6.99994C10.4235 8.89064 8.89077 10.4233 7.00007 10.4233C5.10934 10.4233 3.57664 8.89064 3.57664 6.99994ZM4.77785 6.99994C4.77785 8.22723 5.77276 9.22214 7.00008 9.22214C8.22738 9.22214 9.22229 8.22723 9.22229 6.99994C9.22229 5.77262 8.22738 4.7777 7.00008 4.7777C5.77276 4.7777 4.77785 5.77262 4.77785 6.99994Z" fill="black" fillOpacity="0.4" />
                           <path d="M10.5587 4.24123C11.0006 4.24123 11.3587 3.88308 11.3587 3.44125C11.3587 2.99941 11.0006 2.64123 10.5587 2.64123C10.1169 2.64123 9.75874 2.99941 9.75874 3.44125C9.75874 3.88308 10.1169 4.24123 10.5587 4.24123Z" fill="black" fillOpacity="0.4" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M7.00005 0.333252C5.18948 0.333252 4.96245 0.340926 4.25138 0.37337C3.54179 0.405735 3.05717 0.518443 2.63312 0.683257C2.19473 0.853601 1.82294 1.08156 1.4523 1.45218C1.08168 1.82282 0.853723 2.19461 0.683379 2.633C0.518565 3.05705 0.405857 3.54167 0.373493 4.25126C0.341048 4.96233 0.333374 5.18936 0.333374 6.99993C0.333374 8.81048 0.341048 9.03751 0.373493 9.74858C0.405857 10.4582 0.518565 10.9428 0.683379 11.3668C0.853723 11.8052 1.08168 12.177 1.4523 12.5477C1.82294 12.9183 2.19473 13.1462 2.63312 13.3166C3.05717 13.4814 3.54179 13.5941 4.25138 13.6265C4.96245 13.6589 5.18948 13.6666 7.00005 13.6666C8.8106 13.6666 9.03763 13.6589 9.7487 13.6265C10.4583 13.5941 10.9429 13.4814 11.367 13.3166C11.8054 13.1462 12.1771 12.9183 12.5478 12.5477C12.9184 12.177 13.1464 11.8052 13.3167 11.3668C13.4815 10.9428 13.5942 10.4582 13.6266 9.74858C13.659 9.03751 13.6667 8.81048 13.6667 6.99993C13.6667 5.18936 13.659 4.96233 13.6266 4.25126C13.5942 3.54167 13.4815 3.05705 13.3167 2.633C13.1464 2.19461 12.9184 1.82282 12.5478 1.45218C12.1771 1.08156 11.8054 0.853601 11.367 0.683257C10.9429 0.518443 10.4583 0.405735 9.7487 0.37337C9.03763 0.340926 8.8106 0.333252 7.00005 0.333252ZM7.00005 1.53445C8.78011 1.53445 8.99097 1.54125 9.69394 1.57333C10.3439 1.60297 10.6969 1.71157 10.9318 1.80287C11.243 1.92381 11.4651 2.06827 11.6984 2.30157C11.9317 2.53485 12.0761 2.75693 12.1971 3.06811C12.2884 3.30303 12.397 3.65602 12.4266 4.30602C12.4587 5.00899 12.4655 5.21985 12.4655 6.99994C12.4655 8.77999 12.4587 8.99085 12.4266 9.69383C12.397 10.3438 12.2884 10.6968 12.1971 10.9317C12.0761 11.2429 11.9317 11.465 11.6984 11.6983C11.4651 11.9316 11.243 12.076 10.9318 12.197C10.6969 12.2883 10.3439 12.3969 9.69394 12.4265C8.99108 12.4586 8.78024 12.4654 7.00005 12.4654C5.21983 12.4654 5.00903 12.4586 4.30613 12.4265C3.65614 12.3969 3.30314 12.2883 3.06823 12.197C2.75704 12.076 2.53496 11.9316 2.30169 11.6983C2.06841 11.465 1.92392 11.2429 1.80299 10.9317C1.71169 10.6968 1.60308 10.3438 1.57344 9.69383C1.54137 8.99085 1.53457 8.77999 1.53457 6.99994C1.53457 5.21985 1.54137 5.00899 1.57344 4.30602C1.60308 3.65602 1.71169 3.30303 1.80299 3.06811C1.92392 2.75693 2.06839 2.53485 2.30169 2.30157C2.53496 2.06827 2.75704 1.92381 3.06823 1.80287C3.30314 1.71157 3.65614 1.60297 4.30613 1.57333C5.0091 1.54125 5.21996 1.53445 7.00005 1.53445Z" fill="black" fillOpacity="0.4" />
                        </svg>
                     </div>
                  </li>
                  <li className='main__section-item__list-item'>
                     <div className='main__section-item__list-item-stars'>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                     </div>
                     <p className='main__section-item__list-item-text'>So excited for my latest app subscription for self-growth! You can set reading goals, take challenges or read offline! 🤓</p>
                     <div className='main__section-item__list-item-info'>
                        <img src={photo1} alt="photo1" />
                        <span className='main__section-item__list-item-info-name'>thisinnagirl</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M3.57664 6.99994C3.57664 5.10921 5.10934 3.5765 7.00007 3.5765C8.89077 3.5765 10.4235 5.10921 10.4235 6.99994C10.4235 8.89064 8.89077 10.4233 7.00007 10.4233C5.10934 10.4233 3.57664 8.89064 3.57664 6.99994ZM4.77785 6.99994C4.77785 8.22723 5.77276 9.22214 7.00008 9.22214C8.22738 9.22214 9.22229 8.22723 9.22229 6.99994C9.22229 5.77262 8.22738 4.7777 7.00008 4.7777C5.77276 4.7777 4.77785 5.77262 4.77785 6.99994Z" fill="black" fillOpacity="0.4" />
                           <path d="M10.5587 4.24123C11.0006 4.24123 11.3587 3.88308 11.3587 3.44125C11.3587 2.99941 11.0006 2.64123 10.5587 2.64123C10.1169 2.64123 9.75874 2.99941 9.75874 3.44125C9.75874 3.88308 10.1169 4.24123 10.5587 4.24123Z" fill="black" fillOpacity="0.4" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M7.00005 0.333252C5.18948 0.333252 4.96245 0.340926 4.25138 0.37337C3.54179 0.405735 3.05717 0.518443 2.63312 0.683257C2.19473 0.853601 1.82294 1.08156 1.4523 1.45218C1.08168 1.82282 0.853723 2.19461 0.683379 2.633C0.518565 3.05705 0.405857 3.54167 0.373493 4.25126C0.341048 4.96233 0.333374 5.18936 0.333374 6.99993C0.333374 8.81048 0.341048 9.03751 0.373493 9.74858C0.405857 10.4582 0.518565 10.9428 0.683379 11.3668C0.853723 11.8052 1.08168 12.177 1.4523 12.5477C1.82294 12.9183 2.19473 13.1462 2.63312 13.3166C3.05717 13.4814 3.54179 13.5941 4.25138 13.6265C4.96245 13.6589 5.18948 13.6666 7.00005 13.6666C8.8106 13.6666 9.03763 13.6589 9.7487 13.6265C10.4583 13.5941 10.9429 13.4814 11.367 13.3166C11.8054 13.1462 12.1771 12.9183 12.5478 12.5477C12.9184 12.177 13.1464 11.8052 13.3167 11.3668C13.4815 10.9428 13.5942 10.4582 13.6266 9.74858C13.659 9.03751 13.6667 8.81048 13.6667 6.99993C13.6667 5.18936 13.659 4.96233 13.6266 4.25126C13.5942 3.54167 13.4815 3.05705 13.3167 2.633C13.1464 2.19461 12.9184 1.82282 12.5478 1.45218C12.1771 1.08156 11.8054 0.853601 11.367 0.683257C10.9429 0.518443 10.4583 0.405735 9.7487 0.37337C9.03763 0.340926 8.8106 0.333252 7.00005 0.333252ZM7.00005 1.53445C8.78011 1.53445 8.99097 1.54125 9.69394 1.57333C10.3439 1.60297 10.6969 1.71157 10.9318 1.80287C11.243 1.92381 11.4651 2.06827 11.6984 2.30157C11.9317 2.53485 12.0761 2.75693 12.1971 3.06811C12.2884 3.30303 12.397 3.65602 12.4266 4.30602C12.4587 5.00899 12.4655 5.21985 12.4655 6.99994C12.4655 8.77999 12.4587 8.99085 12.4266 9.69383C12.397 10.3438 12.2884 10.6968 12.1971 10.9317C12.0761 11.2429 11.9317 11.465 11.6984 11.6983C11.4651 11.9316 11.243 12.076 10.9318 12.197C10.6969 12.2883 10.3439 12.3969 9.69394 12.4265C8.99108 12.4586 8.78024 12.4654 7.00005 12.4654C5.21983 12.4654 5.00903 12.4586 4.30613 12.4265C3.65614 12.3969 3.30314 12.2883 3.06823 12.197C2.75704 12.076 2.53496 11.9316 2.30169 11.6983C2.06841 11.465 1.92392 11.2429 1.80299 10.9317C1.71169 10.6968 1.60308 10.3438 1.57344 9.69383C1.54137 8.99085 1.53457 8.77999 1.53457 6.99994C1.53457 5.21985 1.54137 5.00899 1.57344 4.30602C1.60308 3.65602 1.71169 3.30303 1.80299 3.06811C1.92392 2.75693 2.06839 2.53485 2.30169 2.30157C2.53496 2.06827 2.75704 1.92381 3.06823 1.80287C3.30314 1.71157 3.65614 1.60297 4.30613 1.57333C5.0091 1.54125 5.21996 1.53445 7.00005 1.53445Z" fill="black" fillOpacity="0.4" />
                        </svg>
                     </div>
                  </li>
                  <li className='main__section-item__list-item'>
                     <div className='main__section-item__list-item-rating-section'>
                        <div className='main__section-item__list-item-rating'>
                           <span className='main__section-item__list-item-rating-num num-blue'>4.7</span>
                           <img src={appStore} alt="appStore" className='main__section-item__list-item-rating-img' />
                        </div>
                        <img src={starsistore} alt="starsistore" className='main__section-item__list-item-rating-stars' />
                        <p className='main__section-item__list-item-rating-info'>50K ratings</p>
                     </div>
                     <div className='main__section-item__list-item-rating-section'>
                        <div className='main__section-item__list-item-rating'>
                           <span className='main__section-item__list-item-rating-num num-green'>4.2</span>
                           <img src={googlePlay} alt="googlePlay" className='main__section-item__list-item-rating-img' />
                        </div>
                        <img src={starspmarket} alt="starspmarket" className='main__section-item__list-item-rating-stars' />
                        <p className='main__section-item__list-item-rating-info'>31k ratings</p>
                     </div>
                  </li>
               </ul>
            </li>
            <li className='main__section-item'>
               <img src={mainItemLogo} alt="mainItemLogo" className='main__section-item-logo' />
               <h3 className='main__section-item-header txt-aling-start'>Empower yourself with the best books insights</h3>
               <p className='main__section-item-text mg-top-24'>Social media:</p>
               <div className='main__section-item-svg'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='main__section-item-svg-item'>
                     <path fillRule="evenodd" clipRule="evenodd" d="M22.5222 12.0611C22.5222 6.28353 17.8385 1.59985 12.0609 1.59985C6.28329 1.59985 1.59961 6.28353 1.59961 12.0611C1.59961 17.2827 5.42515 21.6106 10.4263 22.3954V15.0851H7.77014V12.0611H10.4263V9.7564C10.4263 7.13453 11.9881 5.6863 14.3777 5.6863C15.5223 5.6863 16.7195 5.89062 16.7195 5.89062V8.46508H15.4003C14.1008 8.46508 13.6955 9.27148 13.6955 10.0988V12.0611H16.5969L16.133 15.0851H13.6955V22.3954C18.6967 21.6106 22.5222 17.2827 22.5222 12.0611Z" fill="black" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='main__section-item-svg-item'>
                     <path fillRule="evenodd" clipRule="evenodd" d="M6.86495 12C6.86495 9.16393 9.16401 6.86487 12.0001 6.86487C14.8362 6.86487 17.1352 9.16393 17.1352 12C17.1352 14.8361 14.8362 17.1351 12.0001 17.1351C9.16401 17.1351 6.86495 14.8361 6.86495 12ZM8.66677 12C8.66677 13.841 10.1591 15.3333 12.0001 15.3333C13.8411 15.3333 15.3334 13.841 15.3334 12C15.3334 10.159 13.8411 8.66667 12.0001 8.66667C10.1591 8.66667 8.66677 10.159 8.66677 12Z" fill="black" />
                     <path d="M17.3381 7.86197C18.0008 7.86197 18.5381 7.32474 18.5381 6.66199C18.5381 5.99924 18.0008 5.46197 17.3381 5.46197C16.6754 5.46197 16.1381 5.99924 16.1381 6.66199C16.1381 7.32474 16.6754 7.86197 17.3381 7.86197Z" fill="black" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 2C9.28422 2 8.94368 2.01151 7.87707 2.06018C6.81269 2.10872 6.08575 2.27779 5.44968 2.52501C4.79209 2.78052 4.23442 3.12246 3.67845 3.67839C3.12252 4.23436 2.78059 4.79203 2.52507 5.44962C2.27785 6.08569 2.10879 6.81263 2.06024 7.87701C2.01157 8.94362 2.00006 9.28416 2.00006 12C2.00006 14.7158 2.01157 15.0564 2.06024 16.123C2.10879 17.1874 2.27785 17.9143 2.52507 18.5504C2.78059 19.208 3.12252 19.7656 3.67845 20.3216C4.23442 20.8775 4.79209 21.2195 5.44968 21.475C6.08575 21.7222 6.81269 21.8913 7.87707 21.9398C8.94368 21.9885 9.28422 22 12.0001 22C14.7159 22 15.0564 21.9885 16.123 21.9398C17.1874 21.8913 17.9144 21.7222 18.5504 21.475C19.208 21.2195 19.7657 20.8775 20.3217 20.3216C20.8776 19.7656 21.2195 19.208 21.4751 18.5504C21.7223 17.9143 21.8913 17.1874 21.9399 16.123C21.9886 15.0564 22.0001 14.7158 22.0001 12C22.0001 9.28416 21.9886 8.94362 21.9399 7.87701C21.8913 6.81263 21.7223 6.08569 21.4751 5.44962C21.2195 4.79203 20.8776 4.23436 20.3217 3.67839C19.7657 3.12246 19.208 2.78052 18.5504 2.52501C17.9144 2.27779 17.1874 2.10872 16.123 2.06018C15.0564 2.01151 14.7159 2 12.0001 2ZM12.0001 3.8018C14.6702 3.8018 14.9865 3.812 16.0409 3.86011C17.0159 3.90457 17.5454 4.06748 17.8978 4.20443C18.3645 4.38584 18.6977 4.60253 19.0476 4.95248C19.3975 5.3024 19.6142 5.63552 19.7956 6.10229C19.9326 6.45466 20.0955 6.98416 20.1399 7.95915C20.1881 9.01361 20.1983 9.3299 20.1983 12C20.1983 14.6701 20.1881 14.9864 20.1399 16.0409C20.0955 17.0159 19.9326 17.5453 19.7956 17.8977C19.6142 18.3645 19.3975 18.6976 19.0476 19.0475C18.6977 19.3975 18.3645 19.6142 17.8978 19.7956C17.5454 19.9325 17.0159 20.0954 16.0409 20.1399C14.9866 20.188 14.6704 20.1982 12.0001 20.1982C9.32975 20.1982 9.01354 20.188 7.9592 20.1399C6.98421 20.0954 6.45471 19.9325 6.10234 19.7956C5.63557 19.6142 5.30245 19.3975 4.95253 19.0475C4.60262 18.6976 4.38589 18.3645 4.20448 17.8977C4.06753 17.5453 3.90462 17.0159 3.86017 16.0409C3.81205 14.9864 3.80185 14.6701 3.80185 12C3.80185 9.3299 3.81205 9.01361 3.86017 7.95915C3.90462 6.98416 4.06753 6.45466 4.20448 6.10229C4.38589 5.63552 4.60258 5.3024 4.95253 4.95248C5.30245 4.60253 5.63557 4.38584 6.10234 4.20443C6.45471 4.06748 6.98421 3.90457 7.9592 3.86011C9.01366 3.812 9.32995 3.8018 12.0001 3.8018Z" fill="black" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='main__section-item-svg-item'>
                     <path d="M8.38101 20.7655C16.5167 20.7655 20.9685 14.0188 20.9685 8.17803C20.9685 7.98822 20.9685 7.79842 20.9598 7.60861C21.8226 6.98744 22.5732 6.20234 23.1685 5.31371C22.3747 5.66744 21.5206 5.90038 20.6234 6.01254C21.5379 5.46901 22.2367 4.59763 22.5732 3.56234C21.7191 4.07136 20.77 4.43371 19.7606 4.63214C18.9496 3.7694 17.8022 3.2345 16.534 3.2345C14.0924 3.2345 12.1081 5.21881 12.1081 7.66038C12.1081 8.00548 12.1512 8.34195 12.2202 8.66979C8.54493 8.48861 5.28375 6.71999 3.10101 4.04548C2.7214 4.70116 2.50571 5.46038 2.50571 6.27136C2.50571 7.80705 3.29081 9.16156 4.47277 9.95528C3.74807 9.9294 3.0665 9.73097 2.4712 9.40312C2.4712 9.42038 2.4712 9.43763 2.4712 9.46352C2.4712 11.6031 3.99826 13.3976 6.01709 13.8031C5.64611 13.9067 5.25787 13.9584 4.85238 13.9584C4.56768 13.9584 4.2916 13.9325 4.02415 13.8808C4.58493 15.6408 6.22415 16.9176 8.1567 16.9521C6.63826 18.1427 4.7316 18.8502 2.66101 18.8502C2.30728 18.8502 1.95356 18.8329 1.60846 18.7898C3.55826 20.0321 5.88768 20.7655 8.38101 20.7655Z" fill="black" />
                  </svg>
               </div>
            </li>
         </ul>
      </main>
   )
}

export default Main