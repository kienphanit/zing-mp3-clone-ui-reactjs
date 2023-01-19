import {
  faBackwardStep,
  faEllipsis,
  faForwardStep,
  faHeart,
  faListCheck,
  faMicrophone,
  faPause,
  faPlay,
  faRotateRight,
  faShuffle,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.left)}>
        <img
          src="https://i.pinimg.com/564x/a3/20/2b/a3202b100e1bedd77c2aa2e4ac538390.jpg"
          alt=""
        />
        <div className={clsx(style.info)}>
          <h1 className={clsx(style.namesong)}>Dandelions</h1>
          <p className={clsx(style.namesinger)}>Ruth B.</p>
        </div>
        <FontAwesomeIcon icon={faHeart} className={clsx(style.icon)} />
        <FontAwesomeIcon icon={faEllipsis} className={clsx(style.icon)} />
      </div>

      <div className={clsx(style.menu)}>
        <div className={clsx(style.listMenu)}>
          <div  className={clsx(style.item)}>
            <FontAwesomeIcon icon={faShuffle} className={clsx(style.icon)} />
          </div>
          <div  className={clsx(style.item)}>
            <FontAwesomeIcon
              icon={faBackwardStep}
              className={clsx(style.icon)}
            />
          </div>
          <div  className={clsx(style.item)}>
          <FontAwesomeIcon icon={faPlay} className={clsx(style.icon)} />
            {/* <FontAwesomeIcon icon={faPause} className={clsx(style.icon)}/> */}
          </div>
          <div  className={clsx(style.item)}>
            <FontAwesomeIcon
              icon={faForwardStep}
              className={clsx(style.icon)}
            />
          </div >
          <div className={clsx(style.item)}>
            <FontAwesomeIcon
              icon={faRotateRight}
              className={clsx(style.icon)}
            />
          </div>
        </div>

        <div className={clsx(style.timer)}>
          <p className={clsx(style.time)}>3:40</p>
          <div className={clsx(style.duration)}></div>
          <p className={clsx(style.time)}>4:20</p>
        </div>
      </div>

      <div className={clsx(style.right)}>
        <FontAwesomeIcon icon={faMicrophone} className={clsx(style.icon)} />
        <FontAwesomeIcon icon={faVolumeHigh} className={clsx(style.icon)} />
        <div className={clsx(style.volume)}></div>
        <FontAwesomeIcon icon={faListCheck} className={clsx(style.icon)} />
      </div>
    </div>
  );
};

export default Footer;
