import { MenuIcon } from '@heroicons/react/solid';
import { noop } from 'lodash';
import { useState } from 'react';

import { Button, Drawer } from '../Elements';

type MenuProps = {
  children?: React.ReactNode;
};

const Menu = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        startIcon={<MenuIcon className="h-4 w-4" />}
        isIconOnly
        variant="ghost"
      />
      <Drawer
        isOpen={isOpen}
        onClose={noop}
        title="foo"
        size="md"
        renderFooter={() => (
          <>
            <Button variant="inverse" size="sm" onClick={close}>
              Cancel
            </Button>
          </>
        )}
      >
        {children}
      </Drawer>
    </div>
  );
};

export { Menu };
