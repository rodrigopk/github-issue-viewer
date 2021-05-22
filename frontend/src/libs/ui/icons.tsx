import { FaGithub } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

const GithubIcon: React.FC<{}> = () => <Icon as={FaGithub} />;

export const Icons = {
  Github: GithubIcon,
};
