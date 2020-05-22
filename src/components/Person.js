import React from 'react';
import Actions from './Actions';



class Person extends React.Component {





      images() {
      this.imgs.forEach(img => {
      img.addEventListener('mouseover', this.imgHover);
    });
  };







      imgHover(e) {
      const imgs = document.getElementsByClassName('imgs');

      const current = document.getElementById('current');

      const opacity = 0.4;
      //Reset the opacity
      imgs.forEach(img => (img.style.opacity =1));
      //Change current image to source of clicked image
      current.src = e.target.src;
      //Change the opacity to opacity var
      e.target.style.opacity = opacity;
    };

      videos() {
        this.vids.forEach(vid => {
          vid.addEventListener('mouseover', this.vidHover);
        })
      }


      vidHover(e) {
        const vids = document.getElementsByClassName('vids');
        const currentVid = document.getElementById('currentVid');
        const opacity = 0.4;

        vids.forEach(vid => (vid.style.opacity =1) );

        currentVid.src = e.target.src;

        e.target.style.opacity = opacity;
      }






  render() {
  const { name, desc, age, image } = this.props.person;


  return (
    <div>
      <div person={this.props.person} modifySuperficialChoices={this.props.modifySuperficialChoices} className="person">
        <div className="person-photo">
        <img id="current" src={`/images/users/${image}`} alt={name} />
        </div>
        <div onHover={this.images} className="imgs">
          <img src={`/images/users/${image}`}/>
          <img src="./images/users/2.2.jpg"/>
          <img src="./images/users/2.3.jpg"/>
          <img src="./images/users/2.4.jpg"/>
          <img src="./images/users/2.5.jpg"/>
        </div>
        <div className="container">
          <div className="main-vid">
            <video  src="../../videos/video.mov.mov" controls="controls" autoplay="autoplay" id="currentVid">

            </video>
          </div>
          <div className="vids">
            <video src="../../videos/video.mov.mov"  controls="controls" autoplay="autoplay"></video>
            <video src="../../videos/video.mov.mov"  controls="controls" autoplay="autoplay"></video>
            <video src="../../videos/video.mov.mov"  controls="controls" autoplay="autoplay"></video>
            <video src="../../videos/video.mov.mov"  controls="controls" autoplay="autoplay"></video>
            <video src="../../videos/video.mov.mov"  controls="controls" autoplay="autoplay"></video>
          </div>
        </div>

        <div className="person-description">
          <p className="person-name-age">
            {name}, <span>{age}</span>
          </p>
          <p className="person-info">{desc}</p>
        </div>
      </div>

      <Actions
        person={this.props.person}
        modifySuperficialChoices={this.props.modifySuperficialChoices}
      />
    </div>
  );
};
};


export default Person;
