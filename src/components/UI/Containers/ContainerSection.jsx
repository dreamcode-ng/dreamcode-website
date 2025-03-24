import React from 'react';

export default function ContainerSection({children, idSection}) {
  return (
    <section className="container-dc container py-5 line-break" id={idSection}>
        {children}
    </section>
  )
}
