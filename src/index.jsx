import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Expenses from './Expenses.jsx'
import Invoices from './Invoices.jsx'
import Invoice from './Invoice.jsx'

const App = () => (
  <div>
    <h1>Bookkeeper!</h1>
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/invoices">Invoices</Link> |{' '}
      <Link to="/expenses">Expenses</Link>
    </nav>
    <Outlet />
  </div>
)

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
)
