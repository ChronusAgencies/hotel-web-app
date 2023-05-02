import { TGeneralProps } from '@/utils/types/types';
import React from 'react';

type TFormProps = TGeneralProps & {
  onSubmit : (event : React.FormEvent<HTMLFormElement>) => void
  action? : string,
  method? : 'GET' | 'POST'
}

const Form = ({classname, children, onSubmit, action, method} : TFormProps) => {
  return (
    <>
      <form action={action} method={method} className={classname} onSubmit={onSubmit}>
        {children}
      </form>
    </>
  )
}

export default Form