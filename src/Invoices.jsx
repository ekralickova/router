import React from 'react'
import { getInvoices } from './data.js'

export default function Invoices() {
  const invoices = getInvoices()

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        {/* Zde vytvořte seznam invoices jako jednotlivé <Link> komponenty pomocí metody invoices.map() */}
      </nav>
      {/* Zde později bude Outlet komponenta */}
    </div>
  )
}
