import { TGeneralProps } from '@/utils/types/types';
import Link, { LinkProps } from 'next/link';
import React from 'react';

type TRouteProps = TGeneralProps & LinkProps;

const Route = ({classname,children,...rest} : TRouteProps) => {
  return (
    <>
      <Link className={classname} {...rest}>
        {children}
      </Link>
    </>
  )
}

export default Route