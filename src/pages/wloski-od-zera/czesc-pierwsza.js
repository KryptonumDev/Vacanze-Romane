import React from "react"
import PageHeader from "../../components/PageHeader/PageHeader"
import CoursesFirstSection from "../../components/SectionsComponents/CoursesFirstSection"

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

const CzescPierwszaPage = () => {
  return (
    <>
      <PageHeader
        paragraph="parte prima"
        subheader="Część Pierwsza 1.0."
        bg="green"
        withNav
        subNav
        navItems={navItems}
      />
      <CoursesFirstSection />
    </>
  )
}

export default CzescPierwszaPage
