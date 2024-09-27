import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <div className=''>{children}</div>
    </div>
  )
}

export default layout