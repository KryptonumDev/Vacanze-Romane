import React from "react"
import PageHeader from "../../components/PageHeader/PageHeader"
import CoursesContinueSection from "../../components/SectionsComponents/CoursesContinueSection"

const navItems = [
  {
    name: "Wprowadzenie 0.0",
    link: "/wloski-od-zera/wprowadzenie",
  },
  {
    name: "Część pierwsza 1.0",
    link: "/wloski-od-zera/czesc-pierwsza",
  },
  {
    name: "Kontynuacja",
    link: "/wloski-od-zera/kontynuacja",
  },
]

const KontynuacjaPage = () => {
  return (
    <>
      <PageHeader
        paragraph="continuazione"
        subheader="Kontynuacja 2.0."
        bg="green"
        withNav
        subNav
        navItems={navItems}
      />
      <CoursesContinueSection />
    </>
  )
}

export default KontynuacjaPage
