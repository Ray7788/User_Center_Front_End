import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Designed by Rui Xu'
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'University',
          title: 'The University of Manchester',
          href: 'https://www.manchester.ac.uk/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
