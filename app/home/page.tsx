import DaySlider from '@/components/daySlider/DaySlider'
import CalendarDisplay from '@/components/CalendarDisplay'

const page = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="px-3 mt-8 ">
          <h1 className="sm:text-4xl text-2xl font-semibold">
            Wednesday, 11-10-2123
          </h1>
          <p className="text-sm">Lorem ipsum, dolor sit amet consectetur ?</p>
          <DaySlider />
        </div>
      </section>
      <CalendarDisplay />
    </>
  )
}

export default page
