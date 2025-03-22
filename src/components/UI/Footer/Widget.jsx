import React from 'react';
import style from './footer.module.css';


function Widget({ children , titleWidget }) {
    return (
        <div className="col-lg-2 col-md-5">
          <div className={style.footer_widget}>
            <h3 className="m_color f_600 f-lg-20 mb_20">{titleWidget}</h3>
              <ul className="list-unstyled d-flex gap-2 flex-column">
                { children}
              </ul>
          </div>
        </div>
    )
  }

export default Widget;