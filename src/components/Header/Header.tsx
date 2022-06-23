import {
  MicrophoneIcon,
  VideoCameraIcon,
  ViewGridIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';

import { Button } from '../Elements';
import { Menu } from '../Menu';

export type HeaderProps = Record<string, unknown>;

const Header = () => {
  return (
    <div className="flex">
      <Menu />
      <Button startIcon={<MicrophoneIcon className="h-4 w-4" />} isIconOnly variant="ghost" />
      <Button startIcon={<VideoCameraIcon className="h-4 w-4" />} isIconOnly variant="ghost" />
      <Button startIcon={<ViewGridIcon className="h-4 w-4" />} isIconOnly variant="ghost" />
      <Button startIcon={<BellIcon className="h-4 w-4" />} isIconOnly variant="ghost" />
      <Button startIcon={<UserCircleIcon className="h-4 w-4" />} isIconOnly variant="ghost" />
    </div>
  );
};

export { Header };
