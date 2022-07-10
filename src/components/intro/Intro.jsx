import React from 'react';
import { FaBook } from 'react-icons/fa';
//import { VscFolderLibrary } from 'react-icons/vsc';//
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaBook className="about__icon" />
              <h5>Education</h5>
              <center>
              <table>
              <tr>
                  <td> 2015-2017</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                 
                  <td>&emsp;</td>
                  <td> Secondry Education</td>
                </tr>
                <tr>
                  <td> 2017-2019 </td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                 
                  <td>&emsp;</td>
                  <td>Higher Secondry Education</td>
                </tr>

                <tr>
                  <td> 2019-2023 </td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td></td>
                  <td> &emsp;</td>
                  <td> GTU -[Pursuing Degree]</td>
                </tr>
                {/* <tr>
                  <td> 2022 </td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>B.E. (C.E )  running </td>
                  <td> &emsp;</td>
                  <td> GTU </td>
                </tr> */}
              </table>
              </center>
            </article>
            
          </div>
          <p>I am outgoing,dedicated,and open-minded.I get across to people and adjust to changes with ease.I believe that a person should work on developing their professional skills and learning new things all the time.Currently i am loooking for new carrer opportunities.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro