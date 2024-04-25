import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Filter from '../components/Filter/Filter'
import ScrollButton from '../components/ScrollButton'




export default function Atlas() {
  return (
    <>
    <title>Навигатор профессий</title>
    <ScrollButton />
    <Header />
    <Filter />
    <Footer />
    </>
  )
}
