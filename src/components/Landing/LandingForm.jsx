import NeetoCalEmbed from './NeetoCalEmbed';
import { useTranslation } from 'react-i18next';

export default function LandingForm() {
  const { t } = useTranslation('form');

  return (
    <section className="sec--area mt-5 form-booking" id="Formulario">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 colum-1">
            <h3 className="w_color f--size-50 f_600">{t('form_title')}</h3>
            <p className="w_color">info@dreamcodesoft.com</p>
          </div>
          <div className="col-lg-8 colum-2">
            <div className="dataform">
              <NeetoCalEmbed
                scriptUrl="https://dreamcodesoft.neetocal.com/javascript/embed.js"
                embedId="30b41c15-ba54-4a38-aa32-3960ebe73330"
                organization="dreamcodesoft"
                height="900px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
