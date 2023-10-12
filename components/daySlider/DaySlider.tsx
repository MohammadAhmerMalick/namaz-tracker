'use client'

import classNames from 'classnames'
import { useState } from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const DaySlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      paritialVisibilityGutter: 10,
    },
  }

  const [namazha, setNamazha] = useState([
    { label: 'Fajar', done: true },
    { label: 'Zuhr', done: false },
    { label: 'Asr', done: false },
    { label: 'Magrib', done: false },
    { label: 'Isha', done: false },
  ])

  const handleNamazClick = (label: string, done: boolean) => {
    setNamazha((state) =>
      state.map((s) => (s.label === label ? { ...s, done: !done } : s))
    )
  }

  return (
    <section>
      <Carousel
        arrows={false}
        partialVisbile
        itemClass="grid"
        responsive={responsive}
      >
        {namazha.map(({ label, done }) => (
          <button
            onClick={() => {
              handleNamazClick(label, done)
            }}
            key={label}
            className={classNames(
              'inline-block rounded-lg border text-center m-1 py-5 shadow-md font-medium cursor-pointer',
              { 'bg-orange-600 text-slate-50': done }
            )}
          >
            {label}
          </button>
        ))}
      </Carousel>
    </section>
  )
}

export default DaySlider
