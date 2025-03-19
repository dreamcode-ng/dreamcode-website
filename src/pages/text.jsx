import { Trans } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';


export default function Texting ({ person, messages }) {

  const { t } = useTranslation('common');
    
  const name = "Juan";
  const count = "3";

  return (
    <>
        <p>{t('nameTitle')}</p>
        <Trans i18nKey="userMessagesUnread" count={count}>
        Hello <strong title="">{name}</strong>, you have {count} unread message. <Link href="/msgs">Go to messages</Link>.
        </Trans>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  };