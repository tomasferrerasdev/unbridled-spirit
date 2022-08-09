import { LocalMallOutlined } from '@mui/icons-material';
import { Badge, IconButton, Link } from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';

interface Props {
  numberOfItems: number;
}

export const NavBadge: FC<Props> = ({ numberOfItems }) => {
  return (
    <NextLink href="/cart" passHref>
      <Link>
        <IconButton>
          <Badge
            badgeContent={numberOfItems > 9 ? '+9' : numberOfItems}
            color="primary"
          >
            <LocalMallOutlined color="primary" />
          </Badge>
        </IconButton>
      </Link>
    </NextLink>
  );
};
